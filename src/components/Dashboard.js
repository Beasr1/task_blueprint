import React from "react";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";

const Dashboard = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="w-1/5">
        {/* Adjust the width the first sidebar */}
        <Sidebar />
      </div>
      <div className="w-3/5">{children}</div>
      <div className="w-1/5">
        {/* Adjust the width  second sidebar */}
        <Sidebar2 />
      </div>
    </div>
  );
};

export default Dashboard;
