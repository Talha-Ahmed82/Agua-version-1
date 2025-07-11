import Link from "next/link";
import '../../styles/globals.css'

const Breadcrumb = ({ pageName }) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-gray-700 dark:text-gray-300 font-mont">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2 font-lora">
          <li>
            <h1 className="font-medium text-gray-700 dark:text-gray-700">
              Dashboard /
            </h1>
          </li>
          <li className="font-medium text-primary dark:text-white underline">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;

