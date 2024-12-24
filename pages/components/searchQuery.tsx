import React, { SetStateAction } from "react";

interface Props {
  query: string;
  getSearchValues: string[];
  setSearchValues: React.Dispatch<SetStateAction<string[]>>;
}

function SearchQuery({ query, getSearchValues, setSearchValues }: Props) {
  return (
    <div className="h-[30px]  flex justify-between px-[20px] font-bold hover:bg-[#a9aaac36] transition-all duration-[0.1s] ">
      <span>{query}</span>
      <span
        onClick={() => {
          setSearchValues(getSearchValues.filter((value) => value !== query));
        }}
        className=" underline text-[#3DA6FF] cursor-pointer"
      >
        Remove
      </span>
    </div>
  );
}

export default SearchQuery;
