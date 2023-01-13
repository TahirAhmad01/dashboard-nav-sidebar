import React, { useState } from "react";
import useWindowDimensions from "./../hook/getWindowDimensions";
import LeftDrawer from "./navigation/leftDrawer";
import Navbar from "./navigation/navbar";
import Sidebar from "./navigation/sidebar";

export default function Layout({ children }) {
  const { width } = useWindowDimensions();
  const [isSidebarOpen, setSidebarOpen] = useState(width > 768);

  return (
    <>
      <div className="bg-gray-300 h-screen overflow-hidden flex relative">
        <Sidebar isOpen={isSidebarOpen} />

        <div className="w-full overflow-x-auto">
          <Navbar setSidebar={setSidebarOpen} isOpen={isSidebarOpen} />
          <LeftDrawer setSidebar={setSidebarOpen} isOpen={isSidebarOpen} />
          {children}
        </div>
      </div>
    </>
  );
}
