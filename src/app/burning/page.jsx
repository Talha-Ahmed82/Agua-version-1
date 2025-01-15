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
          title: "Your Token has been burned",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setAlert(false);
        });
      }
    }, [alert]);
  
    return (
      <DefaultLayout>
        <div className="text-gray-500 flex text-2xl font-merry font-extrabold">
          <Link href="../mint">Mint/</Link> <Link href="../burning">Burning</Link>
        </div>
        <div>
          <div className="text-center text-4xl font-merry font-bold mt-6 bg-gradient-to-r from-[#F1BE11] to-yellow-500 bg-clip-text text-transparent">
            Burn your Token
          </div>
  
          <div className="dropdown flex justify-center mt-6 relative">
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
                position: "absolute",
                top: "100%",
                zIndex: "0",
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
          <div className="flex justify-center">
            <button
              onClick={displayAlert}
              className="btn w-80 bg-[#EEB912] text-black"
            >
              Burn
            </button>
          </div>
        </div>
      </DefaultLayout>
    );
  }
export default Burning;