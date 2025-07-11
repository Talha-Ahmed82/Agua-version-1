"use client";
import Breadcrumb from "../../components/breadcrump/Breadcrump";
import TableOne from "../../components/tables/Tableone";
import TableThree from "../../components/tables/Tablethree";
import TableTwo from "../../components/tables/Tabletwo";
import { useState, useEffect } from "react";
import DefaultLayout from "../../components/admincomp/adminLayout";

const TablesPage = () => {
  const [visibleTable, setVisibleTable] = useState('tableOne'); 
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setVisibleTable('tableOne');
  }, []);

  const details = [
    { label: "User id", value: "2764738" },
    { label: "Payment", value: "USDT" },
    { label: "Wallet Address", value: "0x7373...233" },
    { label: "Status", value: "Pending" },
    { label: "Transaction id", value:  (
      <a
        href="https://etherscan.io/tx/123456"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-500 dark:text-white underline"
      >
        View
      </a>
    ),},
  ];

  const tableData = [
    { token: "Gold", quantity: 3, price: 10, total: 30 },
    { token: "Agua", quantity: 32, price: 20, total: 50 },
    { token: "Silver", quantity: 2, price: 55, total: 24 },
  ];

  const details2 = [
    { label: "User id", value: "546738" },
    { label: "Payment", value: "Ethers" },
    { label: "Wallet Address", value: "0x9233...093" },
    { label: "Status", value: "Pending" },
    { label: "Transaction id", value:  (
      <a
        href="https://etherscan.io/tx/123456"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-500 dark:text-white underline"
      >
        View
      </a>
    ),},
  ];

  const tableData2 = [
    { token: "Gold", quantity: 6, price: 23, total: 54 },
    { token: "Agua", quantity: 12, price: 65, total: 34 },
    { token: "Silver", quantity: 7, price: 33, total: 42 },
  ];


  return (
    <DefaultLayout>
      <Breadcrumb pageName="Pending Orders" />
      {/* <div className="flex flex-col">
      <div role="tablist" className="tabs  tabs-lifted">
      <a
        role="tab"
        onClick={() => {
          setActiveTab(1)
          setVisibleTable('tableOne')
        }} 
        className={`tab text-[#272727] text-lg  ${
          activeTab === 1 ? 'tab-active text-[#E4BE11] dark:!bg-[#272727] !bg-white ' : ''
        }`}
      >
        Pending Orders
      </a>

      <a
        role="tab"
        onClick={() => {setActiveTab(2) 
          setVisibleTable('tableTwo')}}
        className={`tab text-[#272727] text-lg ${
          activeTab === 2 ? 'tab-active text-[#E4BE11] dark:!bg-[#24303F] !bg-white' : ''
        }`}
      >
        Approved orders
      </a>

      <a
        role="tab"
        onClick={() => {setActiveTab(3)
          setVisibleTable('tableThree')
        }}
        className={`tab text-[#272727] text-lg ${
          activeTab === 3 ? 'tab-active text-[#E4BE11] dark:!bg-[#24303F] !bg-white' : ''
        }`}
      >
        Users
      </a>
    </div>
        {visibleTable === 'tableOne' && <TableOne />}
        {visibleTable === 'tableTwo' && <TableTwo />}
        {visibleTable === 'tableThree' && <TableThree />}
      </div> */}
      <div className="flex w-full justify-center gap-6">
      <div className="flex gap-2 font-lora">
      <div className="card bg-white  dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727] shadow-xl border border-yellow-500 dark:border-white">
      <div className="card-body text-md text-black dark:text-gray-400 font-bold">
        {details.map((item, index) => (
          <div className="flex gap-7" key={index}>
            <div className="">
              {item.label} :{" "}
              <span className="font-thin text-yellow-500 dark:text-white">
                {item.value}
              </span>
            </div>
          </div>
        ))}

        <hr className="border border-yellow-500 dark:border-white" />

        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                className="font-thin text-yellow-500 dark:text-white"
                key={index}
              >
                <td>{row.token}</td>
                <td>{row.quantity}</td>
                <td>{row.price}</td>
                <td>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr className="border border-yellow-500 dark:border-white" />

  
        <div className="flex justify-between">
          <div>
            Total Amount :{" "}
            <span className="font-thin text-yellow-500 dark:text-white">
              $36377
            </span>
          </div>
          <div>
            <button className="btn btn-sm ml-4 text-white dark:text-black bg-yellow-500 hover:bg-white hover:text-yellow-500 dark:bg-gray-400 border border-white">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
</div>

<div className="flex gap-2 font-lora">
      <div className="card bg-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727] shadow-xl border border-yellow-500 dark:border-white">
      <div className="card-body text-md text-black dark:text-gray-400 font-bold">
        {details2.map((item, index) => (
          <div className="flex gap-7 w-36" key={index}>
            <div className="">
              {item.label} :{" "}
              <span className="font-thin text-yellow-500 dark:text-white">
                {item.value}
              </span>
            </div>
          </div>
        ))}

        <hr className="border border-yellow-500 dark:border-white" />

        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {tableData2.map((row, index) => (
              <tr
                className="font-thin text-yellow-500 dark:text-white"
                key={index}
              >
                <td>{row.token}</td>
                <td>{row.quantity}</td>
                <td>{row.price}</td>
                <td>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr className="border border-yellow-500 dark:border-white" />

  
        <div className="flex justify-between">
          <div>
            Total Amount :{" "}
            <span className="font-thin text-yellow-500 dark:text-white">
              $62980
            </span>
          </div>
          <div>
            <button className="btn btn-sm ml-4 text-white dark:text-black bg-yellow-500 hover:bg-white hover:text-yellow-500 dark:bg-gray-400 border border-white">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
</div>
</div>

<div className="join flex justify-center mt-8">
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" defaultChecked />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="5" />
</div>
    </DefaultLayout>
  );
};

export default TablesPage;
