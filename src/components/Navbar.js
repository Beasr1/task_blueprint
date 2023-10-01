import React from "react";
import Input from "./Input";
import SearchInput from "./SearchInput";
import ConnectWallet from "./ConnectWallet";
import imageContent from "../assets/image/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      className="
        p-4 
        font-ProtoMono 
        border-b-[rgb(48,48,48)] border-b border-solid"
    >
      <div className="container mx-auto">
        <div className=" w-full h-[62px] flex z-[1] items-center justify-between mx-auto my-0 px-6 ">
          <div className="items-center justify-between">
            <ul className="flex items-center justify-center space-x-4 text-xs text-[rgb(146,146,146)] font-bold">
              <li>
                <a href="/" className="text-white text-xl font-semibold">
                  {/* My Website */}
                  <Image
                    alt="icon"
                    src={imageContent}
                    className="opacity-1 w-[100px]"
                  />
                </a>
              </li>
              <li>
                <a href="/" className=" hover:text-white">
                  COLLECTIONS
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  ACTIVITY
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  AIRDROP
                </a>
              </li>
            </ul>
          </div>

          {/* SearchBar */}
          <div
            className="flex 
            items-center 
            justify-end 
            flex-row 
            gap-4 
            flex-1 
            relative 
            pr-4
            "
          />
          <SearchInput />
          {/* ConnectWallet */}
          <div
            className="flex 
            items-center 
            justify-end 
            flex-row 
            gap-4 
            flex-1 
            relative 
            pr-4
            "
          />
          <ConnectWallet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
