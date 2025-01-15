import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  return (
    <>
      <div>
        <div className="relative bg-gradient-radial gradient-bg h-[800px]">
          {/* <img
          src="/Animate-5.png"
          className="absolute top-0 left-0 w-full h-full opacity-50 object-cover z-0"
        /> */}
          <h1 className="font-merry text-5xl md:text-6xl  text-yellow-400 text-center pt-6">
            Roadmap
          </h1>
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start md:w-60 h-14 w-38 mb-6 timeline-box bg-gradient-to-r from-[#F6F700] via-yellow-400 to-[#9C7509]">
                <button
                  onMouseEnter={() => setIsOpen(true)}
                  className="text-black font-medium md:px-4 md:py-2 rounded hover:opacity-90 transition-opacity"
                >
                  (Q3 2024)
                </button>
              </div>
              <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-yellow-500 h-5 mb-6 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-yellow-500" />
            </li>
            <li>
              <hr className="bg-yellow-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-yellow-500 h-5 w-5 mt-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end  md:w-60 h-14 w-38 mt-6 timeline-box bg-gradient-to-r from-[#F6F700] via-yellow-400 to-[#9C7509]">
                <button
                  onMouseEnter={() => setIsOpen2(true)}
                  className="text-black font-medium md:px-4 md:py-2 rounded hover:opacity-90 transition-opacity"
                >
                  (Q4 2024)
                </button>
              </div>
              <SpringModal2 isOpen2={isOpen2} setIsOpen2={setIsOpen2} />
              <hr className="bg-yellow-500 mt-6" />
            </li>
            <li>
              <hr className="bg-yellow-500 mt-6" />
              <div className="timeline-start  md:w-60 h-14 w-38 mt-4  timeline-box bg-gradient-to-r from-[#F6F700] via-yellow-400 to-[#9C7509]">
                <button
                  onMouseEnter={() => setIsOpen3(true)}
                  className="text-black font-medium md:px-4 md:py-2 rounded hover:opacity-90 transition-opacity"
                >
                  (Q1-Q2 2025)
                </button>
              </div>
              <SpringModal3 isOpen3={isOpen3} setIsOpen3={setIsOpen3} />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-yellow-500 h-5 w-5 mt-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-yellow-500 mt-6" />
            </li>
            <li>
              <hr className="bg-yellow-500 mt-6" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500 mt-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end  md:w-60 h-14 w-38 mt-6 timeline-box bg-gradient-to-r from-[#F6F700] via-yellow-400 to-[#9C7509]">
                <button
                  onMouseEnter={() => setIsOpen4(true)}
                  className="text-black font-medium md:px-4 md:py-2 rounded hover:opacity-90 transition-opacity"
                >
                  (Q3-Q4 2025)
                </button>
              </div>
              <SpringModal4 isOpen4={isOpen4} setIsOpen4={setIsOpen4} />
              <hr className="mt-6 bg-yellow-500" />
            </li>
            <li>
              <hr className="mt-6 bg-yellow-500" />
              <div className="timeline-start mt-4  md:w-60 h-14 w-38 timeline-box bg-gradient-to-r from-[#F6F700] via-yellow-400 to-[#9C7509]">
                <button
                  onMouseEnter={() => setIsOpen5(true)}
                  className="text-black font-medium md:px-4 md:py-2 rounded hover:opacity-90 transition-opacity"
                >
                  (2026)
                </button>
              </div>
              <SpringModal5 isOpen5={isOpen5} setIsOpen5={setIsOpen5} />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500 mt-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
            <li>
              <hr className="mt-6 bg-yellow-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500 mt-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end  md:w-60 h-24 sm:h-14 w-38 mt-6 timeline-box bg-gradient-to-r from-[#F6F700] via-yellow-400 to-[#9C7509]">
                <button
                  onMouseEnter={() => setIsOpen6(true)}
                  className="text-black font-medium md:px-4 md:py-2 rounded hover:opacity-90 transition-opacity"
                >
                  (2027 and Beyond)
                </button>
              </div>
              <SpringModal6 isOpen6={isOpen6} setIsOpen6={setIsOpen6} />
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-2 border-[#D2BA57]" />
    </>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Code of popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#F6F700] to-yellow-500 text-white w-full p-6 rounded-lg max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                  <FiAlertCircle />
                </div> */}
                <h3 className="text-3xl font-bold text-black text-center mb-2">
                  Foundation and Whitepaper Finalization (Q3 2024)
                </h3>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Whitepaper Completion
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Legal and Regulatory Preparation
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Initial Community
                </p>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Phase 2

const SpringModal2 = ({ isOpen2, setIsOpen2 }) => {
  return (
    <>
      {/* Code of popup */}
      <AnimatePresence>
        {isOpen2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen2(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#F6F700] to-yellow-500 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                    <FiAlertCircle />
                  </div> */}
                <h3 className="text-3xl font-bold text-black text-center mb-2">
                  Token Launch and Initial Platform Development (Q4 2024)
                </h3>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Token launch
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Smart Contract Deployment
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Initial Exchange Listings
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Staking Platform Launch
                </p>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => setIsOpen2(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Phase 3

const SpringModal3 = ({ isOpen3, setIsOpen3 }) => {
  return (
    <>
      {/* Code of popup */}
      <AnimatePresence>
        {isOpen3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen3(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#F6F700] to-yellow-500 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                      <FiAlertCircle />
                    </div> */}
                <h3 className="text-3xl font-bold text-black text-center mb-2">
                  Mining Integration and Reserve Management (Q1-Q2 2025)
                </h3>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Mining Partnerships
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Reserve Establishment
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Smart Contract Enhancements
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Revenue Sharing Implementation
                </p>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => setIsOpen3(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Phase 4

const SpringModal4 = ({ isOpen4, setIsOpen4 }) => {
  return (
    <>
      {/* Code of popup */}
      <AnimatePresence>
        {isOpen4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen4(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#F6F700] to-yellow-500 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                      <FiAlertCircle />
                    </div> */}
                <h3 className="text-3xl font-bold text-black text-center mb-2">
                  Platform Expansion and DeFi Integration (Q3-Q4 2025)
                </h3>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  DeFi Platform Integration
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Governance Launch
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Advanced Analytics and Reporting
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Community Incentive Programs
                </p>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => setIsOpen4(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

//Phase 5

const SpringModal5 = ({ isOpen5, setIsOpen5 }) => {
  return (
    <>
      {/* Code of popup */}
      <AnimatePresence>
        {isOpen5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen5(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#F6F700] to-yellow-500 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                      <FiAlertCircle />
                    </div> */}
                <h3 className="text-3xl font-bold text-black text-center mb-2">
                  Global Expansion and Regulatory Alignment (2026)
                </h3>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Regulatory Expansion
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Cross-Chain Integration
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Institutional Partnerships
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Global Marketing Campaign
                </p>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => setIsOpen5(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Phase 6

const SpringModal6 = ({ isOpen6, setIsOpen6 }) => {
  return (
    <>
      {/* Code of popup */}
      <AnimatePresence>
        {isOpen6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen6(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#F6F700] to-yellow-500 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                      <FiAlertCircle />
                    </div> */}
                <h3 className="text-3xl font-bold text-black text-center mb-2">
                  Continuous Improvement and Ecosystem Growth (2027 and Beyond)
                </h3>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Platform Upgrades
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Ecosystem Expansion
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Sustainability Initiatives
                </p>
                <p className="mb-4 text-black">
                  {" "}
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox h-5 checkbox-warning"
                  />{" "}
                  Global Adoption Initiatives
                </p>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => setIsOpen6(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExampleWrapper;