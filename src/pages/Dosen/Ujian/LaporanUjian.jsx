import React from "react";

const LaporanUjian = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Laporan Nilai Ujian</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content">
        <div className="container-fluid">
          {/* Filter Section */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-filter"></i> Filter Nilai Ujian
              </h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <label htmlFor="ujian">Ujian</label>
                    <select className="form-control" id="ujian">
                      <option>
                        Ujian Tengah Semester (UTS) - Kelas: Teknik Informatika
                        - A - Pelajaran: Matematika
                      </option>
                      {/* Add other options here */}
                    </select>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-end">
                  <button className="btn btn-primary w-100">
                    <i className="fas fa-search"></i> Filter
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Report Section */}
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h3 className="card-title">
                <i className="fas fa-table"></i> Laporan Nilai Ujian
              </h3>
              <button className="btn btn-success">
                <i className="fas fa-file-excel"></i> Download Excel
              </button>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-striped">
                <thead className="bg-primary">
                  <tr>
                    <th style={{ width: "5%" }}>No.</th>
                    <th>Ujian</th>
                    <th>Sesi</th>
                    <th>Nama Siswa</th>
                    <th>Kelas</th>
                    <th>Pelajaran</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ujian Tengah Semester (UTS)</td>
                    <td>Sesi 2</td>
                    <td>Grahadrian Deandratisna</td>
                    <td>Teknik Informatika - A</td>
                    <td>Matematika</td>
                  </tr>
                  {/* Add other rows here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaporanUjian;
