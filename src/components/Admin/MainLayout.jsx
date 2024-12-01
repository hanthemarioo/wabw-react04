import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
        {children}
    </div>
  );
};

export default MainLayout;
