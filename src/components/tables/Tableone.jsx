import Image from "next/image";
import { useRouter } from "next/navigation";

const brandData = [
  {
    logo: "/user-02.png",
    name: "Jack",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/user-02.png",
    name: "Jasicca",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/user-02.png",
    name: "Martin",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/user-02.png",
    name: "Alex",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/user-02.png",
    name: "Smith",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
  let router = useRouter();
  const profile = () => {
    router.push('../../profile')
  }
  return (
    <div className="rounded-b-xl border border-[#D2D8E1] bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-[#24303F] dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white"></h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-[#D2D8E1] border border-x-[#D2D8E1] border-t-[#D2D8E1] border-b-[#242C36] dark:border-x-[#24303F]  dark:border-t-[#24303F] dark:border-b-[#D2D8E1] dark:bg-boxdark sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase dark:text-white xsm:text-base">User</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium dark:text-white uppercase xsm:text-base">
              Account
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm dark:text-white font-medium uppercase xsm:text-base">
              Current Pending
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm dark:text-white font-medium uppercase xsm:text-base">
              Proceed
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              {/* <p className="text-meta-5">{brand.conversion}%</p> */}
              <button onClick={profile} className="btn btn-neutral">Open</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
