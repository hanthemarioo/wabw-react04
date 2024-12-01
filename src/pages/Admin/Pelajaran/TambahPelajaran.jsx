import React from "react";

const TambahPelajaran = () => {
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Tambah Pelajaran</h1>
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
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="namaPelajaran">Nama Pelajaran</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="namaPelajaran"
                                    placeholder="Masukkan Nama Pelajaran"
                                />
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

export default TambahPelajaran;
