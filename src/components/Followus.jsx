import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiTelegramLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoMediumOld } from "react-icons/bi";
import Link from 'next/link';
import { useEffect,useRef } from 'react';
import CanvasScene from './Animate';

const Followus = () => {
  const divRes = useRef(null);
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

  if (divRes.current) {
    observer.observe(divRes.current);
  }

  return () => {
    if (divRes.current) {
      observer.unobserve(divRes.current);
    }
  };
}, []);
  return (
    <>
    {/* <div className='text-center text-white text-4xl h-0 font-times mt-28 font-extrabold'>
        Stay tunned with our latest project<br /> updates or follow us on any of the social<br /> media channels below
    </div>
    <div className='flex justify-center items-center h-96 mt-14'>
        <input type="text" placeholder="Enter your Email" className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-active w-40 ml-4">Subscribe</button>
    </div> */}
    {/* <div className="text-center text-white text-2xl md:text-4xl h-auto font-times mt-16 md:mt-28 font-extrabold">
  Stay tuned with our latest project<br /> updates or follow us on any of the social<br /> media channels below
</div>

<div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-96 mt-8 md:mt">
  <input
    type="text"
    placeholder="Enter your Email"
    className="input input-bordered w-full max-w-xs mb-4 md:mb-0 md:w-auto"
  />
  <button className="btn btn-active w-40 md:ml-4">
    Subscribe
  </button>
</div> */}

<div ref={divRes} className="bg-customgray mt-20 rounded-[10px]  ">
{/* <CanvasScene /> */}
<div className="text-center font-lora text-white text-2xl md:text-4xl pt-10 font-semibold">
  Stay tuned with our latest project<br /> updates or follow us on any of the social<br /> media channels below
</div>

<div className="flex flex-col md:flex-row justify-center items-center  mt-4 ">
  <input
    type="text"
    placeholder="Enter your Email"
    className="input input-bordered w-5/6 max-w-xs md:max-w-none md:w-[440px] font-lora"
  />
  <button className="btn font-lora btn-active w-40 md:ml-2 mt-2 md:mt-0">
    Subscribe
  </button>
</div>

<div className=' '>
<div className='text-white font-extrabold mt-4 text-center font-lora h-0 text-xl'>
    Follow us on
</div>
<div className="flex h-36 items-center justify-center space-x-3 sm:space-x-12">
    <Link href='#'>
        <CiFacebook className="text-white text-4xl sm:text-6xl opacity-50 hover:opacity-100" />
    </Link>
    <Link href='#'>
        <TiSocialTwitterCircular className="text-white text-4xl sm:text-6xl opacity-50 hover:opacity-100" />
    </Link>
    <Link href='#'>
        <TiSocialLinkedinCircular className="text-white text-4xl sm:text-6xl opacity-50 hover:opacity-100" />
    </Link>
    <Link href='#'>
        <RiTelegramLine className="text-white text-4xl sm:text-6xl opacity-50 hover:opacity-100" />
    </Link>
    <Link href='#'>
        <FaInstagramSquare className="text-white text-4xl sm:text-6xl opacity-50 hover:opacity-100" />
    </Link>
    <Link href='#'>
        <BiLogoMediumOld className="text-white text-4xl sm:text-6xl opacity-50 hover:opacity-100" />
    </Link>
</div>
</div>

</div>

    </>
  )
}

export default Followus