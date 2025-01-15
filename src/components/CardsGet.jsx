import React from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import HiOutlineCamera from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import CanvasScene from "./Animate";

export default function CardsGet() {
  return (
    <>
    <div className="mx-auto py-40">
      <div className="place-items-center text-center text-white flex justify-center">
        <h2 className="text-3xl">HOW TO GET<br /> OUR CAS</h2>
      </div>

      {/* <div class="grid grid-cols-1 md:grid-cols-3 w-full h-[550px] ">
        <div class="flex items-center justify-center">
          <div class="w-full h-[450px] mx-5   rounded-lg   p-6">
            <div className=" top-48 px-6">
              <div className="place-items-center text-white flex justify-center">
                <FaRegArrowAltCircleDown className=" text-white w-8 h-8" />
              </div>
              <h2 className="text-white text-2xl text-center">RELIABILLITY</h2>
              <p className="text-gray-300  text-sm text-start relative top-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p className="text-gray-300  text-sm  text-center relative top-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p></p>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center">
          <div class="w-full h-[450px] mx-5   rounded-lg   p-6">
            <div className=" top-48 px-6">
              <div className="place-items-center text-white flex justify-center">
                <HiOutlineCamera className=" text-white w-8 h-8" />
              </div>
              <h2 className="text-white text-2xl text-center">RELIABILLITY</h2>
              <p className="text-gray-300  text-sm text-start relative top-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p className="text-gray-300  text-sm  text-center relative top-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="w-full h-[450px] mx-5   rounded-lg   p-6">
            <div className=" top-48 px-6">
              <div className="place-items-center text-white flex justify-center">
                <GoCreditCard className=" text-white w-8 h-8" />
              </div>
              <h2 className="text-white text-2xl text-center">RELIABILLITY</h2>
              <p className="text-gray-300  text-sm text-start relative top-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p className="text-gray-300  text-sm  text-center relative top-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>  */}
      <div class="flex flex-col md:flex-row flex-wrap w-full h-[550px]">
  <div class="flex items-center justify-center w-full md:w-1/3">
    <div class="w-full h-[450px] mx-5 rounded-lg p-6">
      <div className="top-48 px-6">
        <div className="text-white flex justify-center">
          <FaRegArrowAltCircleDown className="text-white w-8 h-8" />
        </div>
        <h2 className="text-white text-2xl text-center">RELIABILLITY</h2>
        <p className="text-gray-300 text-sm text-start relative top-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <p className="text-gray-300 text-sm text-center relative top-10">
          Lorem Ipsum has been the industry's standard dummy.
        </p>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-center w-full md:w-1/3">
    <div class="w-full h-[450px] mx-5 rounded-lg p-6">
      <div className="top-48 px-6">
        <div className="text-white flex justify-center">
          <HiOutlineCamera className="text-white w-8 h-8" />
        </div>
        <h2 className="text-white text-2xl text-center">RELIABILLITY</h2>
        <p className="text-gray-300 text-sm text-start relative top-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <p className="text-gray-300 text-sm text-center relative top-10">
          Lorem Ipsum has been the industry's standard dummy.
        </p>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-center w-full md:w-1/3">
    <div class="w-full h-[450px] mx-5 rounded-lg p-6">
      <div className="top-48 px-6">
        <div className="text-white flex justify-center">
          <GoCreditCard className="text-white w-8 h-8" />
        </div>
        <h2 className="text-white text-2xl text-center">RELIABILLITY</h2>
        <p className="text-gray-300 text-sm text-start relative top-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <p className="text-gray-300 text-sm text-center relative top-10">
          Lorem Ipsum has been the industry's standard dummy.
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
    </>
  );
}
