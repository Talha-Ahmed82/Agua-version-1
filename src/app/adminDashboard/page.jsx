import ECommerce from "../../components/ecommerce/Ecommerce";
import { Metadata } from "next";
import Breadcrumb from "../../components/breadcrump/Breadcrump";
import DefaultLayout from "../../components/admincomp/adminLayout";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Next.js E-commerce Dashboard | Agua - Next.js Dashboard Template",
//   description: "This is Next.js Home for Agua Dashboard Template",
// };

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Breadcrumb pageName="Admin Dashboard" />
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
      </div> 
        <div className="flex justify-between items-center ">
      
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
              {/* <span className="rounded-lg mb-4 border border-black bg-red dark:bg-white dark:border-white px-8 py-2 text-center text-sm font-medium text-black  focus:outline-none focus:ring-4 ">
              </span> */}
            </div>
            </div>
        <ECommerce />
        
      </DefaultLayout>
    </>
  );
}
