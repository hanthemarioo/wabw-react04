import React from "react";

const ImportSiswa = () => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Import Siswa</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-header">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.history.back()}
            >
              Kembali
            </button>
            <button className="btn btn-success mx-2">Contoh Format</button>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="fileExcel">File Excel</label>
                <div className="custom-file">
                  <label htmlFor="fileExcel" className="custom-file-label">
                    Pilih file
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="fileExcel"
                    accept=".xlsx, .xls"
                  />
                </div>
                <small className="form-text text-muted">
                  Pastikan file yang diunggah memiliki format Excel yang sesuai.
                </small>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">
                  Simpan
                </button>
                <button type="reset" className="btn btn-warning">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportSiswa;
