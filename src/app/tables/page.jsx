"use client";
import Breadcrumb from "../../components/breadcrump/Breadcrump";
import TableOne from "../../components/tables/Tableone";
import TableThree from "../../components/tables/Tablethree";
import TableTwo from "../../components/tables/Tabletwo";
import { useState, useEffect } from "react";
import DefaultLayout from "../../components/maincomp/DefaultLayout";

const TablesPage = () => {
  const [visibleTable, setVisibleTable] = useState('tableOne'); // Default to TableOne
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setVisibleTable('tableOne');
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      {/* Buttons with Conditional Styling */}
      {/* <button
        className={`px-4 py-2 rounded ${
          visibleTable === 'tableOne' ? 'bg-customGray text-white' : 'bg-lightGray text-black'
        } hover:bg-customGray hover:text-white`}
        onClick={() => setVisibleTable('tableOne')}
      >
        Pending Orders
      </button>

      <button
        className={`ml-4 px-4 py-2 rounded ${
          visibleTable === 'tableTwo' ? 'bg-customGray text-white' : 'bg-lightGray text-black'
        } hover:bg-customGray hover:text-white`}
        onClick={() => setVisibleTable('tableTwo')}
      >
        Black Listed
      </button>

      <button
        className={`ml-4 px-4 py-2 rounded ${
          visibleTable === 'tableThree' ? 'bg-customGray text-white' : 'bg-lightGray text-black'
        } hover:bg-customGray hover:text-white`}
        onClick={() => setVisibleTable('tableThree')}
      >
        Users
      </button> */}

      {/* Tables */}
      <div className="flex flex-col">
      <div role="tablist" className="tabs tabs-lifted">
      {/* Tab 1 */}
      <a
        role="tab"
        onClick={() => {
          setActiveTab(1)
          setVisibleTable('tableOne')
        }} // Update active tab
        className={`tab text-gray-500 text-lg  ${
          activeTab === 1 ? 'tab-active dark:text-white dark:!bg-[#24303F] !bg-[#D2D8E1]' : ''
        }`}
      >
        Pending Orders
      </a>

      {/* Tab 2 */}
      <a
        role="tab"
        onClick={() => {setActiveTab(2) 
          setVisibleTable('tableTwo')}}
        className={`tab text-gray-500 text-lg ${
          activeTab === 2 ? 'tab-active dark:text-white dark:!bg-[#24303F] !bg-[#D2D8E1]' : ''
        }`}
      >
        Black Listed
      </a>

      {/* Tab 3 */}
      <a
        role="tab"
        onClick={() => {setActiveTab(3)
          setVisibleTable('tableThree')
        }}
        className={`tab text-gray-500 text-lg ${
          activeTab === 3 ? 'tab-active dark:text-white dark:!bg-[#24303F] !bg-[#D2D8E1]' : ''
        }`}
      >
        Users
      </a>
    </div>
        {visibleTable === 'tableOne' && <TableOne />}
        {visibleTable === 'tableTwo' && <TableTwo />}
        {visibleTable === 'tableThree' && <TableThree />}
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
