"use client";

import { useState } from "react";
import '../../styles/globals.css'
import DefaultLayout from "../../components/maincomp/DefaultLayout";
import Breadcrumb from "../../components/breadcrump/Breadcrump";
import { FaLocationDot } from "react-icons/fa6";
import { RiBriefcase4Fill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";
import { IoIosMail } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { BiSolidDollarCircle } from "react-icons/bi";
import { BiDollarCircle } from "react-icons/bi";
import { GiWallet } from "react-icons/gi"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "Talha Ahmed",
    email: "ta8170407@gmail.com",
    role: "Developer",
  });

  // State to handle form inputs
  const [formDetails, setFormDetails] = useState(userDetails);

  // Handle form changes
  const handleChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Save updated details
  const handleSave = () => {
    setUserDetails(formDetails);
    setIsEditing(false);
  };


  return (
    <>
    <DefaultLayout>
      <Breadcrumb  pageName="Profile" />
       <div className="flex rounded-2xl">
       <div className="flex gap-2 mt-4 flex-wrap">

<div className="card text-neutral-content w-60 ml-4 h-50 bg-[#D2D8E1] dark:bg-[#24303F]">
  <div className="card-body items-center text-center">
  <BiSolidDollarCircle className="h-[55px] w-[55px] text-yellow-500"/>
  <h1 className="card-title text-[#23354F] text-3xl font-bold dark:text-gray-100">239</h1>
    <div className="card-actions justify-end">
    <h2 className="card-title text-[#23354F] dark:text-gray-100">Tokens</h2>
    </div>
  </div>
</div>

<div className="card text-neutral-content w-60 ml-4 h-50 bg-[#D2D8E1] dark:bg-[#24303F]">
  <div className="card-body items-center text-center">
  <GiWallet className="h-[55px] w-[55px] text-slate-500"/>
  <h1 className="card-title text-[#23354F] text-3xl font-bold dark:text-gray-100">146</h1>
    <div className="card-actions justify-end">
    <h2 className="card-title text-[#23354F] dark:text-gray-100">Wallet</h2>
    </div>
  </div>
</div>

<div className="card text-neutral-content w-60 ml-4 h-50 bg-[#D2D8E1] dark:bg-[#24303F]">
  <div className="card-body items-center text-center">
  <HiUsers className="h-[55px] w-[55px] text-slate-500"/>
  <h1 className="card-title text-[#23354F] text-3xl font-bold dark:text-gray-100">146</h1>
    <div className="card-actions justify-end">
    <h2 className="card-title text-[#23354F] dark:text-gray-100">Followers</h2>
    </div>
  </div>
</div>


<div className="overflow-x-auto mt-4 w-[800px] bg-[#D2D8E1] text-[#23354F] dark:bg-[#24303F] dark:text-gray-100 rounded-lg">
  <table className="table">
    <thead>
      <tr>
        <th>
        </th>
        <th className="text-black-2 dark:text-gray-400">Name</th>
        <th className="text-black dark:text-gray-400">Job</th>
        <th className="text-black dark:text-gray-400">Favorite Color</th>
        <th> <button className="btn btn-neutral btn-sm">Select All</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox border dark:border-white" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox dark:border-white" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br />
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox dark:border-white" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br />
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox dark:border-white" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br />
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
  </table>
</div>

        </div>

        <div className="ml-2 mt-6 bg-[#D2D8E1] dark:bg-[#24303F] bg-cover bg-center rounded-lg">
        <div className="card  text-neutral-content w-96 h-160">
      <div className="avatar pl-32 pt-6">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
          <img src="/user-01.png" alt="User Avatar" />
        </div>
      </div>
      <div className="card-body items-center text-center">
        <div className="card-actions justify-between">
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={formDetails.name}
                onChange={handleChange}
                className="input input-bordered w-full mb-2 text-[#23354F]"
              />
              <input
                type="email"
                name="email"
                value={formDetails.email}
                onChange={handleChange}
                className="input input-bordered w-full mb-2 text-[#23354F]"
              />
              <input
                type="text"
                name="role"
                value={formDetails.role}
                onChange={handleChange}
                className="input input-bordered w-full mb-2 text-[#23354F]"
              />
              <button onClick={handleSave} className="btn btn-success mr-2">
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="btn btn-error"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <h1 className="card-title text-[#23354F] dark:text-gray-100">{userDetails.name}</h1>
              <h2 className="card-title text-[#23354F] dark:text-gray-100">{userDetails.email}</h2><br />
              <h2 className="card-title text-[#23354F] dark:text-gray-100">{userDetails.role}</h2><br />
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-neutral"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
       
       
        <div className="card text-neutral-content w-96">
  <div className="card-body items-center text-center">
    <div className="card-actions justify-end gap-8">
      <IoIosMail className="h-[30px] w-[30px] text-[#333A48] dark:text-gray-100" />
      <hr className="w-[1px] h-[30px] bg-[#333A48] mx-2 dark:text-gray-100" />
      <RiBriefcase4Fill className="h-[30px] w-[30px] text-[#333A48] dark:text-gray-100" />
      <hr className="w-[1px] h-[30px] bg-[#333A48] mx-2 dark:text-gray-100" />
      <HiUsers className="h-[30px] w-[30px] text-[#333A48] dark:text-gray-100" />
    </div>
   <div className="flex gap-19 text-[#242C36] dark:text-gray-100">
       <h1>1086</h1>
       <h1>1582</h1>
       <h1>6341</h1>
   </div>
   <div className="card-actions justify-end gap-12 mt-8">
      <FaFacebookF className="h-[30px] w-[30px] text-[#3966FF]" />
      <FaTwitter className="h-[30px] w-[30px] text-[#4184BE]" />
      <FaInstagram className="h-[30px] w-[30px] text-amber-400" />
      <FaYoutube className="h-[30px] w-[35px] text-red-600" />
    </div>
    <button className="btn btn-neutral mt-4">Follow</button>
  </div>
</div>


      </div>
    </div>

        </div>

       </div>

       <div className="bg-[#D2D8E1] dark:bg-[#24303F] rounded-lg shadow text-gray-800 p-10 mt-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Recent Activities
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-4">
                <span className="bg-green-100 text-green-500 p-2 rounded-full">
                  ✔
                </span>
                <p className="dark:text-gray-100">Updated profile information</p>
              </li>
              <li className="flex items-center space-x-4">
                <span className="bg-yellow-100 text-yellow-500 p-2 rounded-full">
                  ✏
                </span>
                <p className="dark:text-gray-100">Changed password</p>
              </li>
              <li className="flex items-center space-x-4">
                <span className="bg-red-100 text-red-500 p-2 rounded-full">
                  ❌
                </span>
                <p className="dark:text-gray-100">Deleted a user</p>
              </li>
            </ul>
          </div>
          

       </DefaultLayout>
        </>
  );
};

export default AdminProfile;