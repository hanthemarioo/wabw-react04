import React from "react";

const KonfirmasiUjian = () => {
  return (
    <div className="px-5">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <a href="/siswa" className="btn btn-primary">
                <i className="fas fa-arrow-left"></i> Kembali
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="row">
          {/* Deskripsi Ujian */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-book"></i> Deskripsi Ujian
                </h3>
              </div>
              <div className="card-body">
                <p>Ujian Tengah Semester (UTS)</p>
              </div>
            </div>
          </div>

          {/* Detail Peserta */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-user"></i> Detail Peserta
                </h3>
              </div>
              <div className="card-body">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th style={{ width: "40%" }}>NISN</th>
                      <td>23001</td>
                    </tr>
                    <tr>
                      <th>Nama Lengkap</th>
                      <td>Grahadrian Deandratisna</td>
                    </tr>
                    <tr>
                      <th>Kelas</th>
                      <td>Teknik Informatika - A</td>
                    </tr>
                    <tr>
                      <th>Ujian</th>
                      <td>Ujian Tengah Semester (UTS)</td>
                    </tr>
                    <tr>
                      <th>Mata Pelajaran</th>
                      <td>Matematika</td>
                    </tr>
                    <tr>
                      <th>Durasi</th>
                      <td>20 Menit</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center mt-3">
                  <a href="/siswa/ujian-siswa" className="btn btn-success btn-lg">
                    <i className="fas fa-play"></i> Mulai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KonfirmasiUjian;
