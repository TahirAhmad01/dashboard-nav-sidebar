import React from "react";
import Navbar from './navbar';
import Sidebar from './sidebar';

export default function Navigation() {
  return (
    <>
      <div>
        <Navbar/>
        <Sidebar />
      </div>
    </>
  );
}
