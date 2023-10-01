"use client";
import { useState } from "react";

const Status = () => {
  const [selectedOption, setSelectedOption] = useState("onlyBuyNow");
  const space = ". ";

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="flex-col text-xs border-b border-solid pb-5 gap-[4px]">
      <div className="border-b-[rgb(48,48,48)] ">
        Status
        <div className="flex-col px-px gap-[5px] p-4">
          <label className="flex items-center space-x-2 cursor-pointer  mb-1 ">
            <input
              type="radio"
              name="status"
              value="onlyBuyNow"
              checked={selectedOption === "onlyBuyNow"}
              onChange={() => handleOptionClick("onlyBuyNow")}
              className="cursor-pointer appearance-none h-4 w-4 border border-gray-300 rounded-full checked:bg-amber-500 checked:border-amber-500"
            />
            {space} Only Buy Now
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="status"
              value="showAll"
              checked={selectedOption === "showAll"}
              onChange={() => handleOptionClick("showAll")}
              className="cursor-pointer appearance-none h-4 w-4 border border-gray-300 rounded-full checked:bg-amber-500 checked:border-amber-500"
            />
            {space} Show All
          </label>
        </div>
      </div>

      <div>Rarity</div>

      <div>Price</div>
    </div>
  );
};
export default Status;
