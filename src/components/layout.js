import React, { useState } from "react";
import Navbar from "./navigation/navbar";
import Sidebar from "./navigation/sidebar";

export default function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className="bg-gray-300 h-screen overflow-hidden flex relative">
        <Sidebar isOpen={isSidebarOpen} />

        <div className="w-full overflow-x-auto">
          <Navbar setSidebar={setSidebarOpen} isOpen={isSidebarOpen} />
          <div>hi how are you</div>
          <div className="flex items-center justify-center">center</div>
        </div>
      </div>
    </>
  );
}
