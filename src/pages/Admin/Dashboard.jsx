import React from "react";
import kelas from '../../data/kelas.json';
import siswa from '../../data/siswa.json';
import mataPelajaran from '../../data/mataPelajaran.json';

const Dashboard = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Dashboard</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* Card for Kelas */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-white">
                <div className="inner">
                  <p>Kelas</p>
                  <h3>{kelas.length}</h3>
                </div>
                <div className="icon">
                  <i className="fas fa-school"></i>
                </div>
              </div>
            </div>
            {/* Card for Siswa */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-white">
                <div className="inner">
                  <p>Siswa</p>
                  <h3>{siswa.length}</h3>
                </div>
                <div className="icon">
                  <i className="fas fa-users"></i>
                </div>
              </div>
            </div>
            {/* Card for Ujian */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-white">
                <div className="inner">
                  <p>Ujian</p>
                  <h3>{mataPelajaran.length}</h3>
                </div>
                <div className="icon">
                  <i className="fas fa-edit"></i>
                </div>
              </div>
            </div>
            {/* Card for Sesi Ujian */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-white">
                <div className="inner">
                  <p>Sesi Ujian</p>
                  <h3>2</h3>
                </div>
                <div className="icon">
                  <i className="fas fa-clock"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
