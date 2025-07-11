"use client";
import React, { useEffect, useState } from "react";
import { Spinner, Alert } from "flowbite-react";
import { jwtDecode } from "jwt-decode";
import DefaultLayout from "../../components/admincomp/adminLayout";
import Breadcrumb from "../../components/breadcrump/Breadcrump";
import { useRouter } from "next/navigation";


function AdminProfile () {
  

const [userData, setUserData] = useState(null); 
const [loading, setLoading] = useState(true);   
  const [error, setError] = useState("");       
  const router = useRouter();

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       // Retrieve the access token from localStorage
  //       const token = localStorage.getItem("access_token");

  //       // If no token is found, redirect to the login page
  //       if (!token) {
  //         router.push("/auth/signin");
  //         return;
  //       }

  //       // Decode the token to get the user ID
  //       const decodedToken = jwtDecode(token);
  //       const userId = decodedToken.id; // Assumes the token payload has 'id'

  //       if (!userId) {
  //         throw new Error("Invalid token: User ID not found.");
  //       }

  //       // Fetch user data from the backend
  //       const response = await fetch(`http://localhost:8000/api/user/${userId}`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`, // Send the JWT token in the header
  //         },
  //         credentials: "include", // Include cookies if required
  //       });

  //       // Handle non-successful responses
  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.message || "Failed to fetch user data");
  //       }

  //       // Parse and set the user data
  //       const data = await response.json();
  //       setUserData(data);
  //     } catch (err) {
  //       console.error("Error fetching user data:", err.message);
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUserData();
  // }, [router]);

  // Display loading spinner
  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       {/* <Spinner size="md" /> */}
  //       <span className="ml-2">Loading...</span>
  //     </div>
  //   );
  // }

  // Display error message
  // if (error) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <Alert color="failure">{error}</Alert>
  //     </div>
  //   );
  // }

    return (
          <DefaultLayout>
            <Breadcrumb pageName="Admin Profile" />
        {/* <div className="gap-6">
        <div className="font-sans   ">
          <div className=" flex items-center h-[250px]  gap-6 rounded-xl border-2 border-gray-600 bg-[#D2D8E3] dark:bg-[#272727] p-4"> */}
            {/* <div className="h-24 w-24">
            <img
              src='/user-01.png'
              alt="User Profile"
              className="h-full w-full rounded-full object-cover shadow-9"
            />
            </div>
            <div className="space-y-2">
              <p className="font-bold text-black dark:text-white">
                <span className="text-lg font-semibold dark:text-white">
                  Name: 
                </span>{" "}
              </p>
              <p className="font-bold text-black dark:text-white">
                <span className="text-lg font-semibold dark:text-white">
                  Wallet Address: 
                </span>{" "}
              </p>
              <p className="font-bold text-black dark:text-white">
                <span className="text-lg font-semibold dark:text-white">
                  Email: 
                </span>{" "}  
            </p>
            </div> */}
              {/* {userData ? (
        <div className="font-sans p-6">
          <div className="mb-8 flex items-center gap-6 rounded-xl border-2 border-gray-600 bg-[#D2D8E1] dark:bg-[#272727] p-4">
            <div className="h-24 w-24">
            {userData.image && (
            <img
              src={`http://localhost:8000/${userData.image}`}
              alt="User Profile"
              className="h-full w-full rounded-full object-cover shadow-9"
            />
          )}
              
            </div>
            <div className="space-y-2">
              <p className="font-bold text-black dark:text-white">
                <span className="text-lg font-semibold dark:text-gray-400">
                  Name:
                </span>{" "}
                {userData.name}
              </p>
              <p className="font-bold text-black dark:text-white">
                <span className="text-lg font-semibold dark:text-gray-400">
                  Wallet Address:
                </span>{" "}
                {userData.walletAddress}  
              </p>
              <p className="font-bold text-black dark:text-white">
                <span className="text-lg font-semibold dark:text-gray-400">
                  Email:
                </span>{" "}
                {userData.email}  
            
              </p>
            </div>
          </div>
        </div>
          ) : (
            <p>No Admin user data found.</p>
          )} */}
    
          {/* </div>
        </div>
      </div> */}
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
    </DefaultLayout>
    )
  
}

export default AdminProfile;