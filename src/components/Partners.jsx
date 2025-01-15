import React from 'react'
import CanvasScene from './Animate'
import { useEffect,useRef } from 'react';
import Pictures from './Pictures';

function Partners() {
  const divleft = useRef(null);
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideInLeft");
        }
      });
    },
    {
      threshold: 0.1, 
    }
  );
  
  if (divleft.current) {
    observer.observe(divleft.current);
  }
  
  return () => {
    if (divleft.current) {
      observer.unobserve(divleft.current);
    }
  };
  }, []);
  
  
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
    {/* <div className='text-white font-san text-2xl md:text-4xl pt-32 pl-10 sm:pl-40  font-times font-extrabold'>Partners</div> */}
    {/* <CanvasScene /> */}
    {/* <hr className='border-[#D2BA57] mt-10 w-4/5 mx-auto' /> */}
    <div className='sm:flex font-san justify-center gap-8 sm:gap-20 sm:pt-32 sm:pl-8 pl-20'>
       {/* <Pictures /> */}
        <img ref={divleft} className='w-32 h-4 mt-32'  src="https://n1t.301.myftpupload.com/wp-content/uploads/2021/02/190213-DALAW-Logo-final-300x45-1.png" alt="" />
        <img ref={divright} className='mb-12' src="https://n1t.301.myftpupload.com/wp-content/uploads/2021/02/1571559684225.png" alt="" />
    </div>
    </>
  )
}

export default Partners