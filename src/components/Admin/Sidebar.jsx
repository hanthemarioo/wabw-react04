import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink untuk mengelola kelas aktif

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-white bg-blue elevation-4">
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
            data-accordion="false"
          >
            {/* Dashboard */}
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                exact
              >
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>

            {/* Mata Pelajaran */}
            <li className="nav-item">
              <NavLink
                to="/mata-pelajaran"
                className="nav-link"
                activeClassName="active"
              >
                <i className="nav-icon fas fa-book"></i>
                <p>Mata Pelajaran</p>
              </NavLink>
            </li>

            {/* Kelas */}
            <li className="nav-item">
              <NavLink
                to="/kelas"
                className="nav-link"
                activeClassName="active"
              >
                <i className="nav-icon fas fa-school"></i>
                <p>Kelas</p>
              </NavLink>
            </li>

            {/* Siswa */}
            <li className="nav-item">
              <NavLink
                to="/siswa"
                className="nav-link"
                activeClassName="active"
              >
                <i className="nav-icon fas fa-user-friends"></i>
                <p>Siswa</p>
              </NavLink>
            </li>

            {/* Dosen */}
            <li className="nav-item">
              <NavLink
                to="/dosen"
                className="nav-link"
                activeClassName="active"
              >
                <i className="nav-icon fas fa-user-friends"></i>
                <p>Dosen</p>
              </NavLink>
            </li>

            {/* Ujian */}
            <li className="nav-item">
              <NavLink
                to="/ujian"
                className="nav-link"
                activeClassName="active"
              >
                <i className="nav-icon fas fa-user-edit"></i>
                <p>Ujian</p>
              </NavLink>
            </li>

            {/* Sesi Ujian */}
            <li className="nav-item">
              <NavLink
                to="/sesi-ujian"
                className="nav-link"
                activeClassName="active"
              >
                <i className="nav-icon fas fa-edit"></i>
                <p>Sesi Ujian</p>
              </NavLink>
            </li>

            {/* Laporan Nilai */}
            <li className="nav-item">
              <NavLink
                to="/laporan-ujian"
                className="nav-link"
                activeClassName="active"
              >
                <i className="nav-icon fas fa-copy"></i>
                <p>Laporan Nilai</p>
              </NavLink>
            </li>

            {/* Login */}
            {/* <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-link"
                activeClassName="active"
              >
                <i className="nav-icon fas fa-sign-in-alt"></i>
                <p>Login</p>
              </NavLink>
            </li> */}

            {/* Login Siswa */}
            {/* <li className="nav-item">
              <NavLink
                to="/login-siswa"
                className="nav-link"
                activeClassName="active"
              >
                <i className="nav-icon fas fa-sign-in-alt"></i>
                <p>Login Siswa</p>
              </NavLink>
            </li> */}
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
