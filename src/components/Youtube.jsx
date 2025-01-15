import React from 'react'
import CanvasScene from './Animate'
import { useEffect,useRef } from 'react';

export const Youtube = () => {
  const divright = useRef(null);
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideInRight");
        }
      });
    },
    {
      threshold: 0.1, 
    }
  );

  if (divright.current) {
    observer.observe(divright.current);
  }

  return () => {
    if (divright.current) {
      observer.unobserve(divright.current);
    }
  };
}, []);


  return (
    <>
    {/* <div className='mt-20 items-center justify-center w-full flex '>
       <iframe className='border-4 border-lightgold z-10 rounded-[40px]' width="80%" height="615" src="https://www.youtube.com/embed/Uaijo3pjOTk?si=yzgPQmjwvxK0tuGx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div> */}


<div ref={divright} className="flex items-center justify-center h-screen px-4">
  {/* <CanvasScene /> */}
  {/* Video Container */}
  <div className="w-full max-w-[1000px] max-h-[800px] ">
    <div
      className="relative w-full rounded-[40px] overflow-hidden"
      style={{ paddingBottom: '56.25%' /* Maintain 16:9 aspect ratio */ }}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full border-4 border-lightgold rounded-[40px]"
        src="https://www.youtube.com/embed/Uaijo3pjOTk?si=yzgPQmjwvxK0tuGx"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>



    </>
  )
}
