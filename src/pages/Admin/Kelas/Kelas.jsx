import React from "react";
import kelas from '../../../data/kelas.json';

const Kelas = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Kelas</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <a href="/tambah-kelas" type="button" className="btn btn-primary">
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
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <thead className="bg-primary">
                <tr>
                  <th style={{ width: "10%" }}>No.</th>
                  <th>Nama Kelas</th>
                  <th style={{ width: "15%" }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {kelas.map((value, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{value}</td>
                    <td>
                      <button className="btn btn-sm btn-info mr-2">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="btn btn-sm btn-danger">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default Kelas;
