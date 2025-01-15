"use client";
import DefaultLayout from "../../components/maincomp/DefaultLayout";
import Breadcrumb from "../../components/breadcrump/Breadcrump";
import React from "react";

function Portfolio() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Portfolio" />
      <div className="gap-6">
        <div className="font-sans p-6">
          <div className="mb-8 flex items-center gap-6 rounded-xl border-2 border-gray-600 bg-[#D2D8E1] dark:bg-[#272727] p-4">
            <div className="h-24 w-24">
              <img
                src="/user-02.png"
                alt="Profile Avatar"
                className="h-full w-full rounded-full object-cover shadow-9"
              />
            </div>
            <div className="space-y-2">
              <p className="font-bold text-black dark:text-white">
                <span className="text-lg font-semibold dark:text-gray-400">
                  Name:
                </span>{" "}
                Alice
              </p>
              <p className="font-bold text-black dark:text-white">
                <span className="text-lg font-semibold dark:text-gray-400">
                  Wallet Address:
                </span>{" "}
                0x1234...abcd
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-[#272727]">
        <h1 className="text-4xl font-merry font-bold">Account</h1>
        <h1 className="mt-2 text-3xl font-merry font-bold">
          Worth : <span className="text-[#F1BE11] text-4xl">$5100.00</span>
        </h1>
      </div>

      <div className="flex align-center justify-center gap-20 mt-6">
        <div className="card bg-[#272727] h-45 image-full w-60 z-0 shadow-xl">
          <figure>
            <img src="/Goldcoin.png" alt="Shoes" />
          </figure>
          <div className="card-body text-center mt-4 font-merry">
            <h2 className="text-4xl font-bold">Gold</h2>
            <p className="text-2xl font-semibold">5.1 AU</p>
          </div>
        </div>

        <div className="card bg-[#272727] h-45 image-full w-60 z-0 shadow-xl">
          <figure>
            <img src="/sliver.png" alt="Shoes" />
          </figure>
          <div className="card-body text-center mt-4 font-merry">
            <h2 className="text-4xl font-bold">Silver</h2>
            <p className="text-2xl font-semibold">10.9 AG</p>
          </div>
        </div>

        <div className="card bg-[#272727] h-45 image-full w-60 z-0 shadow-xl">
          <figure>
            <img src="/Agua-logo-crop.png" alt="Shoes" />
          </figure>
          <div className="card-body text-center mt-4 font-merry">
            <h2 className="text-4xl font-bold">Agua</h2>
            <p className="text-2xl font-semibold">10 A</p>
          </div>
        </div>
      </div>

      <div className="text-center text-4xl font-merry font-bold mt-6 bg-gradient-to-r from-[#F1BE11] to-yellow-500 bg-clip-text text-transparent">
        Pending orders
      </div>

      <div className="card lg:card-side bg-[#272727] shadow-xl mt-6">
        <figure>
          <img src="/3D money card.png" alt="Album" />
        </figure>
        <div className="card-body gap-10">
          <div className="flex gap-40 text-3xl font-merry bg-white rounded-lg font-bold">
            {" "}
            <h2>Gold</h2>
            <h2 className="text-[#F1BE11]">2.5 AU</h2>
          </div>
          <div className="flex gap-40 text-3xl font-merry bg-white rounded-lg font-bold">
            {" "}
            <h2>Silver</h2>
            <h2 className="text-[#F1BE11]">40.1 AG</h2>
          </div>
          <div className="flex gap-40 text-3xl font-merry bg-white rounded-lg font-bold">
            {" "}
            <h2>Agua</h2>
            <h2 className="text-[#F1BE11]">10.0 A</h2>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Portfolio;