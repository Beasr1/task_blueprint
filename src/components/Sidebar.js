import React from "react";

const Sidebar = ({ children }) => {
  return (
    <div className="flex h-full font-ProtoMono">
      <div className="hidden md:flex flex-col gap-y-2  h-full w-300 p-2">
        <div className="flex flex-col gap-y-4 px-5 py-4 z-[9999]">
          Item1 Item2
        </div>
        <div className=" relative z-0 overflow-y-auto h-full"></div>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2"> {children}</main>
    </div>
  );
};

export default Sidebar;
