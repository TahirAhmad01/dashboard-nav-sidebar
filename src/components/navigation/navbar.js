import React from "react";
import LeftDrawer from './leftDrawer';

export default function Navbar({ setSidebar, isOpen }) {
  const toggleSidebar = () => {
    setSidebar(!isOpen);
  };

  return (
    <>
      <div className="h-16 bg-neutral-200 w-full ">
        <button onClick={toggleSidebar}>Sidebar toggle</button>
        <LeftDrawer isOpen={isOpen} setSidebar={setSidebar}/>
      </div>
    </>
  );
}
