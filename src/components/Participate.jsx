import React from 'react'
import { useEffect,useRef } from 'react';
import CanvasScene from './Animate';

function Participate() {
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
//     <div className="sm:flex justify-center h-[900px]">
//         <div className='text-white p-10 font-times h-[800px] bg-[#242424] shadow-slate-600 w-2/5 rounded-2xl'>
//             <img className='w-20 h-20' src="https://agua-two.vercel.app/agua-logo.png" alt="" /><br />
//             <p className='font-bold text-lg lg:text-red-600 md:text-blue-800 sm:text-green-900 text-yellow-700'>Dates</p><br />
//             <p className='text-[#C7C7C7]'>Mar 30, 2021 - Sep 30, 2021</p><br />
//             <p className='font-bold text-lg'>Tokens for sale:</p><br />
//             <p className='text-[#C7C7C7]'>986,589 out of 1,391,300</p><br />
//             <p className='font-bold text-lg'>Hard cap:</p><br />
//             <p className='text-[#C7C7C7]'>32,510 BNB</p><br />
//             <p className='font-bold text-lg'>Soft cap:</p><br />
//             <p className='text-[#C7C7C7]'>8,128 BNB</p><br />
//             <p className='font-bold text-lg'>Exchange rate:</p><br />
//             <p className='text-[#C7C7C7]'>1 BNB = 18 AGC</p><br />
//         </div>
//         <div className='font-times bg-[#242424] text-white p-32 w-2/4 h-[700px] rounded-2xl'>
//           <p className='font-bold text-lg text-[#C7C7C7]'>PARTICIPATE IN OUR TOKEN SALE</p><br />
//           <p className='font-bold text-lg'>ICO Ends in:</p><br />
//            <div className='flex md:flex-wrap'>
//             <div className="relative flex items-center">
//               <div className="pr-4">
//                 <span className='text-4xl font-extrabold'>00</span>
//                 <p className='text-[#C7C7C7]'>Weeks</p>
//               </div>
//             <div className="absolute right-0 h-full w-px bg-gray-300"></div> 
//            </div>

//   <div className='ml-4 relative flex items-center'>
//     <div className="pr-4">
//       <span className='text-4xl font-extrabold'>00</span>
//       <p className='text-[#C7C7C7]'>Days</p>
//     </div>
//     <div className="absolute right-0 h-full w-px bg-gray-300"></div> 
//   </div>

//   <div className='ml-4 relative flex items-center'>
//     <div className="pr-4">
//       <span className='text-4xl font-extrabold'>00</span>
//       <p className='text-[#C7C7C7]'>Hours</p>
//     </div>
//     <div className="absolute right-0 h-full w-px bg-gray-300"></div>
//   </div>

//   <div className='ml-4 relative flex items-center'>
//     <div className="pr-4">
//       <span className='text-4xl font-extrabold'>00</span>
//       <p className='text-[#C7C7C7]'>Minutes</p>
//     </div>
//     <div className="absolute right-0 h-full w-px bg-gray-300"></div> 
//   </div>

//   <div className='ml-4 relative'>
//     <span className='text-4xl font-extrabold'>00</span>
//     <p className='text-[#C7C7C7]'>Seconds</p>
//   </div>
// </div>

//             <br /><br /><br /> 
//             <button className="btn w-32 h-16 bg-[#C7C7C7]">Whitelist</button>
//             <hr className='mt-20 border-[#C7C7C7]' /><br />
//             <p className='font-bold text-lg text-[#C7C7C7]'>PAYMENT METHODS</p>
//         </div>
//     </div>
<div className="sm:flex flex-col lg:flex-row justify-center h-auto lg:h-[900px] p-4 lg:p-10">
  {/* <CanvasScene /> */}
  <div ref={divleft} className="text-white z-10 p-6 lg:p-10 font-times h-auto lg:h-[700px] bg-[#493E1D] shadow-slate-600 w-full lg:w-2/5 rounded-2xl mb-6 lg:mb-0">
    <img className="w-16 h-16 lg:w-20 lg:h-20 mx-auto" src="https://agua-two.vercel.app/agua-logo.png" alt="Logo" />
    <br />
    <p className="font-bold text-lg text-center lg:text-left">
      Dates
    </p>
    <br />
    <p className="text-[#C7C7C7] text-center lg:text-left">Mar 30, 2021 - Sep 30, 2021</p>
    <br />
    <p className="font-bold text-lg text-center lg:text-left">Tokens for sale:</p>
    <br />
    <p className="text-[#C7C7C7] text-center lg:text-left">986,589 out of 1,391,300</p>
    <br />
    <p className="font-bold text-lg text-center lg:text-left">Hard cap:</p>
    <br />
    <p className="text-[#C7C7C7] text-center lg:text-left">32,510 BNB</p>
    <br />
    <p className="font-bold text-lg text-center lg:text-left">Soft cap:</p>
    <br />
    <p className="text-[#C7C7C7] text-center lg:text-left">8,128 BNB</p>
    <br />
    <p className="font-bold text-lg text-center lg:text-left">Exchange rate:</p>
    <br />
    <p className="text-[#C7C7C7] text-center lg:text-left">1 BNB = 18 AGC</p>
  </div>

  <div ref={divright} className="font-times ml-2 z-0 bg-[#493E1D] text-white p-6 lg:p-10 w-full lg:w-2/4 h-auto lg:h-[600px] rounded-2xl">
    <p className="font-bold text-lg text-center lg:text-left text-[#C7C7C7]">PARTICIPATE IN OUR TOKEN SALE</p>
    <br />
    <p className="font-bold text-lg text-center lg:text-left">ICO Ends in:</p>
    <br />

    <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-start">
      <div className="relative flex items-center">
        <div className="pr-4">
          <span className="text-4xl font-extrabold">00</span>
          <p className="text-[#C7C7C7]">Weeks</p>
        </div>
        <div className="absolute right-0 h-full w-px bg-gray-300"></div>
      </div>

      <div className="ml-4 relative flex items-center">
        <div className="pr-4">
          <span className="text-4xl font-extrabold">00</span>
          <p className="text-[#C7C7C7]">Days</p>
        </div>
        <div className="absolute right-0 h-full w-px bg-gray-300"></div>
      </div>

      <div className="ml-4 relative flex items-center">
        <div className="pr-4">
          <span className="text-4xl font-extrabold">00</span>
          <p className="text-[#C7C7C7]">Hours</p>
        </div>
        <div className="absolute right-0 h-full w-px bg-gray-300"></div>
      </div>

      <div className="ml-4 relative flex items-center">
        <div className="pr-4">
          <span className="text-4xl font-extrabold">00</span>
          <p className="text-[#C7C7C7]">Minutes</p>
        </div>
        <div className="absolute right-0 h-full w-px bg-gray-300"></div>
      </div>

      <div className="ml-4 relative">
        <span className="text-4xl font-extrabold">00</span>
        <p className="text-[#C7C7C7]">Seconds</p>
      </div>
    </div>

    <br /><br /><br />
    <div className="flex justify-center lg:justify-start">
      <button className="btn w-32 h-16 bg-[#C7C7C7]">Whitelist</button>
    </div>

    <hr className="mt-20 border-[#C7C7C7]" />
    <br />
    <p className="font-bold text-lg text-center lg:text-left text-[#C7C7C7]">PAYMENT METHODS</p>
  </div>
</div>

  )
}

export default Participate