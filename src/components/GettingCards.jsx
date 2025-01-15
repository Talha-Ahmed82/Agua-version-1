import React from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { TiCameraOutline } from "react-icons/ti";
import { useEffect,useRef } from "react";
import CanvasScene from "./Animate";

import { GoCreditCard } from "react-icons/go";
export default function GettingCards() {
  const divRef = useRef(null);
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

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

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
    <div className="mx-auto py-40">
      {/* <CanvasScene /> */}
      <div className="place-items-center text-white flex justify-center">
        <h2 className="text-3xl text-center">HOW TO GET OUR CARDS</h2>
      </div>

      <div className="grid grid-cols-1 mt-16 md:grid-cols-3 gap-6">
        {/* First Card */}
        <div ref={divRes} className="flex mt-6 items-center justify-center">
          <div className="rounded-lg p-6 flex flex-col items-center">
            <div className="text-white mb-4">
              <FaRegArrowAltCircleDown className="text-white w-12 h-12" />
            </div>
            <h2 className="text-white text-2xl mb-4">RELIABILITY</h2>
            <p className="text-gray-300 text-sm text-center mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <p className="text-gray-300 text-sm text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="flex items-center justify-center">
          <div className="rounded-lg p-6 flex flex-col items-center">
            <div className="text-white mb-4">
              <TiCameraOutline className="text-white w-16 h-16" />
            </div>
            <h2 className="text-white text-2xl mb-4">RELIABILITY</h2>
            <p className="text-gray-300 text-sm text-center mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <p className="text-gray-300 text-sm text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div ref={divRef} className="flex mt-6 items-center justify-center">
          <div className="rounded-lg p-6 flex flex-col items-center">
            <div className="text-white mb-4">
              <GoCreditCard className="text-white w-12 h-12" />
            </div>
            <h2 className="text-white text-2xl mb-4">RELIABILITY</h2>
            <p className="text-gray-300 text-sm text-center mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <p className="text-gray-300 text-sm text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
