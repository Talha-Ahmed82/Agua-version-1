import Link from "next/link";
import DarkModeSwitcher from "./DarkmodeSwitcher"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import '../../styles/globals.css'
import axios from "axios";
import { ConnectWallet } from "@thirdweb-dev/react";

import { useSelector } from "react-redux";



// import {
//   updateFailure,
//   updateSuccess,
//   updateStart,
//   deleteUserFailure,
//   deleteUserStart,
//   deleteUserSuccess,
//   signOutSuccess,
// } from "../redux/user/userSlice";

// import {
//   updateFailure,
//   updateSuccess,
//   updateStart,
//   deleteUserFailure,
//   deleteUserStart,
//   deleteUserSuccess,
//   signOutSuccess,
// } from "../../app/redux/user/userSlice";
// import { useDispatch } from "react-redux";
const Header = (props) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();
 // const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");
//  const { currentUser, error, loading } = useSelector((state) => state.user);
//   const [imageFile, setImageFile] = useState(null);
//   const [imageFileUrl, setImageFileUrl] = useState(null);
//   const [imageFileUploadError, setImageFileUploadError] = useState(null);
//   const [imageFileUploading, setImageFileUploading] = useState(false);
//   const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
//   const [updateUserError, setUpdateUserError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [imageFileUploadingProgress, setImageFileUploadingProgress] =
//     useState(null);
//   const [formData, setFormData] = useState({});
//   const filePickerRef = useRef();
//   const dispatch = useDispatch();

//  const handleSignOut = async () => {
//   try {
//     const res = await axios.post(
//       "http://localhost:8000/api/user/signout",
//       {
//         withCredentials: true,
//       }
//     );
//     const data = res.data;
//     if (!res.status === 200 || !res.status === 201) {
//       console.log("data-error", data.message);
//     } else {
//       dispatch(signOutSuccess());
//       console.log("Logout Successfully")
//       router.push("/auth/signin")
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// };
  return (
    <header className="sticky top-0 z-10 flex w-full bg-white drop-shadow-1 dark:bg-[#272727] dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-white bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src={"/images/logo/agua-logo.png"}
              alt="Logo"
            />
          </Link>
        </div>
        <div
      style={{
        display: "inline-block",
        background: hover
        ? "linear-gradient(to right, #353535, #cbcdcf 30%, #6c6c6c 70%)"
        : "linear-gradient(to right, #9C883A, #F5DE00 30%,#9C883A 70%)",
        backgroundBlendMode: "multiply",
        borderRadius: "0.25rem", // Matches the button's border-radius
        transition: "background-color 0.3s ease",
        padding: "6px", // Padding for hover effect outside the button
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ConnectWallet
        style={{
          background: "transparent",
          padding: "8px 16px", // Adjust padding
          color: "black",
          fontWeight: "600",
          fontFamily: "roboto",
          borderRadius: "0.25rem",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      />
    </div>
        {/* <WalletButton /> */}
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
          {/* <button className="btn btn-active btn-neutral" onClick={handleSignOut}>Logout</button> */}
          <button className="btn btn-active btn-neutral" >Logout</button>
            <DarkModeSwitcher />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
