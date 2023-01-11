import React from "react";

export default function LeftDrawer({ isOpen }) {
  return (
    <>
      {isOpen && (
        <div className="absolute w-72 h-full bg-red-500 left-0 top-0"></div>
      )}
    </>
  );
}
