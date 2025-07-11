"use client";
// import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "./Chartone";
import ChartTwo from "./ChartTwo";
import ChatCard from "./Chatcard";
import TableOne from "./Tableone";
import CardDataStats from "./CardDatastats";
import { useEffect, useState,useContext } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import AdminEditPrice from "../../app/adminEditPrice/page";
// import {WalletContext} from "../../app/contextApiWallet"
import  {WalletContext} from "../../app/contextApiWallet";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
const ECommerce = () => {
  const { walletAddress, setWalletAddress, signer, setSigner } =
  useContext(WalletContext);
  console.log("this is Wallet Address from useContext",walletAddress)
  
  console.log("this is Signer from useContext", signer)
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [Aguabalance, setAguaBalance] = useState(200);
    const [Silverbalance, setSilverBalance] = useState(300);
    const [Goldbalance, setGoldBalance] = useState(500);

     const [totalUsers ,settotalUsers] = useState(200)
     const [AddminWallet , setAddminWallet] =useState("")
     const [AdminSigner,setAdminSigner] = useState("")
    
  
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const token = localStorage.getItem("access_token");
  //     const decodedToken = jwtDecode(token);

  //     if (!decodedToken) {
  //       console.error("No token found");
  //       return;
  //     }

  //     try {
  //       const res = await axios.get("http://localhost:8000/api/user/getusers", {
  //         headers: {
  //           Authorization: `Bearer ${decodedToken}`,
  //         },
  //         withCredentials: true, // If cookies are used
  //       });
  //       console.log("Users fetched:", res.data);
  //       console.log("Users fetched:", res.data.totalUsers);
  //       const totalUserss =  res.data.totalUsers;
  //       settotalUsers(totalUserss)
  //       if (Array.isArray(res.data.users)) {
  //         // Filter users with role 'user'
  //         const filteredUsers = res.data.users.filter(user => user.role === "user");
  //         setUsers(filteredUsers); // Set the filtered users
  //       } else {
  //         console.error("Response does not contain an array of users:", res.data);
  //         setError("Error: Invalid response format");
  //       }
  //     } catch (err) {
  //       console.error("Error fetching users:", err.response?.data?.message || err.message);
  //       setError("Error: Failed to fetch users");
  //     }
  //   };

  //   fetchUsers();
  // }, []);
  // useEffect(()=>{

  //   async function fetchAguabalance (){
  //     setSigner(signer)
  //     setWalletAddress(walletAddress)
  //     const AGUA_TOKEN_ABI=[{"inputs":[{"internalType":"address","name":"_onwer_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
  //     const AguatokenContract = new ethers.Contract("0x53c70c30aB31Be33469A2A489C2Ef6Ea03929635", AGUA_TOKEN_ABI, signer);
    
     
  //     const balance = await AguatokenContract.balanceOf(walletAddress)
  //     // const balanceofAgua = 5000000 - balance ;
  //     // setAguaBalance(ethers.utils.formatEther(balance));
  //     console.log("This is amount of token Sold",Number(balance))
  //     const SoldAgau = 500000   -  Number(balance/ 1e18)
  //     console.log("this is amount of Agau Token Sold", SoldAgau )
  //     setAguaBalance(SoldAgau);
     
    
  //    }
  //   fetchAguabalance()


  //  },[])  
  //  useEffect(()=>{

  //   async function fetchSilverbalance (){
  //     setSigner(signer)
  //     setWalletAddress(walletAddress)
  //     const AGUA_TOKEN_ABI=[{"inputs":[{"internalType":"address","name":"_onwer_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
  //     const AguatokenContract = new ethers.Contract("0x160B75590AD14B6C27F88a311b3203c69FDE31ae", AGUA_TOKEN_ABI, signer);
    
     
  //     const balance = await AguatokenContract.balanceOf(walletAddress)
  //     // const balanceofAgua = 5000000 - balance ;
  //     // setAguaBalance(ethers.utils.formatEther(balance));
  //     console.log("This is amount of token Sold",Number(balance))
  //     const SoldSilver = 500000   -  Number(balance/ 1e18)
  //     console.log("this is amount of Agau Token Sold", SoldSilver )
  //     setSilverBalance(SoldSilver);
     
    
  //    }
  //    fetchSilverbalance()


  //  },[])  
  //  useEffect(()=>{

  //   async function fetchGoldbalance (){
  //     setSigner(signer)
  //     setWalletAddress(walletAddress)
  //     const AGUA_TOKEN_ABI=[{"inputs":[{"internalType":"address","name":"_onwer_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
  //     const GoldtokenContract = new ethers.Contract("0x95eb4634B95fe9c3795edC22797F4a429E2149C2", AGUA_TOKEN_ABI, signer);
    
     
  //     const balance = await GoldtokenContract.balanceOf(walletAddress)
  //     // const balanceofAgua = 5000000 - balance ;
  //     // setAguaBalance(ethers.utils.formatEther(balance));
  //     console.log("This is amount of Gold token Sold",Number(balance))
  //     const SoldGold = 500000   -  Number(balance/ 1e18)
  //     console.log("this is amount of Gold Token Sold", SoldGold )
  //     setGoldBalance(SoldGold);
     
    
  //    }
  //    fetchGoldbalance()
  const Card = ({ title, subtitle, image, Icon, href,Subhed,tokenNme }) => {
    return (
      <a
        href={href}
        className="w-54 h-28 flex items-center rounded-xl p-2 border-[1px] border-yellow-400 hover:border-white dark:border-slate-300 dark:hover:border-black relative overflow-hidden group bg-gradient-to-r from-white via-white to-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727]"
      >
        <div className="absolute w-full inset-0 bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] dark:bg-gradient-to-r dark:from-gray-400 dark:via-gray-400 dark:to-gray-300 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
        <img
          className="absolute backdrop-blur-xl z-10 right-2 w-10 h-10 text-yellow-500 dark:text-gray-200 group-hover:text-white dark:group-hover:text-black group-hover:rotate-12 transition-transform duration-300 rounded-full"
          src={image}
          alt={`${title} image`}
        />
        <div>
          <h3 className="font-medium font-lora text-lg text-black group-hover:text-white dark:text-white dark:group-hover:text-black relative z-10 duration-300">
            {title}
          </h3>
          {/* <h3 className="font-medium font-lora text-md text-yellow-500 group-hover:text-white dark:text-white dark:group-hover:text-black relative z-10 duration-300">
            {Subhed}
          </h3> */}
          <p className="text-yellow-500 font-lora dark:text-white group-hover:text-white dark:group-hover:text-black text-md relative z-10 duration-300">
            {subtitle}   {tokenNme}
          </p>
        </div>
      </a>
    );
  };


  //  },[])  
  return (
    <>
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 text-black font-lora">
        <CardDataStats total={Goldbalance} title="Total Gold Sold" >
          <img src="/gold2.png" alt="Gold-pic" />
        </CardDataStats>
        <CardDataStats title="Total Silver Sold" total={Silverbalance} >
            <img src="/silver1.png" alt="Silver-pic" />
        </CardDataStats>
        <CardDataStats title="Total Agua Sold" total={Aguabalance } >
          <img src="/Agua-newlogo.png" alt="Agua-pic" />
        </CardDataStats>
        <CardDataStats title="Total Users" total={totalUsers}  >
          <img src="/Gold-user.png" className="w-10 h-10" alt="Agua-pic" />
        </CardDataStats>
      </div> */}

<div className=" ">
  <div className="flex flex-col lg:flex-row items-center lg:items-start">
    {/* Cards Section */}
    <div className="flex flex-wrap justify-center gap-2 w-full">
      <Card
        title="Total Gold Sold"
        subtitle="25"
        tokenNme="AU"
        Subhed="(22 Karat)"
        href="#"
        image="/gold2.png"
      />
      <Card
        title="Total Silver Sold"
        subtitle="55"
        tokenNme="AG"
        href="#"
        image="/silver1.png"
      />
      <Card
        title="Total Agua Sold"
        subtitle="44"
        tokenNme="Agua"
        href="#"
        image="/Agua-newlogo.png"
      />
      <Card
        title="Total Users"
        subtitle="44"
        href="#"
        image="/Gold-user.png"
      />
    </div>
  </div>
</div>


      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
       
      </div>
    <div>
    <AdminEditPrice/> 
    </div>
      <div className="col-span-12 xl:col-span-8 grid-cols-4 mt-10">
          <TableOne />
        </div>
    </>
  );
};

export default ECommerce;
