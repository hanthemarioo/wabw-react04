import React from "react";

const DashboardSiswa = () => {
  return (
    <div className="px-5">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Dashboard Siswa</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Ujian Tengah Semester (UTS)</h3>
          </div>
          <div className="card-body">
            <div className="alert alert-success" role="alert">
              <strong>Selamat Datang, Grahadrian Deandratisna</strong>
            </div>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Mata Pelajaran</th>
                  <td>Matematika</td>
                </tr>
                <tr>
                  <th>Kelas</th>
                  <td>Teknik Informatika - A</td>
                </tr>
                <tr>
                  <th>Sesi</th>
                  <td>Sesi 2</td>
                </tr>
                <tr>
                  <th>Mulai</th>
                  <td>2024-08-19 22:00</td>
                </tr>
                <tr>
                  <th>Selesai</th>
                  <td>2024-08-19 22:10</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center mt-3">
              <a href="/siswa/konfirmasi-ujian" className="btn btn-success btn-lg">
                <i className="fas fa-edit"></i> Kerjakan
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardSiswa;
