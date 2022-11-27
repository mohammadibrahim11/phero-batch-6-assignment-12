import React from "react";
import { Outlet } from "react-router";
import DashBoardHeader from "../../Pages/DashBoardHeader/DashBoardHeader";
import Navbar from "../../Shared/Navbar/Navbar";

const DashBoardLayout = () => {
  return (
    <div>
      <DashBoardHeader></DashBoardHeader>
      <Outlet></Outlet>
    </div>
  );
};

export default DashBoardLayout;
