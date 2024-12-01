import React from "react";

const DetailSoalUjian = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Detail Soal Ujian</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Detail Ujian</h3>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th style={{ width: "25%" }}>Nama Ujian</th>
                  <td>Ujian Akhir Semester (UAS)</td>
                </tr>
                <tr>
                  <th>Mata Pelajaran</th>
                  <td>Bahasa Indonesia</td>
                </tr>
                <tr>
                  <th>Kelas</th>
                  <td>Teknik Informatika - A</td>
                </tr>
                <tr>
                  <th>Jumlah Soal</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th>Durasi (Menit)</th>
                  <td>20 Menit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h3 className="card-title">Soal Ujian</h3>
            <div>
              <button type="button" className="btn btn-primary mr-2">
                <i className="fas fa-plus"></i> Tambah
              </button>
              <button type="button" className="btn btn-success">
                <i className="fas fa-file-import"></i> Import
              </button>
            </div>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <thead className="bg-primary">
                <tr>
                  <th style={{ width: "5%" }}>No.</th>
                  <th>Soal</th>
                  <th style={{ width: "15%" }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3" className="text-center">
                    Belum ada soal.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <nav>
              <ul className="pagination mb-0">
                <li className="page-item disabled">
                  <a href="#" className="page-link">
                    &laquo; Previous
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    Next &raquo;
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailSoalUjian;
