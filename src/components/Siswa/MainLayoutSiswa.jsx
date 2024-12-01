import React from "react";
import HeaderSiswa from "./HeaderSiswa.jsx"; // Header siswa tetap dipisah untuk modularitas.
import { Outlet } from "react-router-dom";

const MainLayoutSiswa = () => {
  return (
    <div className="wrapper">
      {/* Header Siswa */}
      <HeaderSiswa />

      {/* Konten Utama */}
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayoutSiswa;
