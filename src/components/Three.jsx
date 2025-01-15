// pages/three-lensflare.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';

const ThreeLensflare = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, controls, stats;
    const clock = new THREE.Clock();

    const init = () => {
      const container = containerRef.current;

      // Camera setup
      camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 15000);
      camera.position.z = 250;

      // Scene setup
      scene = new THREE.Scene();
      scene.background = new THREE.Color().setHSL(0.51, 0.4, 0.01);
      scene.fog = new THREE.Fog(scene.background, 3500, 15000);

      // Geometry setup
      const s = 250;
      const geometry = new THREE.BoxGeometry(s, s, s);
      const material = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0xffffff, shininess: 50 });

      for (let i = 0; i < 3000; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = 8000 * (2.0 * Math.random() - 1.0);
        mesh.position.y = 8000 * (2.0 * Math.random() - 1.0);
        mesh.position.z = 8000 * (2.0 * Math.random() - 1.0);
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        mesh.rotation.z = Math.random() * Math.PI;
        mesh.matrixAutoUpdate = false;
        mesh.updateMatrix();
        scene.add(mesh);
      }

      // Lighting setup
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.15);
      dirLight.position.set(0, -1, 0).normalize();
      dirLight.color.setHSL(0.1, 0.7, 0.5);
      scene.add(dirLight);

      // Lensflares
      const textureLoader = new THREE.TextureLoader();
      const textureFlare0 = textureLoader.load('/textures/lensflare/lensflare0.png');
      const textureFlare3 = textureLoader.load('/textures/lensflare/lensflare3.png');

      addLight(0.55, 0.9, 0.5, 5000, 0, -1000);
      addLight(0.08, 0.8, 0.5, 0, 0, -1000);
      addLight(0.995, 0.5, 0.9, 5000, 5000, -1000);

      function addLight(h, s, l, x, y, z) {
        const light = new THREE.PointLight(0xffffff, 1.5, 2000, 0);
        light.color.setHSL(h, s, l);
        light.position.set(x, y, z);
        scene.add(light);

        const lensflare = new Lensflare();
        lensflare.addElement(new LensflareElement(textureFlare0, 700, 0, light.color));
        lensflare.addElement(new LensflareElement(textureFlare3, 60, 0.6));
        lensflare.addElement(new LensflareElement(textureFlare3, 70, 0.7));
        lensflare.addElement(new LensflareElement(textureFlare3, 120, 0.9));
        lensflare.addElement(new LensflareElement(textureFlare3, 70, 1));
        light.add(lensflare);
      }

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setAnimationLoop(animate);
      container.appendChild(renderer.domElement);

      // Controls setup
      controls = new FlyControls(camera, renderer.domElement);
      controls.movementSpeed = 2500;
      controls.rollSpeed = Math.PI / 6;

      // Stats setup
      stats = new Stats();
      container.appendChild(stats.dom);

      // Event listeners
      window.addEventListener('resize', onWindowResize);
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      const delta = clock.getDelta();
      controls.update(delta);
      stats.update();
      renderer.render(scene, camera);
    };

    init();

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <>
      <div id="info" className='absolute bg-transparent z-3 opacity-15'>
        <a href="https://threejs.org" target="_blank" rel="noopener noreferrer">
          three.js
        </a>{' '}
        - lensflares<br />
        textures from{' '}
        <a href="http://www.ro.me" target="_blank" rel="noopener noreferrer">
          ro.me
        </a>
        <br />
        fly with WASD/RF/QE + mouse
      </div>
      <div ref={containerRef}></div>
    </>
  );
};

export default ThreeLensflare;
 