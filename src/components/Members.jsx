import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import CanvasScene from "./Animate";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Members = () => {
  const divlef = useRef(null);
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

    if (divlef.current) {
      observer.observe(divlef.current);
    }

    return () => {
      if (divlef.current) {
        observer.unobserve(divlef.current);
      }
    };
  }, []);

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

  const divrig = useRef(null);
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

    if (divrig.current) {
      observer.observe(divrig.current);
    }

    return () => {
      if (divrig.current) {
        observer.unobserve(divrig.current);
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
      <div className="relative bg-gradient-radial gradient-bg">
        {/* <img
          src="/Animate-4.png"
          className="absolute top-0 left-0 w-full h-[540px] opacity-30 object-cover z-0"
        /> */}
        <div className="font-san">
          {/* <CanvasScene /> */}
          <p className="text-center text-gray-300 font-bold font-merry pt-4">
            OUR AMAZING
          </p>
          <p className="text-center text-yellow-400 text-4xl font-merry font-extrabold">
            Team Of Experts
          </p>
        </div>
        <div className="flex flex-wrap font-san justify-center gap-6 md:gap-16 mt-8 ">
          {/* <div ref={divleft} className="bg-[#493E1D] card w-64 h-80 md:h-[420px] md:w-80 shadow-xl ">
           <figure className="px-10 pt-10">
    <img
      src="https://agcoin.io/wp-content/uploads/2021/04/martin-photo2.jpg"
      alt="Shoes"
      className="rounded-xl md:h-[300px] h-[220px] w-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white"><b>Martin Mobarak</b></h2>
    <p className='text-white'><b>Founder, CEO</b></p>
   
  </div>
</div> */}
          <div
            ref={divlef}
            className="card bg-yellow-700 mb-6 w-64 h-80 md:h-[420px] md:w-90 shadow-xl"
          >
            <figure>
              <img
                src="https://agcoin.io/wp-content/uploads/2021/04/martin-photo2.jpg"
                alt="Shoes"
                className=""
              />
            </figure>
            <div className="card-body font-times">
              <h2 className="font-bold text-lg md:text-2xl text-white text-center font-roboto">
                Martin Mobarak
              </h2>
              <p className="text-white font-times text-center text-base md:text-xl font-roboto">
                Founder, CEO
              </p>
            </div>
          </div>

          <div className="card bg-yellow-700 w-64 h-80 md:h-[420px] md:w-90 shadow-xl">
            <figure>
              <img
                src="https://agcoin.io/wp-content/uploads/2021/03/oscar-photo-e1616786798745.jpg"
                alt="Shoes"
                className=""
              />
            </figure>
            <div className="card-body font-roboto">
              <h2 className="font-bold text-lg md:text-2xl text-white text-center">
                Oscar Jarquin
              </h2>
              <p className="text-white text-center text-base md:text-xl">
                CO-FOUNDER
              </p>
            </div>
          </div>

          <div
            ref={divrig}
            className="card bg-yellow-700 w-64 h-80 md:h-[420px] md:w-90 shadow-xl"
          >
            <figure>
              <img
                src="https://agcoin.io/wp-content/uploads/2021/03/omar-e1616787014904.jpg"
                alt="Shoes"
                className=""
              />
            </figure>
            <div className="card-body font-roboto">
              <h2 className="font-bold text-lg md:text-2xl text-white text-center">
                Omar Mobarak
              </h2>
              <p className="text-white text-center text-base md:text-xl">
                CO-FOUNDER
              </p>
            </div>
          </div>

          {/* <div ref={divleft} className="card bg-[#493E1D] w-64 h-80 md:h-[450px] md:w-96 shadow-xl">
  <figure>
    <img
      src="https://agcoin.io/wp-content/uploads/2021/03/bryan-photo-e1616786841161.jpg"
      alt="Shoes"
      className='' />
  </figure>
  <div className="card-body font-roboto">
    <h2 className="font-bold text-lg md:text-2xl text-white text-center">
    Bryan Cohen
    </h2>
    <p className='text-white text-center text-base md:text-xl'>COB</p>
  </div>
</div>

<div ref={divright} className="card bg-[#493E1D] w-64 h-80 md:h-[450px] md:w-96 shadow-xl">
  <figure>
    <img
      src="https://agcoin.io/wp-content/uploads/2021/03/Hans.jpg"
      alt="Shoes"
      className='w-full' />
  </figure>
  <div className="card-body font-roboto">
    <h2 className="font-bold text-lg md:text-2xl text-white text-center">
    Hans Kuhn
    </h2>
    <p className='text-white text-center text-base md:text-xl'>Legal Avisor</p>
  </div>
</div> */}

          {/* <div className="card bg-[#493E1D] w-64 h-80 md:h-[420px] md:w-80 shadow-xl">
           <figure className="px-10 pt-10">
    <img
      src="https://agcoin.io/wp-content/uploads/2021/03/oscar-photo-e1616786798745.jpg"
      alt="Shoes"
      className="rounded-xl md:h-[300px] h-[220px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white"><b>Oscar Jarquin</b></h2>
    <p className='text-white'><b>CO-FOUNDER</b></p>
    
  </div>
</div>

<div ref={divrig} className="card bg-[#493E1D] w-64 h-80 md:h-[420px] md:w-80 shadow-xl">
           <figure className="px-10 pt-10">
    <img
      src="https://agcoin.io/wp-content/uploads/2021/03/omar-e1616787014904.jpg"
      alt="Shoes"
      className="rounded-xl md:h-[300px] h-[220px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white"><b>Omar Mobarak</b></h2>
    <p className='text-white'><b>CO-FOUNDER</b></p>
    
  </div>
</div>

<div ref={divlef} className="card bg-[#493E1D] w-64 h-80 md:h-[420px] md:w-80 shadow-xl">
           <figure className="px-10 pt-10">
    <img
      src="https://agcoin.io/wp-content/uploads/2021/03/bryan-photo-e1616786841161.jpg"
      alt="Shoes"
      className="rounded-xl md:h-[300px] h-[220px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white"><b>Bryan Cohen</b></h2>
    <p className='text-white'><b>COB</b></p>

  </div>
</div>
<div ref={divright} className="card bg-[#493E1D] w-64 h-80 md:h-[420px] md:w-80 shadow-xl">
           <figure className="px-10 pt-10">
    <img
      src="https://agcoin.io/wp-content/uploads/2021/03/Hans.jpg"
      alt="Shoes"
      className="rounded-xl md:h-[300px] h-[220px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white"><b>Hans Kuhn</b></h2>
    <p className='text-white'><b>Legal Avisor</b></p>
  </div>
</div>  */}
        </div>
      </div>
      <hr className="border-2 border-[#D2BA57]" />
    </>
  );
};

export default Members;

// flex flex-wrap justify-center gap-8 mt-10