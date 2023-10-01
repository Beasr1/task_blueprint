import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <div className="bg-blue-500 text-white w-64 p-4">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-300 hover:text-white hover:bg-blue-600 px-2 py-1 rounded block"
              >
                Dashboard Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-300 hover:text-white hover:bg-blue-600 px-2 py-1 rounded block"
              >
                Reports
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-gray-300 hover:text-white hover:bg-blue-600 px-2 py-1 rounded block"
              >
                Users
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-semibold">Dashboard Home</h2>
          {/* Your dashboard content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
