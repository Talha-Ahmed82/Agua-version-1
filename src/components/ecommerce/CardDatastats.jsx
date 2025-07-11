import React from "react";

const CardDataStats = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-xl  border border-yellow-500 dark:border-white bg-white px-6 shadow-default dark:bg-gradient-to-r dark:from-gray-700 dark:via-[#272727] dark:to-[#272727]">
      

      <div className="flex items-center justify-between">
      <div className="flex h-11.5 w-16.5 items-center justify-center mr-4 rounded-full">
        {children}
      </div>
        <div>
          <h4 className="text-lg font-semibold text-black dark:text-gray-200">
            {title}
          </h4>
          <span className="text-sm font-medium text-yellow-500 dark:text-white">{total}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && "text-[#F1BE11]"
          } ${levelDown && "text-[#F1BE11]"} `}
        >
          {rate}

          {levelUp && (
            <svg
              className="fill-[#F1BE11]"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          )}
          {levelDown && (
            <svg
              className="fill-[#F1BE11]"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
