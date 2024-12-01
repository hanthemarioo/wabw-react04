import React from "react";

const Ujian = () => {
  return (
    <div className="content-wrapper">
      {/* Header Section */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Ujian</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content">
        <div className="card">
          {/* Card Header */}
          <div className="card-header d-flex justify-content-between align-items-center">
            <a href="/tambah-ujian" className="btn btn-primary">
              <i className="fas fa-plus"></i> Tambah
            </a>
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

          {/* Card Body */}
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <thead className="bg-primary">
                <tr>
                  <th style={{ width: "5%" }}>No.</th>
                  <th>Ujian</th>
                  <th>Pelajaran</th>
                  <th>Kelas</th>
                  <th>Jumlah Soal</th>
                  <th style={{ width: "10%" }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ujian Tengah Semester (UTS)</td>
                  <td>Matematika</td>
                  <td>Teknik Informatika - A</td>
                  <td>5</td>
                  <td>
                    <a href="/dosen/detail-soal-ujian" className="btn btn-sm btn-info mr-2">
                      <i className="fas fa-edit"></i>
                    </a>
                    <button className="btn btn-sm btn-danger">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ujian Tengah Semester (UTS)</td>
                  <td>Bahasa Indonesia</td>
                  <td>Teknik Informatika - B</td>
                  <td>5</td>
                  <td>
                    <button className="btn btn-sm btn-info mr-2">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="btn btn-sm btn-danger">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Card Footer */}
          <div className="card-footer d-flex justify-content-end">
            <nav>
              <ul className="pagination">
                <li className="page-item">
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

export default Ujian;
