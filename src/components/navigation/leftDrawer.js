import React from "react";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import useWindowDimensions from "./../../hook/getWindowDimensions";

export default function LeftDrawer({ isOpen, setSidebar }) {
  const { width } = useWindowDimensions();

  return (
    <>
      <div
        className={` absolute w-full h-full bg-black/50 left-0 top-0 md:hidden ${
          isOpen ? "opacity-100 z-[999]" : "opacity-0 -z-[999] duration-700"
        } `}
      >
        <div className="relative w-full h-full bg-transparent left-0 top-0">
          {/* {isOpen && width < 768 && ( */}
          <OutsideClickHandler
            onOutsideClick={() => {
              setSidebar(isOpen && width < 768 ? false : isOpen);
            }}
          >
            <div
              className={`absolute  h-full bg-white duration-700 w-72 ${
                isOpen ? "left-0" : "-left-72"
              }`}
            >
              {/* menuList */}
              <div className="logo text-3xl h-16 bg-gray-50 flex items-center px-4">
                {isOpen ? "Qubartech" : "Q"}
              </div>
              <div className="overflow-x-auto h-[calc(100%-3.5rem)]">
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
                <div>ghgh</div>
              </div>
            </div>
          </OutsideClickHandler>
          {/* )} */}
        </div>
      </div>
    </>
  );
}
