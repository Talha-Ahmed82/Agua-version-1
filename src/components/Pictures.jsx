// // // // "use client";

// // // // import React from 'react'
// // // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // // import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// // // // import 'swiper/css';
// // // // import 'swiper/css/pagination';
// // // // import 'swiper/css/navigation';

// // // // function Pictures() {
// // // //   return (
// // // //     <>
// // // //  <Swiper
// // // //   slidesPerView={1} 
// // // //   centeredSlides={false}
// // // //   autoplay={{
// // // //     delay: 2500,
// // // //     disableOnInteraction: false,
// // // //   }}
// // // //   pagination={{
// // // //     clickable: true,
// // // //   }}
// // // //   navigation={true}
// // // //   modules={[Autoplay, Pagination, Navigation]}
// // // //   breakpoints={{
// // // //     640: {
// // // //       slidesPerView: 2,
// // // //       spaceBetween: 20,
// // // //     },
// // // //     768: {
// // // //       slidesPerView: 2,
// // // //       spaceBetween: 15,
// // // //     },
// // // //     1024: {
// // // //       slidesPerView: 3,
// // // //       spaceBetween: 20,
// // // //     },
// // // //   }}
// // // //   className="mySwiper"
// // // // >
// // // //   {Array.from({ length: 4 }).map((_, index) => (
// // // //     <SwiperSlide key={index}>
// // // //       <div className='flex flex-col gap-12 items-center justify-center'>
// // // //       <div className="card bg-[#493E1D] mb-6  h-80 sm:w-72 sm:h-[350px] md:h-[450px]  shadow-xl">
// // // //         <figure>
// // // //           <img
// // // //             src="/picture1.png"
// // // //             alt="Movie"
// // // //             className="h-full w-full object-cover"
// // // //           />
// // // //         </figure>
// // // //         <div className="card-body">
// // // //           <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-white text-center font-roboto">
// // // //             Gold profit
// // // //           </h2>
// // // //           <p className="text-white text-center text-sm sm:text-base md:text-xl font-roboto">
// // // //             Agua tokens
// // // //           </p>
// // // //         </div>
// // // //       </div>
// // // //       </div>
// // // //     </SwiperSlide>
// // // //   ))}
// // // // </Swiper>

  
// // // // </>
// // // //   )
// // // // }

// // // // export default Pictures

// // // "use client";

// // // import React from 'react';
// // // import { Swiper, SwiperSlide } from 'swiper/react';
// // // import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// // // import 'swiper/css';
// // // import 'swiper/css/pagination';
// // // import 'swiper/css/navigation';

// // // function Pictures() {
// // //   // Array of image URLs
// // //   // const images = [
// // //   //   "/picture1.png", // Image for card 1
// // //   //   "/picture2.png", // Image for card 2
// // //   //   "/picture3.png", // Image for card 3
// // //   //   "/picture4.png", // Image for card 4
// // //   // ];
  

// // //   return (
// // //     <>
  
// // //       <section ref={targetRef} className="relative h-[300vh] bg-[#0F0D06]">
// // //         <h1 className="font-merry text-5xl md:text-6xl  text-[#9C7509] text-center mt-32 ">
// // //           Operations
// // //         </h1>
// // //         <div className="sticky top-0 flex h-screen items-center overflow-hidden">
// // //           <motion.div style={{ x }} className="flex gap-4">
// // //             {cards.map((card) => {
// // //               return <Card card={card} key={card.id} />;
// // //             })}
// // //           </motion.div>
// // //         </div>
// // //       </section>
// // //     </>
    
// // //   );
// // // }

// // // export default Pictures;

// // // const Card = ({ card }) => {
// // //   return (
// // //     <div
// // //       key={card.id}
// // //       className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
// // //     >
// // //       <div
// // //         style={{
// // //           backgroundImage: `url(${card.url})`,
// // //           backgroundSize: "cover",
// // //           backgroundPosition: "center",
// // //         }}
// // //         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
// // //       ></div>
// // //     </div>
// // //   );
// // // };
// // // const cards = [
// // //   {
// // //     url: "/picture1.png",
// // //     // title: "Title 1",
// // //     id: 1,
// // //   },
// // //   {
// // //     url: "/picture2.png",
// // //     title: "Title 2",
// // //     id: 2,
// // //   },
// // //   {
// // //     url: "/picture3.png",
// // //     title: "Title 3",
// // //     id: 3,
// // //   },
// // //   {
// // //     url: "/picture4.png",
// // //     title: "Title 4",
// // //     id: 4,
// // //   },
// // // ];
// // "use client";
// // import { motion, useTransform, useScroll } from "framer-motion";
// // import { useRef } from "react";

// // const Exampl = () => {
// //   return <HorizontalScrollCarousel />;
// // };

// // const HorizontalScrollCarousel = () => {
// //   const targetRef = useRef(null);
// //   const { scrollYProgress } = useScroll({
// //     target: targetRef,
// //   });

// //   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

// //   return (
// //     <>
// //       <section ref={targetRef} className="relative h-[300] ">
// //         <h1 className="font-merry text-5xl md:text-6xl  text-[#9C7509] text-center mt-32 ">
// //           Operations
// //         </h1>
// //         <div className="sticky top-0 flex h-screen items-center overflow-hidden">
// //           <motion.div style={{ x }} className="flex gap-4">
// //             {cards.map((card) => {
// //               return <Card card={card} key={card.id} />;
// //             })}
// //           </motion.div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // const Card = ({ card }) => {
// //   return (
// //     <div
// //       key={card.id}
// //       className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
// //     >
// //       <div
// //         style={{
// //           backgroundImage: `url(${card.url})`,
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //         }}
// //         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
// //       ></div>
// //     </div>
// //   );
// // };


// // export default Exampl;

// // const cards = [
// //   {
// //     url: "/picture1.png",
// //     // title: "Title 1",
// //     id: 1,
// //   },
// //   {
// //     url: "/picture2.png",
// //     title: "Title 2",
// //     id: 2,
// //   },
// //   {
// //     url: "/picture3.png",
// //     title: "Title 3",
// //     id: 3,
// //   },
// //   {
// //     url: "/picture4.png",
// //     title: "Title 4",
// //     id: 4,
// //   },
// // ];

// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";

// const Exampl = () => {
//   return <HorizontalScrollCarousel />;
// };

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

//   return (
//     <>
//       <section ref={targetRef} className="relative h-[300] bg-[#0F0D06]">
//         <h1 className="font-merry text-5xl md:text-6xl  text-[#9C7509] text-center mt-54 ">
//           Operations
//         </h1>
//         <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//           <motion.div style={{ x }} className="flex gap-4">
//             {cards.map((card) => {
//               return <Card card={card} key={card.id} />;
//             })}
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative md:h-[450px] md:w-[450px] h-[350px] w-[300px] overflow-hidden bg-neutral-200"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       {/* <div className="absolute inset-0 z-10 grid place-content-center">
//         <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//           {card.title}
//         </p>
//       </div> */}
//     </div>
//   );
// };

// export default Exampl;

// const cards = [
//   {
//     url: "/picture1.png",
//     // title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "/picture2.png",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "/picture3.png",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "/picture4.png",
//     title: "Title 4",
//     id: 4,
//   },
// ];
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import CanvasScene from "./Animate";

const Exampl = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <>
      <section
        ref={targetRef}
        className="relative h-[300] bg-gradient-radial gradient-bg"
      >
        {/* <img
          src="/Animate-9.png"
          className="absolute top-0 left-0 w-full h-full opacity-30 object-cover z-0"
        /> */}
        {/* <CanvasScene /> */}
        <h1 className="font-merry text-5xl md:text-6xl  text-yellow-400 text-center pt-6 ">
          Operations
        </h1>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
      <hr className="border-2 border-[#D2BA57]" />
    </>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative md:h-[450px] md:w-[450px] h-[350px] w-[300px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default Exampl;

const cards = [
  {
    url: "/picture1.png",
    // title: "Title 1",
    id: 1,
  },
  {
    url: "/picture2.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/picture3.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/picture4.png",
    title: "Title 4",
    id: 4,
  },
];