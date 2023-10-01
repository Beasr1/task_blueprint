"use client";

//import qs from "query-string";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

//import useDebounce from "@/hooks/useDebounce";
import Input from "./Input";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  //const debouncedValue = useDebounce(value, 500);

  /*
  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [debouncedValue, router]);*/

  return (
    <div
      className="
      flex justify-center items-center
      w-6/12
      h-full 
      text-[rgb(217,217,217)] 
      border rounded pl-10 rounded-bl rounded-br border-solid border-[rgb(48,48,48)]
      bg-background_color gap-2 m-[6px]
      max-w-[600px]
    "
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        {/* <div>
          <div name="magnifying-glass" className="w-6 h-6">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.2 0H9.6V1.6H3.2V0ZM1.6 3.2V1.6H3.2V3.2H1.6ZM1.6 9.6H0V3.2H1.6V9.6ZM3.2 11.2H1.6V9.6H3.2V11.2ZM9.6 11.2V12.8H3.2V11.2H9.6ZM11.2 9.6H9.6V11.2H11.2V12.8H12.8V14.4H14.4V16H16V14.4H14.4V12.8H12.8V11.2H11.2V9.6ZM11.2 3.2H12.8V9.6H11.2V3.2ZM11.2 3.2V1.6H9.6V3.2H11.2Z"
              />
            </svg>
          </div>
        </div> */}
      </div>
      <Input
        placeholder="Collections, wallets"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
