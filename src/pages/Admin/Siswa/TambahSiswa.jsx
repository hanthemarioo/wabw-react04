import React from "react";
import kelas from '../../../data/kelas.json';

const TambahSiswa = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Tambah Siswa</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-header">
            <button className="btn btn-sm btn-secondary">
              <i className="fas fa-arrow-left"></i> Kembali
            </button>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="nis">NISN</label>
                    <input
                      type="text"
                      id="nis"
                      className="form-control"
                      placeholder="Masukkan NISN Siswa"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="kelas">Kelas</label>
                    <select id="kelas" className="form-control">
                      <option value="">Pilih Kelas</option>
                      {kelas.map((value) => (
                        <option value={value}>{value}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Masukkan Password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="nama">Nama Lengkap</label>
                    <input
                      type="text"
                      id="nama"
                      className="form-control"
                      placeholder="Masukkan Nama Siswa"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="jenisKelamin">Jenis Kelamin</label>
                    <select id="jenisKelamin" className="form-control">
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="L">Laki-Laki</option>
                      <option value="P">Perempuan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="konfirmasiPassword">Konfirmasi Password</label>
                    <input
                      type="password"
                      id="konfirmasiPassword"
                      className="form-control"
                      placeholder="Masukkan Konfirmasi Password"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group d-flex justify-content-between">
                <button type="reset" className="btn btn-warning">
                  Reset
                </button>
                <button type="submit" className="btn btn-primary">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TambahSiswa;
