// import Image from "next/image";

// const brandData = [
//   {
//     logo: "/user-02.png",
//     name: "John",
//     visitors: 3.5,
//     revenues: "5,768",
//     sales: 590,
//     conversion: 4.8,
//   },
//   {
//     logo: "/user-02.png",
//     name: "Smith",
//     visitors: 2.2,
//     revenues: "4,635",
//     sales: 467,
//     conversion: 4.3,
//   },
//   {
//     logo: "/user-02.png",
//     name: "Josh",
//     visitors: 2.1,
//     revenues: "4,290",
//     sales: 420,
//     conversion: 3.7,
//   },
//   {
//     logo: "/user-02.png",
//     name: "Olivia",
//     visitors: 1.5,
//     revenues: "3,580",
//     sales: 389,
//     conversion: 2.5,
//   },
//   {
//     logo: "/user-02.png",
//     name: "Young",
//     visitors: 3.5,
//     revenues: "6,768",
//     sales: 390,
//     conversion: 4.2,
//   },
// ];

// const TableOne = () => {
//   return (
//     <div className="rounded-xl border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
//       <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
//         Pending Orders
//       </h4>

//       <div className="flex flex-col">
//         <div className="grid grid-cols-3 rounded-sm border border-x-[#D2D8E1] border-t-[#D2D8E1] dark:text-white border-b-[#242C36] dark:border-x-boxdark dark:border-t-boxdark dark:border-b-white dark:bg-boxdark sm:grid-cols-4">
//           <div className="p-2.5 xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Users
//             </h5>
//           </div>
//           <div className="p-2.5 text-center xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Visitors
//             </h5>
//           </div>
//           <div className="p-2.5 text-center xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Token type
//             </h5>
//           </div>
//           <div className="hidden p-2.5 text-center sm:block xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Token amount
//             </h5>
//           </div>
//           {/* <div className="hidden p-2.5 text-center sm:block xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Conversion
//             </h5>
//           </div> */}
//         </div>

//         {brandData.map((brand, key) => (
//           <div
//             className={`grid grid-cols-3 sm:grid-cols-4 ${
//               key === brandData.length - 1
//                 ? ""
//                 : "border-b border-stroke dark:border-strokedark"
//             }`}
//             key={key}
//           >
//             <div className="flex items-center gap-3 p-2.5 xl:p-5">
//               <div className="flex-shrink-0">
//                 <Image src={brand.logo} alt="Brand" width={48} height={48} />
//               </div>
//               <p className="hidden text-black dark:text-white sm:block">
//                 {brand.name}
//               </p>
//             </div>

//             {/* <div className="flex items-center justify-center p-2.5 xl:p-5">
//               <p className="text-black dark:text-[#F1BE11]">{brand.visitors}K</p>
//             </div> */}

//             <div className="flex items-center justify-center p-2.5 xl:p-5">
//               <p className="dark:text-white">${brand.revenues}</p>
//             </div>

//             <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
//               <p className="text-black dark:text-white">{brand.sales}</p>
//             </div>

//             <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
//               <p className="dark:text-white"><button className="btn btn-neutral">View</button></p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TableOne;

// "use client";

// import React, { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";

// const TableOne = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const token = localStorage.getItem("access_token");
//       const decodedToken = jwtDecode(token);
//       console.log("this is token from table one",token)
//       if (!decodedToken) {
//         console.error("No token found");
//         return;
//       }
    
//       try {
//         const res = await axios.get("http://localhost:8000/api/user/getusers", {
//           headers: {
//             Authorization: `Bearer ${decodedToken}`,
//           },
//           withCredentials: true, // If cookies are used
//         });
//         console.log("Users fetched:", res.data);
//         const alluser = await res.data;
        
//         setUsers(alluser)
//       } catch (err) {
//         console.error("Error fetching users:", err.response?.data?.message || err.message);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>All Users</h1>
//       <ul>
//         {Array.isArray(users) && users.length > 0 ? (
//         users.map((user) => (
//           <li key={users._id}>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Role:</strong> {user.role}</p>
//           </li>
//         ))
//       ) : (
//         <p>No users available or invalid response format.</p>
//       )}
//       </ul>
//     </div>
//   );
// };

// export default TableOne;

// import React, { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";

// const TableOne = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const token = localStorage.getItem("access_token");
//       const decodedToken = jwtDecode(token);
//       console.log("this is token from table one", token);

//       if (!decodedToken) {
//         console.error("No token found");
//         return;
//       }

//       try {
//         const res = await axios.get("http://localhost:8000/api/user/getusers", {
//           headers: {
//             Authorization: `Bearer ${decodedToken}`,
//           },
//           withCredentials: true, // If cookies are used
//         });
//         console.log("Users fetched:", res.data);

//         // Ensure we access the 'users' property from the response
//         if (Array.isArray(res.data.users)) {
//           setUsers(res.data.users); // Set the users array from the response
//         } else {
//           console.error("Response does not contain an array of users:", res.data);
//           setError("Error: Invalid response format");
//         }
//       } catch (err) {
//         console.error("Error fetching users:", err.response?.data?.message || err.message);
//         setError("Error: Failed to fetch users");
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <select onChange={(e) => setSelectedRole(e.target.value)} value={selectedRole}>
//         <option value="">All Roles</option>
//         <option value="admin">Admin</option>
//         <option value="user">User</option>
//         <option value="moderator">Moderator</option>
//         {/* Add other roles here */}
//       </select>
//       <h1>All Users</h1>
//       <ul>
//         {Array.isArray(users) && users.length > 0 ? (
//           users.map((user) => (
//             <li key={user._id}>
//               <p><strong>Name:</strong> {user.name}</p>
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>Role:</strong> {user.role}</p>
//             </li>
//           ))
//         ) : (
//           <p>No users available or invalid response format.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default TableOne;


// "use client";

// import React, { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";

// const TableOne = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [error, setError] = useState("");
//   const [selectedRole, setSelectedRole] = useState(""); // State for selected role

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const token = localStorage.getItem("access_token");
//       const decodedToken = jwtDecode(token);
//       console.log("this is token from table one", token);

//       if (!decodedToken) {
//         console.error("No token found");
//         return;
//       }

//       try {
//         const res = await axios.get("http://localhost:8000/api/user/getusers", {
//           headers: {
//             Authorization: `Bearer ${decodedToken}`,
//           },
//           withCredentials: true, // If cookies are used
//         });
//         console.log("Users fetched:", res.data);

//         // Ensure we access the 'users' property from the response
//         if (Array.isArray(res.data.users)) {
//           setUsers(res.data.users); // Set the users array from the response
//           setFilteredUsers(res.data.users); // Initially show all users
//         } else {
//           console.error("Response does not contain an array of users:", res.data);
//           setError("Error: Invalid response format");
//         }
//       } catch (err) {
//         console.error("Error fetching users:", err.response?.data?.message || err.message);
//         setError("Error: Failed to fetch users");
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Filter users based on the selected role
//   useEffect(() => {
//     if (selectedRole === "user") {
//       setFilteredUsers(users); // Show all users if no role is selected
//     } else {
//       setFilteredUsers(users.filter((user) => user.role === "user"));
//     }
//   }, [selectedRole, users]); // Re-run filtering when selectedRole or users change

//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>All Users</h1>
      
//       {/* Role Selection Dropdown */}
//       <select onChange={(e) => setSelectedRole(e.target.value)} value={selectedRole}>
//         <option value="">All Roles</option>
//         <option value="user">User</option>
      
//         {/* Add other roles here */}
//       </select>

//       <ul>
//         {Array.isArray(filteredUsers) && filteredUsers.length > 0 ? (
//           filteredUsers.map((user) => (
//             <li key={user._id}>
//               <p><strong>Name:</strong> {user.name}</p>
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>Role:</strong> {user.role}</p>
//             </li>
//           ))
//         ) : (
//           <p>No users available for the selected role.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default TableOne;

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";

// const TableOne = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const token = localStorage.getItem("access_token");
//       const decodedToken = jwtDecode(token);

//       if (!decodedToken) {
//         console.error("No token found");
//         return;
//       }

//       try {
//         const res = await axios.get("http://localhost:8000/api/user/getusers", {
//           headers: {
//             Authorization: `Bearer ${decodedToken}`,
//           },
//           withCredentials: true, // If cookies are used
//         });
//         console.log("Users fetched:", res.data);

//         if (Array.isArray(res.data.users)) {
//           setUsers(res.data.users); // Set the users array from the response
//         } else {
//           console.error("Response does not contain an array of users:", res.data);
//           setError("Error: Invalid response format");
//         }
//       } catch (err) {
//         console.error("Error fetching users:", err.response?.data?.message || err.message);
//         setError("Error: Failed to fetch users");
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="rounded-xl border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
//       <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
//         Users List
//       </h4>

//       <div className="flex flex-col">
//         <div className="grid grid-cols-3 rounded-sm border border-x-[#D2D8E1] border-t-[#D2D8E1] dark:text-white border-b-[#242C36] dark:border-x-boxdark dark:border-t-boxdark dark:border-b-white dark:bg-boxdark sm:grid-cols-4">
//           <div className="p-2.5 xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Users
//             </h5>
//           </div>
//           <div className="p-2.5 text-center xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Email
//             </h5>
//           </div>
//           <div className="p-2.5 text-center xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Role
//             </h5>
//           </div>
//           <div className="hidden p-2.5 text-center sm:block xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Action
//             </h5>
//           </div>
//         </div>

//         {users.map((user, key) => (
//           <div
//             className={`grid grid-cols-3 sm:grid-cols-4 ${
//               key === users.length - 1
//                 ? ""
//                 : "border-b border-stroke dark:border-strokedark"
//             }`}
//             key={key}
//           >
//             <div className="flex items-center gap-3 p-2.5 xl:p-5">
//               <div className="flex-shrink-0">
//                 {/* You can use a placeholder or default image for user logos */}
//                 <Image src="/user-02.png" alt="User" width={48} height={48} />
//               </div>
//               <p className="hidden text-black dark:text-white sm:block">{user.name}</p>
//             </div>

//             <div className="flex items-center justify-center p-2.5 xl:p-5">
//               <p className="dark:text-white">{user.email}</p>
//             </div>

//             <div className="flex items-center justify-center p-2.5 xl:p-5">
//               <p className="text-black dark:text-white">{user.role}</p>
//             </div>

//             <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
//               <button className="btn btn-neutral">View</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TableOne;

import Image from "next/image";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const TableOne = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

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
  //       // const totalUsers =  totalUsers
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
  // const formatWalletAddress = (address) => {
  //   if (!address || address.length < 10) return address; // Handle invalid addresses
  //   return `${address.slice(0, 4)}...${address.slice(-3)}`;
  // };
  // const compressEmail = (email) => {
  //   const [local, domain] = email.split("@");
  //   return `${local.slice(0, 5)}...@${domain.slice(0, 3)}...`;
  // };
  // if (error) return <div>Error: {error}</div>;

  return (
    // <div className="rounded-xl border font-lora border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    //   <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
    //     Users List 
    //   </h4>

    //   <div className="flex flex-col">
    //     <div className="grid grid-cols-3 rounded-sm border text-[#242C36] border-x-[#242C36] border-t-[#242C36] dark:text-white border-b-[#242C36] dark:border-x-boxdark dark:border-t-boxdark dark:border-b-white dark:bg-boxdark sm:grid-cols-4">
    //       <div className="p-2.5 xl:p-5">
    //         <h5 className="text-sm font-medium uppercase xsm:text-base">
    //           Users
    //         </h5>
    //       </div>
    //       <div className="p-2.5 text-center xl:p-5">
    //         <h5 className="text-sm font-medium uppercase xsm:text-base">
    //           Email
    //         </h5>
    //       </div>
    //       <div className="p-2.5 text-center xl:p-5">
    //         <h5 className="text-sm font-medium uppercase xsm:text-base">
    //           Role
    //         </h5>
    //       </div>
    //       <div className="hidden p-2.5 text-center sm:block xl:p-5">
    //         <h5 className="text-sm font-medium uppercase xsm:text-base">
    //          Wallet Address
    //         </h5>
    //       </div>
    //     </div>

    //     {users.map((user, key) => (
    //       <div
    //         className={`grid grid-cols-3 sm:grid-cols-4 ${
    //           key === users.length 
    //             ? ""
    //             : "border-b border-stroke dark:border-strokedark"
    //         }`}
    //         key={key}
    //       >
    //         <div className="flex items-center gap-3 p-2.5 xl:p-5">
    //           <div className="flex-shrink-0">
    //             <img  src={`http://localhost:8000/${user.image}`} alt="User" width={48} height={48} />

    //           </div>
    //           <p className="hidden text-black dark:text-white sm:block">{user.name}</p>
    //         </div>

    //         <div className="flex items-center dark:text-white justify-center p-2.5 xl:p-5">
    //           <p className="hidden text-black dark:text-white sm:block">{compressEmail(user.email)}</p>
    //         </div>

    //         <div className="flex items-center justify-center p-2.5 xl:p-5">
    //           <p className="text-black dark:text-white">{user.role}</p>
    //         </div>

    //         <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
    //           <p className="text-black dark:text-white">{formatWalletAddress(user.walletAddress)}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="p-4">
<h1 className="text-center text-4xl font-lora font-bold text-black">Users List</h1>
<div className="overflow-x-auto mt-4 w-full max-w-[1000px] bg-white text-[#23354F] dark:bg-[#24303F] dark:text-gray-100 rounded-lg shadow-md">
  <table className="table-auto w-full border border-yellow-500 dark:border-gray-700 rounded-lg">
    <thead className="bg-yellow-500 dark:bg-gray-800">
      <tr className="font-lora">
        <th className="px-4 py-2 text-left text-sm font-semibold text-white dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">Users</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-white dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">Email</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-white dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">Role</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-white dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">Wallet Address</th>
      </tr>
    </thead>
    <tbody>
      {[
        { orderNo: "Alice", payment: "Alice@gmail.com", status: "User", walletAddress: "0x7273...3222" },
        { orderNo: "Martin", payment: "Martin@gmail.com", status: "User", walletAddress: "0x24332...3322" },
        { orderNo: "Lewis", payment: "Lewis@gmail.com", status: "User", walletAddress: "0x4323...6422" },
        { orderNo: "Jordan", payment: "Jordan@gmail.com", status: "User", walletAddress: "0x9323...02242" },
      ].map((order, idx) => (
        <tr
          key={idx}
          className={`${
            idx % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"
          } hover:bg-gray-100 dark:hover:bg-gray-700`}
        >
          <td className="px-4 py-3 font-lora text-sm font-medium text-black dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
            {order.orderNo}
          </td>
          <td className="px-4 py-3 text-sm font-lora text-black dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
            {order.payment}
          </td>
          <td className="px-4 py-3 text-sm font-lora border-b border-gray-200 dark:border-gray-700">
              {order.status}
          </td>
          {/* <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
          <td className="px-4 py-3 text-sm border-b font-lora border-gray-200 dark:border-gray-700">
             {order.walletAddress}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

</div>
  );
};

export default TableOne;
