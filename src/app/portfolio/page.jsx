"use client";
import React,{useState} from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import DefaultLayout from "../../components/maincomp/DefaultLayout";
import Breadcrumb from "../../components/breadcrump/Breadcrump";
import { AnimatePresence, motion } from "framer-motion";
import { CiBitcoin, CiCoinInsert } from "react-icons/ci";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FiAlertCircle } from "react-icons/fi";
import { Pie } from 'react-chartjs-2';
import DonutChart from "../../components/CardsGet"

const HoverDevCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  
ChartJS.register(ArcElement, Tooltip, Legend);

 const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      hoverOffset: 20, // Adds depth effect when hovering
    },
  ],
};

  return (
    <DefaultLayout>
       <Breadcrumb pageName="Portfolio" />

          <div className="flex justify-center">
        <div className="bg-white border border-yellow-500 dark:border-white w-2/4 dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727] bg-cover bg-center rounded-lg">
        <div className="card  text-neutral-content w-96 h-160">
      <div className="avatar pt-6 flex justify-center">
        <div className="ring-yellow-500 dark:ring-white ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
          <img src="/user-01.png" alt="User Avatar" />
        </div>
      </div>
      <div className="card-body items-center text-center">
        <div className="card-actions flex justify-center">
            <>
              
            
            </>
          
            <>
              <h1 className="card-title text-xl font-lora text-[#23354F] font-bold dark:text-gray-400">Name : <span className="text-yellow-500 dark:text-white">Alice</span></h1>
              <h2 className="card-title text-[#23354F] font-lora text-xl font-bold dark:text-gray-400">Wallet Address : <span className="text-yellow-500 dark:text-white">0x5321....0986</span></h2><br />
              <h1 className="card-title text-xl font-lora text-[#23354F] font-bold dark:text-gray-400">Total Balance : <span className="text-yellow-500 dark:text-white">$ 7574782</span></h1>
            </>
         
        </div>

      </div>
    </div>

        </div>
        </div>
        {/* <div className="ml-2 mt-6 bg-white w-2/4 dark:bg-[#24303F] bg-cover bg-center rounded-lg">
        <div className="card  text-neutral-content w-96 h-160">
      <div className="avatar pl-32 pt-6">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
          <img src="/user-01.png" alt="User Avatar" />
        </div>
      </div>
      <div className="card-body items-center text-center">
        <div className="card-actions ">
          
              <h1 className=" text-[#23354F] dark:text-gray-100">Total Balance </h1><br />
              <h2 className=" text-[#23354F] dark:text-gray-100"> $ 5320986</h2>
        
         
        </div>

      </div>
    </div>

        </div> */}
        {/* <div className="card text-neutral-content w-2/4 ml-4 rounded-lg bg-white dark:bg-[#24303F]">
  <div className="card-body items-center text-center">
  <IoWalletOutline className="w-24 h-24 text-yellow-500 dark:text-white" />
  <h1 className="card-title text-[#23354F] font-lora text-3xl font-bold dark:text-gray-100 mt-8">Total Balance</h1>
    <div className="card-actions justify-end">
    <h2 className="card-title text-[#23354F] font-lora dark:text-gray-100"><span className="text-yellow-500">$ 52443.0022</span></h2>
    </div>
  </div>
</div> */}
        

{/* 

       <div className="gap-6">
        <div className="font-sans p-6">
          <div className="mb-8 flex items-center border-[1px] border-yellow-400 dark:border-white gap-6 rounded-xl bg-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727] p-4">
            <div className="h-24 w-24">
              <img
                src="/user-02.png"
                alt="Profile Avatar"
                className="h-full w-full rounded-full object-cover shadow-9"
              />
            </div>
            <div className="space-y-2 font-lora">
              <p className="font-bold text-yellow-500 dark:text-white">
                <span className="text-lg font-semibold text-black dark:text-gray-400">
                Name :
                </span>{" "}
                Alice
              </p>
              <p className="font-bold text-yellow-500 dark:text-white">
                <span className="text-lg font-semibold text-black dark:text-gray-400">
                  Wallet Address:
                </span>{" "}
                0x1234...abcd
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="gap-6">
  <div className="font-sans p-6">
    <div className="mb-8 flex items-center border-[1px] border-yellow-400 dark:border-gray-500 gap-6 rounded-xl bg-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-[#3a3a3a] dark:to-[#272727] p-6 shadow-lg transition-transform transform hover:scale-105">
      <div className="h-24 w-24">
        <img
          src="/user-02.png"
          alt="Profile Avatar"
          className="h-full w-full rounded-full object-cover shadow-md border-2 border-yellow-400 dark:border-gray-500"
        />
      </div>
      {/* <div className="overflow-x-auto bg-white dark:bg-gray-800 p-6 dark:border-gray-700">
  <table className="w-full text-left border-collapse">
  
    <tbody className="font-lora">
      <tr>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-400 text-2xl">
          Name
        </td>
        <td className="px-4 py-3 text-yellow-500 dark:text-white font-bold text-2xl">
          Alice
        </td>
      </tr>
      <tr>
        <td className="px-4 py-3 text-gray-700 dark:text-gray-400 text-2xl">
          Wallet Address
        </td>
        <td className="px-4 py-3 text-yellow-500 dark:text-white font-bold text-2xl">
          0x1234...abcd
        </td>
      </tr>
    </tbody>
  </table>
</div> */}
{/* 

    </div>
  </div>
</div> */} 


      {/* <div className="text-center text-gray-600 dark:text-black font-medium">
        <h1 className="text-4xl font-mont">Account  Worth :  <span className="text-yellow-500 text-4xl dark:text-gray-300">$5100.00</span></h1> */}
        {/* <h1 className="mt-2 text-3xl font-mont">
        </h1> */}
      {/* </div> */}

      {/* <div className="flex items-center justify-center">
  <div className="gap-6">
    <div className="font-sans p-6">
      <div className="mb-8 border-[1px] border-yellow-400 dark:border-white gap-6 rounded-xl bg-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727] p-4">
        <div className="font-lora flex justify-between">
        <IoWalletOutline className="w-12 h-12 mr-4 text-yellow-500 dark:text-white" />
          <div className="text-5xl font-medium text-black dark:text-gray-400">Total Balance : </div>
          <div className="text-yellow-500 dark:text-white text-5xl ml-4 font-semibold">$ 5100.00</div>
        </div>
      </div>
    </div>
  </div>
</div> */}


      {/* <div className="flex align-center justify-center gap-20 mt-6">
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
      </div> */}
<div className="p-8  ">
  <h1 className="text-4xl font-lora font-bold text-gray-800 text-center mb-6">Inventory</h1>
  <div className="flex flex-col lg:flex-row lg:gap-6 items-center lg:items-start">
    {/* Cards Section */}
    <div className="flex flex-wrap justify-center gap-6 w-full lg:w-1/2">
      <Card
        title="Gold"
        subtitle="25"
        tokenNme="AU"
        Subhed="(22 Karat)"
        href="#"
        image="/gold2.png"
        Icon={CiBitcoin}
      />
      <Card
        title="Silver"
        subtitle="55"
        tokenNme="AG"
        href="#"
        image="/silver1.png"
        Icon={CiBitcoin}
      />
      <Card
        title="Agua"
        subtitle="44"
        tokenNme="Agua"
        href="#"
        image="/Agua-newlogo.png"
        Icon={CiBitcoin}
      />
    </div>

    {/* Pie Chart Section */}
    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 bg-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727] rounded-lg border border-yellow-500 dark:border-white shadow-lg">
    
      <DonutChart />
    
    </div>
  </div>
</div>


<div className="p-4">
<h1 className="text-center text-4xl font-lora font-bold text-black">Pending Orders</h1>
<div className="overflow-x-auto mt-4 w-full max-w-[1000px] bg-white text-[#23354F] dark:bg-[#24303F] dark:text-gray-100 rounded-lg shadow-md">
  <table className="table-auto w-full border border-yellow-500 dark:border-gray-700 rounded-lg">
    <thead className="bg-yellow-500 dark:bg-gray-400">
      <tr className="font-lora">
        <th className="px-4 py-2 text-left text-sm font-semibold text-white dark:text-black border-b border-gray-200 dark:border-gray-700">Order No.</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-white dark:text-black border-b border-gray-200 dark:border-gray-700">Payment Method</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-white dark:text-black border-b border-gray-200 dark:border-gray-700">Status</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-white dark:text-black border-b border-gray-200 dark:border-gray-700">View Details</th>
      </tr>
    </thead>
    <tbody>
      {[
        { orderNo: "1.", payment: "Card", status: "Approved" },
        { orderNo: "2.", payment: "USDT", status: "Pending" },
        { orderNo: "3.", payment: "Ethers", status: "Pending" },
        { orderNo: "4.", payment: "Polygon", status: "Approved" },
      ].map((order, idx) => (
        <tr
          key={idx}
          className={`${
            idx % 2 === 0 ? "bg-white dark:bg-[#393A34]" : "bg-gray-50 dark:bg-[#272727]"
          } hover:bg-gray-100 dark:hover:bg-[#272727]`}
        >
          <td className="px-4 py-3 font-lora text-sm font-medium text-black dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
            {order.orderNo}
          </td>
          <td className="px-4 py-3 text-sm font-lora text-black dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
            {order.payment}
          </td>
          <td className="px-4 py-3 text-sm font-lora border-b border-gray-200 dark:border-gray-700">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                order.status === "Approved"
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-white"
              }`}
            >
              {order.status}
            </span>
          </td>
          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
          <td className="px-4 py-3 text-sm border-b font-lora border-gray-200 dark:border-gray-700">
            <button onClick={() => setIsOpen(true)} className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-semibold rounded-lg shadow border dark:border-white dark:bg-[#272727] dark:hover:bg-gray-700">
              View
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

</div>


{/* 
<div className="p-4">
  <p className="text-4xl font-mont font-medium text-center text-gray-600 dark:text-black mb-2">
    Pending Orders
  </p>
  <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
    <Card
      title="Gold"
      Subhed="(22 Karat)"
      subtitle="25 AU"
      href="#"
      image="/gold2.png"
      Icon={CiBitcoin}
    />
    <Card
      title="Silver"
      subtitle="55 AG"
      href="#"
      image="/silver1.png"
      Icon={CiBitcoin}
    />
    <Card
      title="Agua"
      subtitle="44 Agua"
      href="#"
      image="/Agua-newlogo.png"
      Icon={CiBitcoin}
    />
  </div>
</div> */}
    </DefaultLayout>
  );
};

const Card = ({ title, subtitle, image, Icon, href,Subhed,tokenNme }) => {
  return (
    <a
      href={href}
      className="w-2/5 h-28 flex items-center rounded-xl p-4 border-[1px] border-yellow-400 hover:border-white dark:border-slate-300 dark:hover:border-black relative overflow-hidden group bg-gradient-to-r from-white via-white to-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727]"
    >
      <div className="absolute w-80 inset-0 bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] dark:bg-gradient-to-r dark:from-gray-400 dark:via-gray-400 dark:to-gray-300 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <img
        className="absolute backdrop-blur-xl z-10 right-2 w-14 h-14 text-yellow-500 dark:text-gray-200 group-hover:text-white dark:group-hover:text-black group-hover:rotate-12 transition-transform duration-300 rounded-full"
        src={image}
        alt={`${title} image`}
      />
      <div>
        <h3 className="font-medium font-lora text-2xl text-black group-hover:text-white dark:text-white dark:group-hover:text-black relative z-10 duration-300">
          {title}
        </h3>
        {/* <h3 className="font-medium font-lora text-md text-yellow-500 group-hover:text-white dark:text-white dark:group-hover:text-black relative z-10 duration-300">
          {Subhed}
        </h3> */}
        <p className="text-yellow-500 font-lora dark:text-white group-hover:text-white dark:group-hover:text-black text-xl relative z-10 duration-300">
          {subtitle}   {tokenNme}
        </p>
      </div>
    </a>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Code of popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#272727] text-black dark:text-white w-full p-6 rounded-lg max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10 font-lora">
                {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                  <FiAlertCircle />
                </div> */}
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-black dark:text-white text-xl">
        <th>Token Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>Gold</th>
        <td>10</td>
        <td>2</td>
        <td>20</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>Silver</th>
        <td>20</td>
        <td>1</td>
        <td>20</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>Agua</th>
        <td>40</td>
        <td>3</td>
        <td>120</td>
      </tr>
      <tr>
        <th>Total Amount</th>
        <td></td>
        <td></td>
        <td className="font-semibold">160</td>
      </tr>
    </tbody>
  </table>
</div>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-yellow-600/10 transition-colors text-black dark:text-white font-semibold w-full py-2 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HoverDevCards;