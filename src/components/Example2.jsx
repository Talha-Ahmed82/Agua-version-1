import React from "react";

const Example2 = ({ buttonName}) => {
  return (
    <DrawOutlineButton>{buttonName}</DrawOutlineButton>
    
  );
};
const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 h-14 gap-10 font-mont font-medium text-lg text-yellow-500 dark:text-white transition-colors duration-[400ms] hover:text-gray-500 dark:hover:text-white"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-400 dark:bg-gray-500 transition-all duration-100  group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-yellow-400 dark:bg-gray-500 transition-all delay-100  duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-yellow-400 dark:bg-gray-500 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-yellow-400 dark:bg-gray-500 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Example2;
