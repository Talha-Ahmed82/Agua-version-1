"use client";
import DefaultLayout from "../../components/maincomp/DefaultLayout";
import Breadcrumb from "../../components/breadcrump/Breadcrump";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Mint() {
  const [alert, setAlert] = useState(false);
  const router = useRouter();

  const goMint = () => {
    router.push("../burning");
  };

  const displayAlert = () => {
    setAlert(true);
  };
  return (
    <DefaultLayout>
      {/* <Breadcrumb pageName="Mint" /> */}
      <div className="text-gray-500 flex text-2xl font-merry font-extrabold">
      <Link href="../mint">Mint/</Link> <Link href="../burning">Burning</Link>
      </div>
      <div>
        <div className="text-center text-4xl font-merry font-bold mt-6 bg-gradient-to-r from-[#F1BE11] to-yellow-500 bg-clip-text text-transparent">
          Mint your Token
        </div>

        <div className="dropdown flex justify-center bg-white mt-6 relative">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 px-20 text-lg font-merry font-bold"
          >
            Select Token Type
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box shadow w-52 p-2"
            style={{
              position: "absolute", // Ensure the dropdown is positioned absolutely
              top: "100%", // Position the dropdown directly below the button
              zIndex: "0", // Set lower z-index to keep the dropdown behind the header
            }}
          >
            <li>
              <a className="text-xl font-merry font-bold text-[#F1BE11]">
                <img className="w-20 h-20" src="/Goldcoin.png" />
                AG
              </a>
            </li>
            <li>
              <a className="text-xl font-merry font-bold text-gray-500">
                {" "}
                <img className="w-18 h-18" src="/sliver.png" />
                AU
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-10">
        <div className="text-center text-4xl font-merry font-bold mt-6 bg-gradient-to-r from-[#F1BE11] to-yellow-500 bg-clip-text text-transparent">
          Enter Token Details
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="No. of Tokens"
            className="input input-bordered input-warning w-full max-w-xs"
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Amount"
            className="input input-bordered input-warning w-full max-w-xs"
          />
        </div>
        {/* <div className="flex justify-center">
          <input
            type="text"
            placeholder="Wallet address"
            className="input input-bordered input-warning w-full max-w-xs"
          />
        </div>
        <div className="flex justify-center">
          <textarea
            className="textarea textarea-warning w-80"
            placeholder="Description"
          ></textarea>
        </div> */}
        <div className="flex justify-center">
          <button onClick={displayAlert} className="btn w-80 bg-[#EEB912] text-black">
            Mint
          </button>
        </div>
        {alert && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your token has been successfully mint</span>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}

export default Mint;