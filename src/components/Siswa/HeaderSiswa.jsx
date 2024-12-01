import React from "react";

const HeaderSiswa = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-primary">
      <div className="container-fluid d-flex justify-content-between align-items-center px-5">
        {/* Logo */}
        <div>
          <a href="/siswa" className="navbar-brand text-white">
            <i className="fas fa-graduation-cap"></i> E-UTS
          </a>
        </div>

        {/* Logout */}
        <div>
          <button
            className="btn btn-danger"
            onClick={() => {
              // Tambahkan logika logout di sini jika diperlukan
              window.location.href = "/login-siswa";
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderSiswa;
