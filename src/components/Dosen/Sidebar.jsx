import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink untuk mengelola kelas aktif

const Sidebar = () => {
  return (
    <aside className="main-sidebar">
      {/* Brand Logo */}
      <a href="/" className="brand-link text-center align-center">
        <span className="brand-text font-weight-light">
          <i className="fas fa-graduation-cap"></i> UJIAN ONLINE
        </span>
      </a>

      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar Menu */}
        <nav className="mt-4">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false">
              
            {/* Dashboard */}
            <li className="nav-item">
              <NavLink
                to="/dosen/dashboard"
                className="nav-link"
                activeClassName="active"
                exact>
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>

            {/* Ujian */}
            <li className="nav-item">
              <NavLink
                to="/dosen/ujian"
                className="nav-link"
                activeClassName="active">
                <i className="nav-icon fas fa-user-edit"></i>
                <p>Ujian</p>
              </NavLink>
            </li>

            {/* Sesi Ujian */}
            <li className="nav-item">
              <NavLink
                to="/dosen/sesi-ujian"
                className="nav-link"
                activeClassName="active">
                <i className="nav-icon fas fa-edit"></i>
                <p>Sesi Ujian</p>
              </NavLink>
            </li>

            {/* Laporan Nilai */}
            <li className="nav-item">
              <NavLink
                to="/dosen/laporan-ujian"
                className="nav-link"
                activeClassName="active">
                <i className="nav-icon fas fa-copy"></i>
                <p>Laporan Nilai</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
