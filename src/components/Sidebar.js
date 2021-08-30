import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex flex-col flex-shrink-0 w-full text-blueGray-700 bg-blue-900 shadow-xl md:w-64">
      <div className="flex flex-col items-center flex-shrink-0 bg-blue-800 h-1"></div>
      <div className="flex flex-col items-center flex-shrink-0 py-4 bg-blue-900">
        <span href="/" className="w-full px-8 focus:outline-none">
          <div className="inline-flex items-center">
            <div className="w-2 h-2 p-2 mr-2 bg-white rounded-full"></div>
            <h2 className="block p-2 text-xl font-medium tracking-tighter text-white transition duration-500 ease-in-out transform cursor-pointer hover:text-white lg:text-x lg:mr-8">
              Slate Studio
            </h2>
          </div>
        </span>
      </div>
      <nav className="flex-grow pb-4 pr-4 bg-blue-900 md:block md:pb-0 md:overflow-y-auto">
        <ul>
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 mt-2 text-base text-white transition duration-500 ease-in-out transform hover:text-blue-200 hover:border-blue-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ml-4">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/appointments"
              className="flex items-center px-4 py-2 mt-2 text-base text-white transition duration-500 ease-in-out transform hover:text-blue-200 hover:border-blue-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-4">Appointments</span>
            </Link>
          </li>
          <li>
            <Link
              to="/customers"
              className="flex items-center px-4 py-2 mt-2 text-base text-white transition duration-500 ease-in-out transform hover:border-blue-200  hover:text-blue-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="ml-4">Customers</span>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="flex items-center px-4 py-2 mt-2 text-base text-white transition duration-500 ease-in-out transform hover:border-blue-200  hover:text-blue-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                />
              </svg>
              <span className="ml-4">Orders</span>
            </Link>
          </li>
          <li>
            <Link
              to="/tasks"
              className="flex items-center px-4 py-2 mt-2 text-base text-white transition duration-500 ease-in-out transform hover:border-blue-200  hover:text-blue-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <span className="ml-4">Tasks</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
