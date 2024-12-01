import React from "react";

const UjianSelesai = () => {
  return (
    <div className="px-5">
      {/* Header */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>
                <i className="fas fa-graduation-cap mr-2"></i> Ujian Selesai
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th style={{ width: "30%" }}>NISN</th>
                    <td>3123512914</td>
                  </tr>
                  <tr>
                    <th>Nama Lengkap</th>
                    <td>Hanrianang Damario</td>
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
                    <th>Mulai Mengerjakan</th>
                    <td>2024-11-28 22:50:00</td>
                  </tr>
                  <tr>
                    <th>Selesai Mengerjakan</th>
                    <td>2024-11-28 22:54:07</td>
                  </tr>
                  <tr>
                    <th>Jumlah Benar</th>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th>Nilai</th>
                    <td>90.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UjianSelesai;
