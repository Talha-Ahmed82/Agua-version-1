// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const CanvasScene = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Set up the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.position.z = 5;

//     // Create a plane geometry for wave motion
//     const geometry = new THREE.PlaneGeometry(20, 30, 40, 80); // 40x40 segments for smooth waves
//     const material = new THREE.MeshBasicMaterial({ color: 0xFFD700, wireframe: true }); // Initial color (Golden)
//     const plane = new THREE.Mesh(geometry, material);
//     scene.add(plane);

//     // Store original vertex positions for wave animation
//     const { array: originalVertices } = geometry.attributes.position;
//     const vertexCount = originalVertices.length / 3;
//     const waveVertices = originalVertices.slice();

//     const clock = new THREE.Clock();

//     const animate = function () {
//       requestAnimationFrame(animate);

//       const time = clock.getElapsedTime();

//       // Toggle between two colors every second
//       if (Math.floor(time) % 2 === 0) {
//         material.color.set(0xFFD700); // Color 1: Golden
//       } else {
//         material.color.set(0xC0C0C0); // Color 2: DodgerBlue
//       }

//       // Create wave effect by adjusting z position of vertices
//       for (let i = 0; i < vertexCount; i++) {
//         const x = waveVertices[i * 3];
//         const y = waveVertices[i * 3 + 1];

//         const waveX1 = 0.5 * Math.sin(x * 2 + time);
//         const waveX2 = 0.25 * Math.sin(x * 3 + time * 2);
//         const waveY1 = 0.5 * Math.sin(y * 4 + time);

//         geometry.attributes.position.array[i * 3 + 2] = waveX1 + waveX2 + waveY1; // z position
//       }

//       geometry.attributes.position.needsUpdate = true;

//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute bg-transparent z-3 opacity-30" />;
// };

// export default CanvasScene;



// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const CanvasScene = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Set up the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.position.z = 5;

//     // Create a plane geometry for wave motion
//     const geometry = new THREE.PlaneGeometry(20, 20, 40, 80); // 40x40 segments for smooth waves
//     const material = new THREE.MeshBasicMaterial({ color: 0xFFD700, wireframe: true }); // Initial color (Golden)
//     const plane = new THREE.Mesh(geometry, material);
//     scene.add(plane);

//     // Store original vertex positions for wave animation
//     const { array: originalVertices } = geometry.attributes.position;
//     const vertexCount = originalVertices.length / 3;
//     const waveVertices = originalVertices.slice();

//     // Spark particles setup
//     const sparkCount = 1000; // Number of sparks
//     const sparkGeometry = new THREE.BufferGeometry();
//     const sparkPositions = new Float32Array(sparkCount * 3); // Each spark has 3 values (x, y, z)

//     for (let i = 0; i < sparkCount; i++) {
//       sparkPositions[i * 3] = (Math.random() - 0.5) * 20; // x
//       sparkPositions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
//       sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
//     }

//     sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
//     const sparkMaterial = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.1 }); // White sparks
//     const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
//     scene.add(sparks);

//     const clock = new THREE.Clock();

//     const animate = function () {
//       requestAnimationFrame(animate);

//       const time = clock.getElapsedTime();

//       // Toggle between two colors every second
//       if (Math.floor(time) % 2 === 0) {
//         material.color.set(0xFFD700); // Color 1: Golden
//       } else {
//         material.color.set(0xC0C0C0); // Color 2: Silver
//       }

//       // Create wave effect by adjusting z position of vertices
//       for (let i = 0; i < vertexCount; i++) {
//         const x = waveVertices[i * 3];
//         const y = waveVertices[i * 3 + 1];

//         const waveX1 = 0.5 * Math.sin(x * 2 + time);
//         const waveX2 = 0.25 * Math.sin(x * 3 + time * 2);
//         const waveY1 = 0.5 * Math.sin(y * 4 + time);

//         geometry.attributes.position.array[i * 3 + 2] = waveX1 + waveX2 + waveY1; // z position
//       }

//       geometry.attributes.position.needsUpdate = true;

//       // Animate sparks: make them flicker or move slightly
//       const sparkPositions = sparkGeometry.attributes.position.array;
//       for (let i = 0; i < sparkCount; i++) {
//         // Make sparks move up and reset after they go too far up
//         sparkPositions[i * 3 + 1] += 0.02 * Math.sin(time * 5 + i); // slight vertical motion
//         if (sparkPositions[i * 3 + 1] > 10) {
//           sparkPositions[i * 3 + 1] = -10; // Reset if spark goes too high
//         }
//       }

//       sparkGeometry.attributes.position.needsUpdate = true; // Inform Three.js to update sparks

//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute bg-transparent z-3 opacity-15" />;
// };

// export default CanvasScene;






// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const CanvasScene = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Set up the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.position.z = 10;

//     // Create coin-like objects
//     const coinGeometry = new THREE.CircleGeometry(0.5, 32); // Circular geometry for coins
//     const coinMaterial = new THREE.MeshBasicMaterial({ color: 0xDEAF30, side: THREE.DoubleSide }); // Initial color: Golden
//     const coins = [];

//     for (let i = 0; i < 100; i++) {
//       const coin = new THREE.Mesh(coinGeometry, coinMaterial.clone()); // Clone material for each coin
      
//       // Random position for each coin
//       coin.position.x = (Math.random() - 0.5) * 20;
//       coin.position.y = (Math.random() - 0.5) * 20;
//       coin.position.z = (Math.random() - 0.5) * 10;
      
//       // Random rotation for each coin
//       coin.rotation.x = Math.random() * Math.PI;
//       coin.rotation.y = Math.random() * Math.PI;

//       scene.add(coin);
//       coins.push(coin);
//     }

//     // Spark particles setup (optional for extra visual effect)
//     const sparkCount = 500;
//     const sparkGeometry = new THREE.BufferGeometry();
//     const sparkPositions = new Float32Array(sparkCount * 3);

//     for (let i = 0; i < sparkCount; i++) {
//       sparkPositions[i * 3] = (Math.random() - 0.5) * 30; // x
//       sparkPositions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
//       sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
//     }

//     sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
//     const sparkMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
//     const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
//     scene.add(sparks);

//     const clock = new THREE.Clock();

//     const animate = function () {
//       requestAnimationFrame(animate);
//       const time = clock.getElapsedTime();

//       // Toggle between golden and silver color every second
//       const toggleColor = Math.floor(time) % 2 === 0 ? 0xF6F700 : 0xC0C0C0; // Golden (FFD700) or Silver (C0C0C0)

//       coins.forEach((coin, index) => {
//         coin.material.color.set(toggleColor); // Set the coin color to either golden or silver

//         // Rotate and move the coins slightly for animation
//         coin.rotation.x += 0.01;
//         coin.rotation.y += 0.02;
//         coin.position.y += 0.01 * Math.sin(time + index); // Floating effect
//         if (coin.position.y > 10) coin.position.y = -10; // Reset position if too high
//       });

//       // Animate sparks: make them flicker or move slightly
//       const sparkPositions = sparkGeometry.attributes.position.array;
//       for (let i = 0; i < sparkCount; i++) {
//         // Make sparks move up and reset after they go too far up
//         sparkPositions[i * 3 + 1] += 0.02 * Math.sin(time * 5 + i); // slight vertical motion
//         if (sparkPositions[i * 3 + 1] > 10) {
//           sparkPositions[i * 3 + 1] = -10; // Reset if spark goes too high
//         }
//       }

//       sparkGeometry.attributes.position.needsUpdate = true;

//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute bg-transparent z-3 opacity-30" />;
// };

// export default CanvasScene;

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const CanvasScene = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Set up the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.position.z = 15;

//     // Create Bitcoin-like coin geometry (cylinder)
//     const coinGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32); // 0.5 radius, 0.1 height for thickness, 32 segments for smooth edges
//     const coinMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 }); // Golden color
//     const coins = [];

//     for (let i = 0; i < 100; i++) {
//       const coin = new THREE.Mesh(coinGeometry, coinMaterial.clone()); // Clone material for each coin
      
//       // Random position for each coin
//       coin.position.x = (Math.random() - 0.5) * 20;
//       coin.position.y = (Math.random() - 0.5) * 20;
//       coin.position.z = (Math.random() - 0.5) * 10;
      
//       // Random rotation for each coin
//       coin.rotation.x = Math.random() * Math.PI;
//       coin.rotation.y = Math.random() * Math.PI;

//       scene.add(coin);
//       coins.push(coin);
//     }

//     // Spark particles setup (optional for extra visual effect)
//     const sparkCount = 500;
//     const sparkGeometry = new THREE.BufferGeometry();
//     const sparkPositions = new Float32Array(sparkCount * 3);

//     for (let i = 0; i < sparkCount; i++) {
//       sparkPositions[i * 3] = (Math.random() - 0.5) * 30; // x
//       sparkPositions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
//       sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
//     }

//     sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
//     const sparkMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
//     const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
//     scene.add(sparks);

//     const clock = new THREE.Clock();

//     const animate = function () {
//       requestAnimationFrame(animate);
//       const time = clock.getElapsedTime();

//       // Toggle between golden and silver color every second
//       const toggleColor = Math.floor(time) % 2 === 0 ? 0xF6F700 : 0xC0C0C0; // Golden (FFD700) or Silver (C0C0C0)

//       coins.forEach((coin, index) => {
//         coin.material.color.set(toggleColor); // Set the coin color to either golden or silver

//         // Rotate and move the coins slightly for animation
//         coin.rotation.x += 0.01;
//         coin.rotation.y += 0.02;
//         coin.position.y += 0.01 * Math.sin(time + index); // Floating effect
//         if (coin.position.y > 10) coin.position.y = -10; // Reset position if too high
//       });

//       // Animate sparks: make them flicker or move slightly
//       const sparkPositions = sparkGeometry.attributes.position.array;
//       for (let i = 0; i < sparkCount; i++) {
//         // Make sparks move up and reset after they go too far up
//         sparkPositions[i * 3 + 1] += 0.02 * Math.sin(time * 5 + i); // slight vertical motion
//         if (sparkPositions[i * 3 + 1] > 10) {
//           sparkPositions[i * 3 + 1] = -10; // Reset if spark goes too high
//         }
//       }

//       sparkGeometry.attributes.position.needsUpdate = true;

//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute bg-transparent z-3 opacity-15" />;
// };

// export default CanvasScene;


// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// const CanvasScene = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Set up the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.position.z = 15;

//     // Load font for text (dollar sign)
//     const fontLoader = new FontLoader();

//     // Bitcoin-like coin geometry (cylinder)
//     const coinGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32); // 0.5 radius, 0.1 thickness, 32 segments
//     const coinMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 }); // Golden color

//     const coins = [];

//     // Create coins with dollar signs on both sides
//     fontLoader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', (font) => {
//       for (let i = 0; i < 100; i++) {
//         const coin = new THREE.Mesh(coinGeometry, coinMaterial.clone());

//         // Random position for each coin
//         coin.position.x = (Math.random() - 0.5) * 20;
//         coin.position.y = (Math.random() - 0.5) * 20;
//         coin.position.z = (Math.random() - 0.5) * 10;

//         // Random rotation for each coin
//         coin.rotation.x = Math.random() * Math.PI;
//         coin.rotation.y = Math.random() * Math.PI;

//         scene.add(coin);
//         coins.push(coin);

//         // Create $ sign text geometry for both sides
//         const textGeometryFront = new TextGeometry('$', {
//           font: font,
//           size: 0.3, // Size of the text
//           height: 0, // Flat text with no thickness
//         });

//         const textGeometryBack = new TextGeometry('$', {
//           font: font,
//           size: 0.3,
//           height: 0, // Flat text with no thickness
//         });

//         const textMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF }); // White color for the $ sign

//         const coinTextFront = new THREE.Mesh(textGeometryFront, textMaterial);
//         const coinTextBack = new THREE.Mesh(textGeometryBack, textMaterial);

//         // Align the text with the coin surface on the front side
//         coinTextFront.position.set(0, 0, 0.05); // Align with the front surface of the coin
//         coinTextFront.rotation.x = Math.PI / 2; // Make sure text faces forward
//         coin.add(coinTextFront); // Attach to coin mesh

//         // Align the text with the coin surface on the back side
//         coinTextBack.position.set(0, 0, -0.05); // Align with the back surface of the coin
//         coinTextBack.rotation.x = -Math.PI / 2; // Make sure text faces backward
//         coin.add(coinTextBack); // Attach to coin mesh
//       }
//     });

//     // Spark particles setup (optional for extra visual effect)
//     const sparkCount = 500;
//     const sparkGeometry = new THREE.BufferGeometry();
//     const sparkPositions = new Float32Array(sparkCount * 3);

//     for (let i = 0; i < sparkCount; i++) {
//       sparkPositions[i * 3] = (Math.random() - 0.5) * 30; // x
//       sparkPositions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
//       sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
//     }

//     sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
//     const sparkMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
//     const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
//     scene.add(sparks);

//     const clock = new THREE.Clock();

//     const animate = function () {
//       requestAnimationFrame(animate);
//       const time = clock.getElapsedTime();

//       // Toggle between golden and silver color every second
//       const toggleColor = Math.floor(time) % 2 === 0 ? 0xFFD700 : 0xC0C0C0; // Golden (FFD700) or Silver (C0C0C0)

//       coins.forEach((coin, index) => {
//         coin.material.color.set(toggleColor); // Set the coin color to either golden or silver

//         // Rotate and move the coins slightly for animation
//         coin.rotation.x += 0.01;
//         coin.rotation.y += 0.02;
//         coin.position.y += 0.01 * Math.sin(time + index); // Floating effect
//         if (coin.position.y > 10) coin.position.y = -10; // Reset position if too high
//       });

//       // Animate sparks: make them flicker or move slightly
//       const sparkPositions = sparkGeometry.attributes.position.array;
//       for (let i = 0; i < sparkCount; i++) {
//         // Make sparks move up and reset after they go too far up
//         sparkPositions[i * 3 + 1] += 0.02 * Math.sin(time * 5 + i); // slight vertical motion
//         if (sparkPositions[i * 3 + 1] > 10) {
//           sparkPositions[i * 3 + 1] = -10; // Reset if spark goes too high
//         }
//       }

//       sparkGeometry.attributes.position.needsUpdate = true;

//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute bg-transparent z-3 opacity-15" />;
// };

// export default CanvasScene;




// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// const CanvasScene = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Set up the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.position.z = 15;

//     // Load font for text (dollar sign)
//     const fontLoader = new FontLoader();

//     // Bitcoin-like coin geometry (cylinder)
//     const coinGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32); // 0.5 radius, 0.1 thickness, 32 segments
//     const coinMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 }); // Golden color

//     const coins = [];
//     const coinTexts = [];

//     // Create coins with dollar signs on both sides
//     fontLoader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', (font) => {
//       for (let i = 0; i < 100; i++) {
//         const coin = new THREE.Mesh(coinGeometry, coinMaterial.clone());

//         // Random position for each coin
//         coin.position.x = (Math.random() - 0.5) * 20;
//         coin.position.y = (Math.random() - 0.5) * 20;
//         coin.position.z = (Math.random() - 0.5) * 10;

//         // Random rotation for each coin
//         coin.rotation.x = Math.random() * Math.PI;
//         coin.rotation.y = Math.random() * Math.PI;

//         scene.add(coin);
//         coins.push(coin);

//         // Create $ sign text geometry for both sides
//         const textGeometryFront = new TextGeometry('$', {
//           font: font,
//           size: 0.3, // Size of the text
//           height: 0.05, // Depth of the text (how thick the text is)
//         });

//         const textGeometryBack = new TextGeometry('$', {
//           font: font,
//           size: 0.4,
//           height: 0.05,
          
//         });

//         const textMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF }); // White color for the $ sign

//         const coinTextFront = new THREE.Mesh(textGeometryFront, textMaterial);
//         const coinTextBack = new THREE.Mesh(textGeometryBack, textMaterial);

//         // Align the text with the coin surface on the front side
//         coinTextFront.position.set(0, 0, 0.06); // Slightly offset from the front surface
//         coinTextFront.rotation.x = Math.PI / 2; // Make sure text faces forward
//         coin.add(coinTextFront); // Attach to coin mesh

//         // Align the text with the coin surface on the back side
//         coinTextBack.position.set(0, 0, -0.06); // Slightly offset from the back surface
//         coinTextBack.rotation.x = -Math.PI / 2; // Make sure text faces backward
//         coin.add(coinTextBack); // Attach to coin mesh

//         coinTexts.push({ front: coinTextFront, back: coinTextBack });
//       }
//     });

//     // Spark particles setup (optional for extra visual effect)
//     // const sparkCount = 500;
//     // const sparkGeometry = new THREE.BufferGeometry();
//     // const sparkPositions = new Float32Array(sparkCount * 3);

//     // for (let i = 0; i < sparkCount; i++) {
//     //   sparkPositions[i * 3] = (Math.random() - 0.5) * 30; // x
//     //   sparkPositions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
//     //   sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
//     // }

//     // sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
//     // const sparkMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
//     // const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
//     // scene.add(sparks);

//     const clock = new THREE.Clock();

//     const animate = function () {
//       requestAnimationFrame(animate);
//       const time = clock.getElapsedTime();

//       // Toggle between golden and silver color every second
//       const toggleColor = Math.floor(time) % 2 === 0 ? 0xE5BE40 : 0xC0C0C0; // Golden (FFD700) or Silver (C0C0C0)

//       coins.forEach((coin, index) => {
//         coin.material.color.set(toggleColor); // Set the coin color to either golden or silver

//         // Rotate and move the coins slightly for animation
//         coin.rotation.x += 0.01;
//         coin.rotation.y += 0.02;
//         coin.position.y += 0.01 * Math.sin(time + index); // Floating effect
//         if (coin.position.y > 10) coin.position.y = -10; // Reset position if too high
//       });

//       // Animate sparks: make them flicker or move slightly
//       // const sparkPositions = sparkGeometry.attributes.position.array;
//       // for (let i = 0; i < sparkCount; i++) {
//       //   // Make sparks move up and reset after they go too far up
//       //   sparkPositions[i * 3 + 1] += 0.02 * Math.sin(time * 5 + i); // slight vertical motion
//       //   if (sparkPositions[i * 3 + 1] > 10) {
//       //     sparkPositions[i * 3 + 1] = -10; // Reset if spark goes too high
//       //   }
//       // }

//       sparkGeometry.attributes.position.needsUpdate = true;

//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute bg-transparent z-2 " />;
// };

// export default CanvasScene;






// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// const CanvasScene = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Set up the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.position.z = 15;

//     // Load font for text (dollar sign)
//     const fontLoader = new FontLoader();

//     // Bitcoin-like coin geometry (cylinder)
//     const coinGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32); // 0.5 radius, 0.1 thickness, 32 segments
//     const coinMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 }); // Golden color

//     const coins = [];

//     // Create coins with dollar signs on both sides
//     fontLoader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', (font) => {
//       for (let i = 0; i < 100; i++) {
//         const coin = new THREE.Mesh(coinGeometry, coinMaterial.clone());

//         // Random position for each coin
//         coin.position.x = (Math.random() - 0.5) * 20;
//         coin.position.y = (Math.random() - 0.5) * 20;
//         coin.position.z = (Math.random() - 0.5) * 10;

//         // Random rotation for each coin
//         coin.rotation.x = Math.random() * Math.PI;
//         coin.rotation.y = Math.random() * Math.PI;

//         scene.add(coin);
//         coins.push(coin);

//         // Create $ sign text geometry for both sides
//         const textGeometry = new TextGeometry('$', {
//           font: font,
//           size: 0.4, // Size of the text
//           height: 0.05, // Depth of the text (how thick the text is)
//           curveSegments: 16,
//           bevelEnabled: false,
//         });

//         const textMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF }); // White color for the $ sign

//         // Front side text
//         const coinTextFront = new THREE.Mesh(textGeometry, textMaterial);
//         coinTextFront.position.set(0, 0, 0.06); // Centered on the front surface
//         coinTextFront.rotation.x = Math.PI / 2; // Make sure text faces forward
//         coin.add(coinTextFront); // Attach to coin mesh

//         // Back side text
//         const coinTextBack = new THREE.Mesh(textGeometry, textMaterial);
//         coinTextBack.position.set(0, 0, -0.06); // Centered on the back surface
//         coinTextBack.rotation.x = -Math.PI / 2; // Make sure text faces backward
//         coin.add(coinTextBack); // Attach to coin mesh
//       }
//     });

//     const clock = new THREE.Clock();

//     const animate = function () {
//       requestAnimationFrame(animate);
//       const time = clock.getElapsedTime();

//       // Toggle between golden and silver color every second
//       const toggleColor = Math.floor(time) % 2 === 0 ? 0xDFAD2E : 0xC0C0C0; // Golden (FFD700) or Silver (C0C0C0)

//       coins.forEach((coin, index) => {
//         coin.material.color.set(toggleColor); // Set the coin color to either golden or silver

//         // Rotate and move the coins slightly for animation
//         coin.rotation.x += 0.01;
//         coin.rotation.y += 0.02;
//         coin.position.y += 0.01 * Math.sin(time + index); // Floating effect
//         if (coin.position.y > 10) coin.position.y = -10; // Reset position if too high
//       });

//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute bg-transparent z-2" />;
// };

// export default CanvasScene;


// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const CanvasScene = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     // Set up the scene, camera, and renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.position.z = 15;

//     // Spark particles setup
//     const sparkCount = 500;
//     const sparkGeometry = new THREE.BufferGeometry();
//     const sparkPositions = new Float32Array(sparkCount * 3);

//     for (let i = 0; i < sparkCount; i++) {
//       sparkPositions[i * 3] = (Math.random() - 0.5) * 30; // x
//       sparkPositions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
//       sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
//     }

//     sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
//     const sparkMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
//     const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
//     scene.add(sparks);

//     const clock = new THREE.Clock();

//     const animate = function () {
//       requestAnimationFrame(animate);
//       const time = clock.getElapsedTime();

//       // Animate sparks: make them flicker or move slightly
//       const sparkPositions = sparkGeometry.attributes.position.array;
//       for (let i = 0; i < sparkCount; i++) {
//         // Make sparks move up and reset after they go too far up
//         sparkPositions[i * 3 + 1] += 0.02 * Math.sin(time * 5 + i); // slight vertical motion
//         if (sparkPositions[i * 3 + 1] > 10) {
//           sparkPositions[i * 3 + 1] = -10; // Reset if spark goes too high
//         }
//       }

//       sparkGeometry.attributes.position.needsUpdate = true;

//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute bg-transparent z-3 " />;
// };

// export default CanvasScene;

// Correct Code
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CanvasScene = () => {
  const canvasRef = useRef();

  useEffect(() => {
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#373016'); 

    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 15;

    
    const sparkCount = 500;
    const sparkGeometry = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);

    for (let i = 0; i < sparkCount; i++) {
      sparkPositions[i * 3] = (Math.random() - 0.5) * 30; // x
      sparkPositions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }

    sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    const sparkMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
    scene.add(sparks);

    const clock = new THREE.Clock();

    const animate = function () {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Animate sparks: make them flicker or move slightly
      const sparkPositions = sparkGeometry.attributes.position.array;
      for (let i = 0; i < sparkCount; i++) {
        // Make sparks move up and reset after they go too far up
        sparkPositions[i * 3 + 1] += 0.02 * Math.sin(time * 5 + i); // slight vertical motion
        if (sparkPositions[i * 3 + 1] > 10) {
          sparkPositions[i * 3 + 1] = -10; // Reset if spark goes too high
        }
      }

      sparkGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute bg-transparent z-3 opacity-20" />;
};

export default CanvasScene;
