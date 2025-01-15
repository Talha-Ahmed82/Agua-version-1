import ECommerce from "../../components/ecommerce/Ecommerce";
import { Metadata } from "next";
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
        <div className="flex justify-between items-center">
      
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
              <span className="rounded-lg mb-4 border border-black bg-black dark:bg-white dark:border-white px-8 py-2 text-center text-sm font-medium text-black  focus:outline-none focus:ring-4 ">
              </span>
            </div>
            </div>
        <ECommerce />
        
      </DefaultLayout>
    </>
  );
}
