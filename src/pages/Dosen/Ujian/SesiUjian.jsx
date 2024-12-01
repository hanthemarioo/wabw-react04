import React from "react";

const SesiUjian = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Tambah Sesi Ujian</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div>
              <button type="button" className="btn btn-primary mr-2">
                <i className="fas fa-plus"></i> Tambah
              </button>
            </div>
            <div className="input-group" style={{ width: "500px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan kata kunci dan enter..."
              />
              <div className="input-group-append">
                <button className="btn btn-default">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <thead className="bg-primary">
                <tr>
                  <th>No.</th>
                  <th>Ujian</th>
                  <th>Sesi</th>
                  <th>Siswa</th>
                  <th>Mulai</th>
                  <th>Selesai</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <strong>Ujian Tengah Semester (UTS)</strong>
                    <br />
                    Kelas: Teknik Informatika - A
                    <br />
                    Pelajaran: Matematika
                  </td>
                  <td>Sesi 2</td>
                  <td>0</td>
                  <td>2024-08-19 22:10</td>
                  <td>2024-08-19 22:10</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <strong>Ujian Tengah Semester (UTS)</strong>
                    <br />
                    Kelas: Teknik Informatika - B
                    <br />
                    Pelajaran: Bahasa Indonesia
                  </td>
                  <td>Sesi 1</td>
                  <td>1</td>
                  <td>2024-08-19 22:10</td>
                  <td>2024-08-19 22:10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <div>
              <p className="mb-0">Showing 1 to 2 of 2 entries</p>
            </div>
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

export default SesiUjian;
