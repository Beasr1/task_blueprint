import React from "react";

const ConnectWallet = ({ children }) => {
  return (
    <div>
      <div className="flex flex-1">
        <div
          className="h-full relative flex items-center
          justify-center z-[1] -mr-px px-3 py-0 rounded-none border-solid border-[rgb(48,48,48)]
          "
        >
          <button
            className="
          flex items-center justify-center
          gap-[3px]
          w-[200px]  h-9 cursor-pointer bg-[rgb(255,135,0)] border rounded px-2 py-0 border-[rgb(255,135,0)] border-solid
          hover:bg-[white]
          "
          >
            <div
              name="wallet"
              className="flex w-5 h-5 items-center justify-center 
              transition-transform duration ease-[ease-in-out] delay-[0s]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                className="w-6 h-6"
              >
                <path d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
              </svg>
            </div>
            <div
              transform="uppercase"
              className=" font-ProtoMono
            text-[black]
            "
            >
              connect wallet
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
