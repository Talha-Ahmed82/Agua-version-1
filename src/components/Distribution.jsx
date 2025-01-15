"use client";
import CanvasScene from './Animate';
// import React from 'react'
// import { FaRegCircleCheck } from "react-icons/fa6";
// import { MdAccessTime } from "react-icons/md";
// import CanvasScene from './Animate';
// import { useEffect,useRef } from 'react';

// function Distribution() {
//     const divleft = useRef(null);
//     useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-slideInLeft");
//           }
//         });
//       },
//       {
//         threshold: 0.1, 
//       }
//     );
    
//     if (divleft.current) {
//       observer.observe(divleft.current);
//     }
    
//     return () => {
//       if (divleft.current) {
//         observer.unobserve(divleft.current);
//       }
//     };
//     }, []);

//     const divright = useRef(null);
//     useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-slideInRight");
//           }
//         });
//       },
//       {
//         threshold: 0.1, 
//       }
//     );
  
//     if (divright.current) {
//       observer.observe(divright.current);
//     }
  
//     return () => {
//       if (divright.current) {
//         observer.unobserve(divright.current);
//       }
//     };
//   }, []);

//   return (
//     <div className='md:flex lg:mt-0 mt-10'>
//         <CanvasScene />
//         <div ref={divleft} className='font-times p-16 w-full md:w-2/4'>
//             <p className='font-extrabold text-4xl font-times text-white'>The roadmap  is consisted of five phases:</p>
//               <div className='pt-8'>
//                 <div className='flex'>
//                     <FaRegCircleCheck className='text-white text-4xl sm:te opacity-50' />
//                     <p className='text-white font-bold pl-4'>Phase 1</p>
//                 </div>
//             <p className="text-[#C7C7C7] pl-12">Complete AGC token offering for ongoing silver mine operations and technology development.</p>
//                 <div className='flex pt-4'>
//                     <MdAccessTime className='text-white text-4xl sm:te opacity-50' />
//                     <p className='text-white font-bold pl-4'>Phase 2</p>
//                 </div>
//             <p className="text-[#C7C7C7] pl-12">AGC Parachain launch to inherit Polkadot security. Multi-asset pallet integration.</p>
//                 <div className='flex pt-4'>
//                     <MdAccessTime className='text-white text-4xl sm:te opacity-50' />
//                     <p className='text-white font-bold pl-4'>Phase 3</p>
//                 </div>
//             <p className="text-[#C7C7C7] pl-12">AGC Vault dApp to go live.</p>
//                 <div className='flex pt-4'>
//                     <MdAccessTime className='text-white text-4xl sm:te opacity-50' />
//                     <p className='text-white font-bold pl-4'>Phase 4</p>
//                 </div>
//             <p className="text-[#C7C7C7] pl-12">AGT token issued as digital representation of co-ownership rights in a specific silver bullion line with production of  more silver from AGC Mining Operations.</p>
//                 <div className='flex pt-4'>
//                     <MdAccessTime className='text-white text-4xl sm:te opacity-50' />
//                     <p className='text-white font-bold pl-4'>Phase 5</p>
//                 </div>
//                 </div>
//             <p className="text-[#C7C7C7] pl-12">Double-Staking program initiated.</p>
//         </div>


//         <div ref={divright} className='md:w-2/4 w-full p-16 font-times h-full'>
//             <p className='font-extrabold text-4xl pl-12 font-times text-white'>Token Distribution</p>
//             <p className="text-[#C7C7C7] pl-12 pt-8">61% of AGC tokens shall be distributed in the market via a Security Token Offering campaign. AGC represents a security token and purchase of it requires a mandatory KYC/AML check.  Holders of AGC token will get a portion of the second token AGT as they are produced and according with their contribution.</p>
//             <div className='flex justify-between pl-12 pt-8'>
//                 <p className='text-white'>Private Sale</p>
//                 <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>7%</p>
//             </div>
//                 <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
//                     <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '7%' }}></div>
//                 </div>

//                 <div className='flex justify-between pl-12 pt-8'>
//                 <p className='text-white'>Pre-Public Sale</p>
//                 <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>21%</p>
//             </div>
//                 <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
//                     <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '21%' }}></div>
//                 </div>

//              <div className='flex justify-between pl-12 pt-8'>
//                 <p className='text-white'>Public sale</p>
//                 <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>43%</p>
//             </div>
//                 <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
//                     <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '43%' }}></div>
//                 </div>

//                 <div className='flex justify-between pl-12 pt-8'>
//                 <p className='text-white'>Team</p>
//                 <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>10%</p>
//             </div>
//                 <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
//                     <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '10%' }}></div>
//                 </div>

//              <div className='flex justify-between pl-12 pt-8'>
//                 <p className='text-white'>Advisors</p>
//                 <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>5%</p>
//             </div>
//                 <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
//                     <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '5%' }}></div>
//                 </div>       

//               <div className='flex justify-between pl-12 pt-8'>
//                 <p className='text-white'>Developers Allocation</p>
//                 <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>7%</p>
//             </div>
//                 <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
//                     <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '7%' }}></div>
//                 </div>       

//               <div className='flex justify-between pl-12 pt-8'>
//                 <p className='text-white'>Marketing</p>
//                 <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>5%</p>
//             </div>
//                 <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
//                     <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '5%' }}></div>
//                 </div>       

//               <div className='flex justify-between pl-12 pt-8'>
//                 <p className='text-white'>Airdrop & Bounty</p>
//                 <p className='text-white sm:pr-24 md:pr-10 lg:pr-20'>2%</p>
//             </div>
//                 <div className="w-5/6 bg-gray-200 ml-12 mt-4 rounded-full   h-0.5 mb-4 dark:bg-gray-700">
//                     <div className="bg-[#4C443F] h-1 rounded-full dark:bg-blue-500" style={{ width: '2%' }}></div>
//                 </div>                 

//         </div>


        
//     </div>
//   )
// }

// export default Distribution



// import './style.css';
// import { useEffect } from "react";
// import ScrollReveal from "scrollreveal";

// const Distribution = () => {
//     useEffect(() => {
//       const sr = ScrollReveal();
//       sr.reveal('.reveal', { duration: 1000 });
//     }, []);
//   return (
//     <section className="roadmap" id="roadmap">
//       <div className="transition-gradient-after adjust-top"></div>
//       <div className="container">
//         <div className="dots-vert"></div>
//         <div className="section-heading text-center">
//           <h2>ROADMAP</h2>
//           <h3>CHECK THE PROJECT MILESTONES</h3>
//           <hr width="100px" />
//         </div>
//         <div className="row clearfix">
//           <div className="col-lg-8"> {/* Reduced width of the main container */}
//             <div className="container-fluid">
//               <div className="row clearfix left">
//                 <div className="col-lg-3 box left first reveal"> {/* Reduced box width */}
//                   <div className="dots pull-right">
//                     {/* <span className="year">2018</span> */}
//                   </div>
//                   <br />
//                   <span className="heading green">PHASE 1</span>
//                   <br />
//                   <div className="milestones vertical-line right">
//                     <span className="text-right">CoralCoin launch</span><br />
//                     <span className="text-right">PoW starts</span>
//                   </div>
//                 </div>
//                 <div className="col-lg-2">
//                   <div className="lines first">
//                     <div className="roadmap-line active"></div>
//                     <div className="roadmap-line"></div>
//                   </div>
//                 </div>
//                 <div className="col-lg-3 box right first reveal"> {/* Reduced box width */}
//                   <div className="dots pull-left">
//                     {/* <span className="year">2018</span> */}
//                   </div>
//                   <br />
//                   <span className="heading green">PHASE 2</span>
//                   <br />
//                   <div className="milestones vertical-line left">
//                     <span className="text-right">Some event</span><br />
//                     <span className="text-right">Some event</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="row clearfix left">
//                 <div className="col-lg-3 box left second reveal"> {/* Reduced box width */}
//                   <div className="dots pull-right">
//                     {/* <span className="year">2018</span> */}
//                   </div>
//                   <br />
//                   <span className="heading green">PHASE 3</span>
//                   <br />
//                   <div className="milestones vertical-line right">
//                     <span className="text-right">Some event 1Partnerships</span><br />
//                     <span className="text-right">Some event 2</span><br />
//                     <span className="text-right">Some event 3</span><br />
//                   </div>
//                 </div>
//                 <div className="col-lg-2">
//                   <div className="lines second">
//                     <div className="roadmap-line"></div>
//                     <div className="roadmap-line"></div>
//                   </div>
//                 </div>
//                 <div className="col-lg-3 box right second reveal"> {/* Reduced box width */}
//                   <div className="dots pull-left">
//                     {/* <span className="year">2018</span> */}
//                   </div>
//                   <br />
//                   <span className="heading green">PHASE 4</span>
//                   <br />
//                   <div className="milestones vertical-line left">
//                     <span className="text-right">Some event 1</span><br />
//                     <span className="text-right">Some event 2</span><br />
//                     <span className="text-right">Some event 3</span><br />
//                   </div>
//                 </div>
//               </div>
//               <div className="row clearfix left">
//                 <div className="col-lg-3 box left third reveal"> {/* Reduced box width */}
//                   <div className="dots pull-right">
//                     {/* <span className="year">2019</span> */}
//                   </div>
//                   <br />
//                   <span className="heading green">PHASE 5</span>
//                   <br />
//                   <div className="milestones vertical-line right">
//                     <span className="text-right">Some event 1</span>
//                   </div>
//                 </div>
//                 <div className="col-lg-2">
//                   <div className="lines third">
//                     <div className="roadmap-line"></div>
//                     <div className="roadmap-line"></div>
//                   </div>
//                 </div>
//                 <div className="col-lg-3 box right third reveal" style={{ backgroundColor: 'rgb(224, 226, 231)' }}> {/* Reduced box width */}
//                   <div className="dots pull-left">
//                     {/* <span className="year">2019</span> */}
//                   </div>
//                   <br />
//                   <span className="heading green">PHASE 6</span>
//                   <br />
//                   <div className="milestones vertical-line left">
//                     <span className="text-right">To be revealed</span><br />
//                   </div>
//                 </div>
//               </div>
//               <div className="row clearfix left">
//                 <div className="col-lg-3 box left fourth reveal" style={{ backgroundColor: 'rgb(224, 226, 231)' }}> {/* Reduced box width */}
//                   <div className="dots pull-right">
//                     {/* <span className="year">2019</span> */}
//                   </div>
//                   <br />
//                   <span className="heading green">PHASE 7</span>
//                   <br />
//                   <div className="milestones vertical-line right">
//                     <span className="text-right">To be revealed</span><br />
//                   </div>
//                 </div>
//                 <div className="col-lg-2">
//                   <div className="lines fourth">
//                     <div className="roadmap-line"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Distribution;

import React from 'react';

export default function Distribution() {
  const steps = [
    { title: "Phase 1", description: "CoralCoin launch\nPoW starts" },
    { title: "Phase 2", description: "Some event\nSome event" },
    { title: "Phase 3", description: "Partnerships and event\nAdditional milestones" },
    { title: "Phase 4", description: "Upcoming developments\nFuture announcements" },
    { title: "Phase 5", description: "Upcoming developments\nFuture announcements" },
    { title: "Phase 6", description: "Upcoming developments\nFuture announcements" },
    { title: "Phase 7", description: "Upcoming developments\nFuture announcements" },
  ];

  return (
    // <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    //   <div className="container mx-auto px-4 py-10">
    //     <h2 className="text-3xl font-bold text-center mb-4 text-teal-700">ROADMAP</h2>
    //     <p className="text-center text-gray-600 mb-10">
    //       Check the project milestones
    //     </p>
    //     <div className="relative">
    //       {/* Central Vertical Line */}
    //       <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
          
    //       {steps.map((step, index) => (
    //         <div key={index} className="flex items-center justify-center">
    //           {/* Line connecting vertical stepper to box */}
    //           <hr
    //             className={`absolute w-16 border-t border-gray-400 ${index % 2 === 0 ? 'left-1/2 mr-4' : 'right-1/2 ml-4'}`}
    //           />

    //           <div className={`flex items-center w-full py-4 ${index % 2 === 0 ? 'justify-end pr-96' : 'justify-start pl-96'}`}>
    //             <div className={`w-full md:w-1/3 max-w-xs p-4 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transform transition duration-300 hover:scale-105 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
    //               <h3 className="text-lg font-semibold text-teal-600">{step.title}</h3>
    //               <p className="text-gray-600 whitespace-pre-line mt-2">{step.description}</p>
    //             </div>
    //           </div>
              
    //           {/* Step Number Circle */}
    //           <div className="flex items-center justify-center w-8 h-8 bg-teal-500 text-white rounded-full absolute left-1/2 transform -translate-x-1/2">
    //             {/* {index + 1} */}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <>
    <div className="font-san">
    





      {/* <CanvasScene /> */}
      <h1 className="text-4xl font-bold font-merry text-center mb-4 text-[#9ACD32]">ROADMAP</h1>
         <h1 className="text-center text-gray-400 font-merry text-2xl mb-10">
           Check the project milestones
         </h1>
    {/* <ul className="timeline timeline-vertical">
    <li>
  <div className="timeline-start timeline-box p-4 text-base  sm:text-lg sm:w-48 md:w-100 md:text-xl font-times">
    <b>Phase 1 :
      Foundation and Whitepaper Finalization (Q3 2024)
    </b>
    <br />
    <ul>
    <li>
  <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />
  Whitepaper Completion
</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Legal and Regulatory Preparation</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Initial Community Building</li>
    </ul>
  </div>
  <div className="timeline-middle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="text-primary h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <hr className="bg-primary h-1 sm:h-2" />
</li>

      <li>
        <hr className="bg-primary h-1 sm:h-2" />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-primary h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box p-4 text-base sm:text-lg sm:w-48 md:w-100 md:text-xl font-times">
        <b>Phase 2 :
      Token Launch and Initial Platform Development (Q4 2024)
    </b>
    <br />
    <ul>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Token launch</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Smart Contract Deployment</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Initial Exchange Listings</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Staking Platform Launch</li>
    </ul>
        </div>
        <hr className="bg-primary h-1 sm:h-2" />
      </li>



      <li>
  <div className="timeline-start timeline-box p-8 text-base sm:text-lg sm:w-48 md:w-100 md:text-xl font-times">
    <b>Phase 3 : 
    Mining Integration and Reserve Management (Q1-Q2 2025)
    </b>
    <br />
    <ul>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Mining Partnerships</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Reserve Establishment</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Smart Contract Enhancements</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Revenue Sharing Implementation</li>
    </ul>
  </div>
  <div className="timeline-middle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="text-primary h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <hr className="bg-primary h-1 sm:h-2" />
</li>

<li>
        <hr className="bg-primary h-1 sm:h-2" />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-primary h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box p-4 text-base sm:text-lg sm:w-48 md:w-100 md:text-xl font-times">
        <b>Phase 4: Platform Expansion and DeFi Integration (Q3-Q4 2025)
    </b>
    <br />
    <ul>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />DeFi Platform Integration</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Governance Launch</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Advanced Analytics and Reporting</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Community Incentive Programs</li>
    </ul>
        </div>
        <hr className="bg-primary h-1 sm:h-2" />
      </li>

      <li>
  <div className="timeline-start timeline-box p-8 text-base sm:text-lg sm:w-48 md:w-100 md:text-xl font-times">
    <b>Phase 5: Global Expansion and Regulatory Alignment (2026)
    </b>
    <br />
    <ul>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Regulatory Expansion</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Cross-Chain Integration</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Institutional Partnerships</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Global Marketing Campaign</li>
    </ul>
  </div>
  <div className="timeline-middle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="text-primary h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  </div>
  <hr className="bg-primary h-1 sm:h-2" />
</li>


<li>
        <hr className="bg-primary h-1 sm:h-2" />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="text-primary h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box p-4 text-base sm:text-lg sm:w-48 md:w-100 md:text-xl font-times">
        <b>Phase 6: Continuous Improvement and Ecosystem Growth (2027 and Beyond)
    </b>
    <br />
    <ul>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Platform Upgrades</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Ecosystem Expansion</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Sustainability Initiatives</li>
      <li> <input
    type="checkbox"
    defaultChecked
    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] mr-2"
  />Global Adoption Initiatives</li>
    </ul>
        </div>
        <hr className="bg-primary h-1 sm:h-2" />
      </li>



    </ul> */}
   <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  {/* Phase 1 */}
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="yellowgreen"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end text-lg font-roboto text-white">
      <div className="text-2xl font-merry">
        Phase 1: Foundation and Whitepaper Finalization (Q3 2024)
      </div>
      <div className='flex justify-end'>
      <table className="table-auto border-collapse">
  <tbody>
    <tr>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
      <td className=" text-left">  Whitepaper Completion</td>
    </tr>
    <tr>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
      <td className="p-2 text-left">Legal and Regulatory Preparation</td>
    </tr>
    <tr>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
      <td className="p-2 text-left">Initial Community Building</td>
    
    </tr>
  </tbody>
</table>
</div>

    </div>
    <hr className="bg-white" />
  </li>

  {/* Phase 2 */}
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="yellowgreen"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end mb-10 text-lg font-roboto text-white">
      <div className="text-2xl font-merry">
        Phase 2: Token Launch and Initial Platform Development (Q4 2024)
      </div>
      <div className='flex justify-start'>
      <table className="table-auto border-collapse">
  <tbody>
    <tr>
      <td className="p-2 ">------ Token launch</td>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
    </tr>
    <tr>
      <td className="p-2 ">------ Smart Contract Deployment</td>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
    </tr>
    <tr>
      <td className="p-2 ">------ Initial Exchange Listings</td>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
    </tr>
    <tr>
      <td className="p-2 ">------ Staking Platform Launch</td>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
    </tr>
  </tbody>
</table>
</div>
    </div>
    <hr className="bg-white" />
  </li>

  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="yellowgreen"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end text-lg font-roboto text-white">
      <div className="text-2xl font-merry">
      Phase 3: Mining Integration and Reserve Management (Q1-Q2 2025)
      </div>
      <div className='flex justify-end'>
      <table className="table-auto border-collapse">
  <tbody>
    <tr>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
      <td className="p-2 text-left">Mining Partnerships</td>
      <td>------</td>
    </tr>
    <tr>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
      <td className="p-2 text-left">Reserve Establishment</td>
      <td>------</td>
    </tr>
    <tr>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
      <td className="p-2 text-left">Smart Contract Enhancements</td>
      <td>------</td>
    </tr>
    <tr>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
      <td className="p-2 text-left">Revenue Sharing Implementation</td>
      <td>------</td>
    </tr>
  </tbody>
</table>
</div>
    </div>
    <hr className="bg-white" />
  </li>

  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="yellowgreen"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end mb-10 text-lg font-roboto text-white">
      <div className="text-2xl font-merry">
      Phase 4: Platform Expansion and DeFi Integration (Q3-Q4 2025)
      </div>
      <div className='flex justify-start'>
      <table className="table-auto border-collapse">
  <tbody>
    <tr>
      <td className="p-2 ">------ DeFi Platform Integration</td>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
    </tr>
    <tr>
      <td className="p-2 ">------ Governance Launch</td>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
    </tr>
    <tr>
      <td className="p-2 ">------ Advanced Analytics and Reporting</td>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
    </tr>
    <tr>
      <td className="p-2 ">------ Community Incentive Programs</td>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
    </tr>
  </tbody>
</table>
</div>
    </div>
    <hr className="bg-white" />
  </li>

  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="yellowgreen"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end text-lg font-roboto text-white">
      <div className="text-2xl font-merry">
      Phase 5: Global Expansion and Regulatory Alignment (2026)
      </div>
      <div className='flex justify-end'>
      <table className="table-auto border-collapse">
  <tbody>
    <tr>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
      <td className="p-2 text-left">Whitepaper Completion</td>
      <td>------</td>
    </tr>
    <tr>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
      <td className="p-2 text-left">Legal and Regulatory Preparation</td>
      <td>------</td>
    </tr>
    <tr>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
      <td className="p-2 text-left">Initial Community Building</td>
      <td>------</td>
    </tr>
  </tbody>
</table>
</div>
    </div>
    <hr className="bg-white" />
  </li>

  {/* Add Phase 6 */}
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="yellowgreen"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="timeline-end mb-10 text-lg font-roboto text-white">
      <div className="text-2xl font-merry">
      Phase 6: Continuous Improvement and Ecosystem Growth (2027 and Beyond)
      </div>
      <div className='flex justify-start'>
      <table className="table-auto border-collapse">
  <tbody>
    <tr>
      <td className="p-2 ">------ Whitepaper Completion</td>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
    </tr>
    <tr>
      <td className="p-2 ">------ Whitepaper Completion</td>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
    </tr>
    <tr>
      <td className="p-2 ">------ Whitepaper Completion</td>
      <td className="p-2">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border border-white"
        />
      </td>
    </tr>
  </tbody>
</table>
</div>
    </div>
    <hr className="bg-white" />
  </li>

</ul>

  </div>


  
  <hr className="border-[#D2BA57] mt-10" />
  </>
  );
}
