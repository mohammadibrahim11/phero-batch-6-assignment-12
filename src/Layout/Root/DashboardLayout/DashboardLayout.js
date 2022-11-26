import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
