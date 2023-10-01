import React from "react";
import Status from "./Status";
import Traits from "./Traits";

const Sidebar = () => {
  return (
    <div className="flex h-full font-ProtoMono ">
      <div className="hidden md:flex flex-col gap-y-2  h-full w-300 p-2">
        <div className="flex flex-col gap-y-4 px-5 py-4 z-[9999] gap-5 gap-x-5 mb-10">
          <Status />
          <Traits />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
