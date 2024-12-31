import { HiOutlineBars3 } from "react-icons/hi2";
import { FaYoutube } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { ChangeEvent, useState, KeyboardEvent } from "react";

import SearchQuery from "./searchQuery";
import Router from "next/router";

export default function Navber() {
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [getSearchValues, setSearchValues] = useState<string[]>([]);

  const handleEnter = () => {
    if (searchQuery !== "") {
      setSearchValues([...getSearchValues, searchQuery]);
      setSearchQuery("");
    }
  };

  console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ", onFocus);

  return (
    <div className="w-auto h-[8vh] bg-[#0F0F0F]  flex flex-row justify-between items-center px-[25px] overflow-x-hidden">
      <div className="flex flex-row items-center cursor-pointer">
        <HiOutlineBars3 className="mr-[20px] text-[26px]" />
        <div
          className="flex items-center "
          onClick={() => Router.push(`http://localhost:3000/`)}
        >
          <FaYoutube className="text-red-600 text-[30px]" />
          <span className="font-bold text-[23px] indent-0">YouTube</span>
        </div>
      </div>
      <div className="flex w-auto ">
        <div
          className={`flex items-center border-[1px] border-[#303030]  bg-[#1a1a1a] rounded-full min-w-auto max-w-[450px] `}
        >
          <input
            placeholder="Search"
            className={`bg-transparent outline-none w-[400px] p-[6px] px-[15px] border-[1px] rounded-l-full ${
              onFocus ? "border-[#1A62B9]" : "border-none"
            }`}
            type="text"
            value={searchQuery}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(e.target.value);
            }}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                handleEnter();
              }
            }}
          />
          <div className="bg-[#222222] w-[70px] h-full flex items-center justify-center border-l-[1px] border-l-[#303030] rounded-r-full relative">
            <CiSearch className="text-[23px] " />
          </div>
          {getSearchValues.length ? (
            <div className="fixed bg-[#212121] w-[500px] h-auto top-[60px] rounded-xl py-[20px] ">
              {getSearchValues.map((value: string, index: number) => (
                <SearchQuery
                  key={index}
                  query={value}
                  getSearchValues={getSearchValues}
                  setSearchValues={setSearchValues}
                />
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="flex items-center justify-center bg-[#222222] w-[40px] rounded-full ml-[15px]">
          <FaMicrophone />
        </div>
      </div>
      <div className="border-[1px] border-[#4a4b4a96] rounded-full">
        <img
          src="https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg"
          className="w-[40px] h-[40px] object-cover rounded-full"
        />
      </div>
    </div>
  );
}
