"use client";
import React from "react";
import DefaultLayout from "../../components/admincomp/adminLayout";
import Breadcrumb from "../../components/breadcrump/Breadcrump";
import TableOne from "../../components/tables/Tableone";

function ApproveOrders () {
    const details = [
        { label: "User id", value: "2764738" },
        { label: "Payment", value: "USDT" },
        { label: "Wallet Address", value: "0x7373...233" },
        { label: "Status", value: "Approved" },
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
        { label: "Status", value: "Approved" },
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
          <Breadcrumb pageName="Approved Orders" />
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
    
      
              <div>
                Total Amount :{" "}
                <span className="font-thin text-yellow-500 dark:text-white">
                  $36377
                </span>
            </div>
          </div>
        </div>
    </div>
    
    <div className="flex gap-2 font-lora">
          <div className="card bg-white dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727] shadow-xl border border-yellow-500 dark:border-white">
          <div className="card-body text-md text-black dark:text-gray-400 font-bold">
            {details2.map((item, index) => (
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
    
      
              <div>
                Total Amount :{" "}
                <span className="font-thin text-yellow-500 dark:text-white">
                  $62980
                </span>
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
    </div>
    <TableOne />
        </DefaultLayout>
      );
}

export default ApproveOrders;