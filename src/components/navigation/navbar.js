import React from "react";

export default function Navbar({ setSidebar, isOpen }) {
  const toggleSidebar = () => {
    setSidebar(!isOpen);
  };

  return (
    <>
      <div className="h-16 bg-neutral-200 w-full flex items-center px-7">
        <button onClick={toggleSidebar} className="hover:text-gray-900">
          <box-icon
            name="menu-alt-left"
            size="30px"
            className="text-gray-300"
          ></box-icon>
        </button>
      </div>
    </>
  );
}
