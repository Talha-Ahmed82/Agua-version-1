
import Link from "next/link";
import DarkModeSwitcher from "../header/DarkmodeSwitcher";
import React, { useEffect, useRef, useState,useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {WalletContext} from "../../app/contextApiWallet"
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

import {
  updateFailure,
  updateSuccess,
  updateStart,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutSuccess,
} from "../../app/redux/user/userSlice";
import { useDispatch } from "react-redux";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
const providerOptions = {
  // coinbasewallet: {
  //   package: CoinbaseWalletSDK,
  //   options: {
  //     appName: "Web3Modal Demo",
  //     infuraId: "https://rpc.testnet.fantom.network", // Replace with the correct RPC URL if needed
  //   },
  // },

  // walletconnect: {
  //   package: WalletConnectProvider,
  //   options: {
  //     rpc: {
  //       4002: "https://rpc.testnet.fantom.network", // Replace with the correct RPC URL
  //     },
  //     bridge: "https://bridge.walletconnect.org", // Default WalletConnect bridge
  //     qrcode: true, // Show QR code for connection
  //   },
  // },
};
const HeaderAuth = (props) => {
  const { walletAddress, setWalletAddress, signer, setSigner } =
  useContext(WalletContext);
  const router = useRouter();
  const [hover, setHover] = useState(false);
  
  // const [walletAddress,setWalletAddress] = useState(null);
  // const [signer,setSigner] =useState(null)
  
 // const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");
 
  const dispatch = useDispatch();
  const connectWallet = async () => {
    if (walletAddress) {
      // Disconnect wallet
      setWalletAddress("");
      // setSigner(null);
      console.log("Wallet disconnected");
      return;
    }
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      const web3modalInstance = await web3Modal.connect();
      const web3modalProvider = new ethers.providers.Web3Provider(
        web3modalInstance
      );
      // let provider;
      // if (window.safepalProvider) {
      //   provider = new ethers.providers.Web3Provider(getProvider()); // SafePal provider
      // } else {
      //   // Fallback to Web3Modal provider
      //   provider = new ethers.providers.Web3Provider(web3modalInstance);
      // }
      const signer = web3modalProvider.getSigner();
      // const signer = signers;
      console.log(signer);
      setSigner(signer);

      const walletAddres = await signer.getAddress();
      console.log(walletAddres);
      // Update state with wallet details
      setWalletAddress(walletAddres);

      // Fetch staking data right after connecting the wallet
      // setLoading(true);
      // await fetchStakingDetails(signer); // Pass signer directly
      // await updateCountdown();
      web3modalInstance.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          const updatedAddress = accounts[0];
          setWalletAddress(updatedAddress);
          setSigner(web3modalProvider.getSigner());
          console.log("Wallet updated:", updatedAddress);
        } else {
          // Handle case where all accounts are disconnected
          setWalletAddress("");
          setSigner(null);
          console.log("Wallet disconnected");
        }
      });

      // Listen for chain changes (optional)
      web3modalInstance.on("chainChanged", (chainId) => {
        console.log("Chain changed:", chainId);
        window.location.reload();
      });
      // setLoading(false);
    } catch (error) {
      console.log("Error connecting wallet:", error);
    }
  };
  function shortenAddress(address) {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }
 const handleSignOut = async () => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/user/signout",
      {
        withCredentials: true,
      }
    );
    const data = res.data;
    if (!res.status === 200 || !res.status === 201) {
      console.log("data-error", data.message);
    } else {
      dispatch(signOutSuccess());
      console.log("Logout Successfully")
      router.push("/auth/signin")
    }
  } catch (error) {
    console.log(error.message);
  }
};
  return (
    <header className="top-0 z-10 flex w-full bg-white drop-shadow-1 dark:bg-[#272727] dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        {/* <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
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
        </div> */}
        {/* <div
      style={{
        display: "inline-block",
        background: hover
        ? "linear-gradient(to right, #353535, #cbcdcf 30%, #6c6c6c 70%)"
        : "linear-gradient(to right,#E4BE11, #E4BE11 30%,#E4BE11 70%)",
        backgroundBlendMode: "multiply",
        borderRadius: "0.25rem", // Matches the button's border-radius
        transition: "background-color 0.3s ease",
        padding: "6px", // Padding for hover effect outside the button
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    > */}
      {/* <ConnectWallet
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
      /> */}
       {/* <button
              className="text-white border border-white bg-[#E4BE11] py-2 px-4 sm:px-2 rounded-lg"
              onClick={connectWallet}
            >
              {walletAddress ? shortenAddress(walletAddress) : "Connect Wallet"}
            </button> */}
    {/* </div> */}
        {/* <WalletButton /> */}
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
          {/* <button className="btn btn-active bg-[#E4BE11] text-white btn-neutral" onClick={handleSignOut}>Logout</button> */}
            <DarkModeSwitcher />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderAuth;
