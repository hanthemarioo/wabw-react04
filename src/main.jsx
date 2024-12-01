
import "./index.css";

// AdminLTE dan Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "admin-lte/dist/css/adminlte.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "admin-lte/dist/js/adminlte.min";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Halaman Login
import Login from "./pages/Admin/Login.jsx";
import LoginSiswa from "./pages/Siswa/LoginSiswa.jsx";
import LoginDosen from "./pages/Dosen/LoginDosen.jsx";

// Import Admin
import Dashboard from "./pages/Admin/Dashboard.jsx";
import MataPelajaran from "./pages/Admin/Pelajaran/MataPelajaran.jsx";
import TambahPelajaran from "./pages/Admin/Pelajaran/TambahPelajaran.jsx";
import Kelas from "./pages/Admin/Kelas/Kelas.jsx";
import TambahKelas from "./pages/Admin/Kelas/TambahKelas.jsx";
import Siswa from "./pages/Admin/Siswa/Siswa.jsx";
import TambahSiswa from "./pages/Admin/Siswa/TambahSiswa.jsx";
import ImportSiswa from "./pages/Admin/Siswa/ImportSiswa.jsx";
import Dosen from "./pages/Admin/Dosen/Dosen.jsx";
import TambahDosen from "./pages/Admin/Dosen/TambahDosen.jsx";
import ImportDosen from "./pages/Admin/Dosen/ImportDosen.jsx";
import Ujian from "./pages/Admin/Ujian/Ujian.jsx";
import DetailSoalUjian from "./pages/Admin/Ujian/DetailSoalUjian.jsx";
import SesiUjian from "./pages/Admin/Ujian/SesiUjian.jsx";
import LaporanUjian from "./pages/Admin/Ujian/LaporanUjian.jsx";

// Import Siswa
import DashboardSiswa from "./pages/Siswa/DashboardSiswa.jsx";
import KonfirmasiUjian from "./pages/Siswa/KonfirmasiUjian.jsx";
import UjianSiswa from "./pages/Siswa/UjianSiswa.jsx";
import UjianSelesai from "./pages/Siswa/UjianSelesai.jsx";

// Import Dosen
import DashboardDosen from "./pages/Dosen/Dashboard.jsx";

// Import Layouts
import MainLayout from "./components/Admin/MainLayout.jsx";

// Import Header Siswa
import HeaderSiswa from "./components/Siswa/HeaderSiswa.jsx";

// Import Layouts Dosen
import MainLayoutDosen from "./components/Dosen/MainLayout.jsx";
import UjianDosen from "./pages/Dosen/Ujian/Ujian.jsx";
import DetailSoalUjianDosen from "./pages/Dosen/Ujian/DetailSoalUjian.jsx";
import SesiUjianDosen from "./pages/Dosen/Ujian/SesiUjian.jsx";
import LaporanUjianDosen from "./pages/Dosen/Ujian/LaporanUjian.jsx";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Halaman Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/login-siswa" element={<LoginSiswa />} />
        <Route path="/login-dosen" element={<LoginDosen />} />

        {/* Halaman dengan MainLayout untuk Admin */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/mata-pelajaran" element={<MataPelajaran />} />
                <Route path="/tambah-pelajaran" element={<TambahPelajaran />} />
                <Route path="/kelas" element={<Kelas />} />
                <Route path="/tambah-kelas" element={<TambahKelas />} />
                <Route path="/siswa" element={<Siswa />} />
                <Route path="/tambah-siswa" element={<TambahSiswa />} />
                <Route path="/import-siswa" element={<ImportSiswa />} />
                <Route path="/dosen" element={<Dosen />} />
                <Route path="/tambah-dosen" element={<TambahDosen />} />
                <Route path="/import-dosen" element={<ImportDosen />} />
                <Route path="/ujian" element={<Ujian />} />
                <Route
                  path="/detail-soal-ujian"
                  element={<DetailSoalUjian />}
                />
                <Route path="/sesi-ujian" element={<SesiUjian />} />
                <Route path="/laporan-ujian" element={<LaporanUjian />} />
              </Routes>
            </MainLayout>
          }
        />

        {/* Halaman Siswa */}
        <Route path="/siswa/dashboard" element={ <> <HeaderSiswa /> <DashboardSiswa /> </>}/>
        <Route path="/siswa/konfirmasi-ujian" element={ <> <HeaderSiswa /> <KonfirmasiUjian /> </>}/>
        <Route path="/siswa/ujian-siswa" element={ <> <HeaderSiswa /> <UjianSiswa /> </>}/>
        <Route path="/siswa/ujian-selesai" element={ <> <HeaderSiswa /> <UjianSelesai /> </>}/>
        
        {/* Halaman Dosen */}
        <Route path="/dosen/dashboard" element={ <> <MainLayoutDosen/> <DashboardDosen /> </>}/>
        <Route path="/dosen/ujian" element={<> <MainLayoutDosen/> <UjianDosen /> </>} />
        <Route
          path="/dosen/detail-soal-ujian"
          element={<> <MainLayoutDosen/> <DetailSoalUjianDosen /> </>}
        />
        <Route path="/dosen/sesi-ujian" element={<> <MainLayoutDosen/> <SesiUjianDosen /> </>} />
        <Route path="/dosen/laporan-ujian" element={<> <MainLayoutDosen/> <LaporanUjianDosen /> </>} />
        
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
