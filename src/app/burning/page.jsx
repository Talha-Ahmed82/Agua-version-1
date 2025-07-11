"use client";
import DefaultLayout from "../../components/maincomp/DefaultLayout";
import Breadcrumb from "../../components/breadcrump/Breadcrump";
import React, { useState ,useEffect} from "react";
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";
import Link from "next/link";

function Burning() {
    const [alert, setAlert] = useState(false);
  
    const displayAlert = () => {
      setAlert(true);
    };
  
    useEffect(() => {
      if (alert) {
        Swal.fire({
          icon: "success",
          title: "Your Token has been successfully burned",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setAlert(false);
        });
      }
    }, [alert]);
  
    return (
      <DefaultLayout>
         <div className="rounded-lg">
      <div className="flex text-title-md2 font-semibold text-gray-700 dark:text-gray-300 font-mont">
      <Link href="../mint">Mint/</Link> <Link href="../burning">Burning</Link>
      </div>
      <div>
        <div className="text-center text-4xl font-lora font-bold mt-6 bg-gradient-to-r from-[#F1BE11] to-yellow-500 dark:text-white bg-clip-text text-transparent">
          Burn your Token
        </div>

        <div className="dropdown flex justify-center mt-6 relative font-lora">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 px-20 border border-white hover:border-yellow-500 dark:hover:border-[#272727] text-lg text-white hover:text-yellow-500 dark:hover:text-[#272727] bg-yellow-500 dark:bg-[#272727] hover:bg-white dark:hover:bg-white font-bold"
          >
            Select Token Type
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white dark:bg-gray-400 rounded-box shadow w-52 p-2"
            style={{
              position: "absolute", // Ensure the dropdown is positioned absolutely
              top: "100%", // Position the dropdown directly below the button
              zIndex: "0", // Set lower z-index to keep the dropdown behind the header
            }}
          >
            <li>
              <a className="text-xl font-bold text-[#F1BE11]">
                <img className="w-20 h-20" src="/gold2.png" />
                AG
              </a>
            </li>
            <li>
              <a className="text-xl font-bold text-gray-500 dark:text-white">
                {" "}
                <img className="w-18 h-18" src="/silver1.png" />
                AU
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-10 font-lora">
        <div className="text-center text-4xl font-merry font-bold mt-6 bg-gradient-to-r from-[#F1BE11] to-yellow-500 dark:text-white bg-clip-text text-transparent">
          Enter Token Details
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="No. of Tokens"
            className="input input-bordered dark:border dark:border-white text-yellow-500 input-warning w-full bg-white dark:bg-[#272727] dark:text-white max-w-xs"
          />
        </div>
        <div className="flex justify-center">
        <input
            type="text"
            placeholder="Amount"
            className="input input-bordered dark:border dark:border-white text-yellow-500 input-warning w-full bg-white dark:bg-[#272727] dark:text-white max-w-xs"
          />
        </div>
        <div className="flex justify-center">
          <button onClick={displayAlert} className="btn w-80 border border-white hover:border-white hover:bg-white bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-white dark:text-black font-lora">
            Burn
          </button>
        </div>
      </div>
      </div>
      </DefaultLayout>
    );
  }
export default Burning;