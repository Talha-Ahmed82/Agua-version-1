"use client";
import Header from "../header";
import HeaderAuth from "../headerAuth"

function AuthComp ({ children }) {
    return(
        <>
         {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex">
        {/* <!-- ===== Sidebar Start ===== --> */}
        {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        {/* <!-- ===== Sidebar End ===== --> */}
        <div className="bg-white border border-white dark:border-[#272727] dark:bg-[#272727] h-auto w-6">
         
         </div>

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative  flex border border-white dark:border-[#272727] flex-1 flex-col bg-[#D2D8E1]">
          {/* <!-- ===== Header Start ===== --> */}
          <HeaderAuth />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="bg-white dark:bg-[#272727]">
            <div className="mx-auto bg-white dark:bg-[#272727]  rounded-3xl max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        <div className="bg-white border border-white dark:border-[#272727] dark:bg-[#272727] h-auto w-6 ]">
         
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
        </>
    )
}

export default AuthComp;