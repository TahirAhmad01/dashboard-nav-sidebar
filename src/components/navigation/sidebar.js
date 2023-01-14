import React from "react";

export default function Sidebar({ isOpen }) {
  return (
    <>
      <div
        className={` bg-white duration-500 ${
          isOpen ? "w-80" : "w-20"
        } hidden md:block`}
      >
        <div className="logo text-3xl h-16 bg-gray-50 flex items-center px-4">
          {isOpen ? "Qubartech" : "Q"}
        </div>

        <div className="overflow-x-auto h-[calc(100%-4.4rem)] scrollbar scrollbar-track-transparent scrollbar-hidden hover:scrollbar-auto hover:scrollbar-auto_width-x-1 m-1">
          {/*  */}
        </div>
      </div>
    </>
  );
}
