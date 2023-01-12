import React from "react";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import useWindowDimensions from "./../../hook/getWindowDimensions";

export default function LeftDrawer({ isOpen, setSidebar }) {
  const { width } = useWindowDimensions();

  return (
    <>
      {isOpen && (
        <div className="absolute w-full h-full bg-black/50 left-0 top-0 md:hidden">
          <div
            className={`relative w-full h-full bg-transparent left-0 top-0`}
          >
            {isOpen && width < 768 && (
              <OutsideClickHandler
                onOutsideClick={() => {
                  setSidebar(false);
                }}
              >
                <div className={`absolute w-72 h-full bg-black ${
              isOpen ? "left-0 duration-200" : "-left-72"
            }`}></div>
              </OutsideClickHandler>
            )}
          </div>
        </div>
      )}
    </>
  );
}
