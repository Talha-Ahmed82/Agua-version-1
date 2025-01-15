import React from 'react'
import Link from 'next/link'
import { ConnectWallet } from '@thirdweb-dev/react';
import { useRouter } from 'next/navigation';

function Navb() {

  const router = useRouter();
  const signinNav = () => {
    router.push("../auth/signin");
  };
  const handleNavigation = () => {
    router.push("../about");
  };
  const handleNavigatione = () => {
    router.push("../Docs");
  };
  const handleNav = () => {
    router.push("../")
  }

  return (
    <div className="navbar opacity-80 border-b-lightgold font-san border-x-black border-t-black border-2 bg-[#0F0D06]">
    <div className="navbar-start">
    
  
      <div className="dropdown">
  
        <div tabIndex={1} role="button" className="btn btn-warning lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={1}
          className="menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow  bg-lightgold">
            <li onClick={handleNav} style={{ cursor: "pointer" }} className="text-2xl font-Orbitron text-black-2 hover:text-lightgold"><a>Home</a></li>
          <li onClick={handleNavigation} style={{ cursor: "pointer" }} className="text-2xl font-times text-black-2 hover:text-lightgold"><a>About</a></li>
          <li onClick={handleNavigatione}  style={{ cursor: "pointer" }} className="text-2xl font-times text-black-2 hover:text-lightgold"><a>Docs</a></li>
          <li  style={{ cursor: "pointer" }} className="text-2xl text-black-2 font-times hover:text-lightgold"><a>Ecosystem</a></li>
        </ul>
      </div>
      <img src="/Agua-new-logo.png" className="h-12 w-12 md:h-20 md:w-20 lg:pr-4 sm:mr-0 ml-10 sm:ml-16 " alt="Flowbite Logo" />
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li onClick={handleNav} className="block py-2 px-3 text-2xl text-[#949798] font-times hover:text-lightgold"><a>Home</a></li>
        <li onClick={handleNavigation} style={{ cursor: "pointer" }} className="block font-orbitron py-2 px-3 text-2xl text-[#949798] hover:text-lightgold"><a>About</a></li>
        <li onClick={handleNavigatione} style={{ cursor: "pointer" }} className="block font-times py-2 px-3 text-2xl text-[#949798] hover:text-lightgold"><a>Docs</a></li>
        <li  style={{ cursor: "pointer" }} className="block font-times py-2 px-3 text-2xl text-[#949798] hover:text-lightgold"><a>Ecosystem</a></li>
      </ul>
    </div>
    <div className="navbar-end">
    <Link
    onClick={signinNav}
      href={"/"}
      className="mr-2 rounded-md bg-gradient-to-r from-[#353535] font-times  via-[#CBCDCF] via-30% to-[#6C6C6C] to-70% bg-blend-multiply lg:py-3 lg:px-10 py-3 px-3 text-black-2 font-semibold hover:bg-[#fad55a] cursor-pointer whitespace-nowrap"
    >
      SignIn
    </Link>
    <Link href={'/'}>
  <ConnectWallet
        style={{
          background: "linear-gradient(to right, #353535, #cbcdcf 30%, #6c6c6c 70%)", // bg-gradient-to-r from-[#353535] via-[#CBCDCF] via-30% to-[#6C6C6C] to-70%
          backgroundBlendMode: "multiply", // bg-blend-multiply
          padding: "px-2 lg:px-10 py-2 lg:py-4",
          color: "black", // text-black
          fontWeight: "600",
          fontFamily: "Orbitron",
          borderRadius: "0.25rem", // rounded-sm
          cursor: "pointer", // cursor-pointer
          whiteSpace: "nowrap", // whitespace-nowrap
          transition: "background-color 0.3s ease", // Smooth hover transition
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#fad55a"; // Hover effect: hover:bg-[#fad55a]
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = ""; // Revert hover effect
        }}
      />
  
  </Link>
    </div>
  </div>

  )
}

export default Navb