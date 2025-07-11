import React from "react";
import Link from "next/link";
import SidebarDropdown from "./SidebarDropdown";
import '../../styles/globals.css';
import { usePathname } from "next/navigation";

const SidebarItem = ({ item, pageName, setPageName }) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    return setPageName(updatedPageName);
  };

  const pathname = usePathname();

  const isActive = (item) => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <li>
        <Link
          href={item.route}
          onClick={handleClick}
          className={`${isItemActive ? "font-lora bg-gradient-to-r from-yellow-400 via-yellow-400 to-[#C88603] text-[#FFFFFF] dark:text-boxdark dark:bg-gradient-to-r dark:from-gray-400 dark:via-gray-500 dark:to-gray-500" : "dark:text-gray-500"} group relative flex items-center gap-2.5 font-lora rounded-sm px-4 py-2 font-medium hover:text-white text-yellow-500 duration-300 ease-in-out hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-400 hover:to-[#C88603] dark:hover:bg-gradient-to-r dark:hover:from-gray-500 dark:hover:via-gray-500 dark:hover:to-gray-500 dark:hover:text-black`}
        >
          {item.icon}
          {item.label}
          {item.children && (
            <svg
              className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                pageName === item.label.toLowerCase() && "rotate-180"
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                fill=""
              />
            </svg>
          )}
        </Link>

        {item.children && (
          <div
            className={`translate transform overflow-hidden ${
              pageName !== item.label.toLowerCase() && "hidden"
            }`}
          >
            <SidebarDropdown item={item.children} />
          </div>
        )}
      </li>
  );
};

export default SidebarItem;
