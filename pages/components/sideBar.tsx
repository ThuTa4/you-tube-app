import React from "react";
import { sideBarlist } from "../../static/sideBarList";
import Link from "next/link";

interface sideBarItemsType {
  name: string;
  icon: any;
  src: string;
}

export default function SideBar() {
  return (
    <div className=" w-[300px] h-full  bg-[#0F0F0F] p-[15px]">
      {sideBarlist.map((sideBarItems: sideBarItemsType, index: number) => (
        <Link
          key={index}
          className="flex flex-row items-center justify-start w-full h-[40px] hover:bg-[#de3c3c] rounded-xl cursor-pointer  mb-[30px]"
          href={`${sideBarItems.src}`}
        >
          <div className="px-[10px]">{sideBarItems.icon}</div>
          <div className="pl-[20px]">{sideBarItems.name}</div>
        </Link>
      ))}
    </div>
  );
}
