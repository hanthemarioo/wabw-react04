import React, { useState } from "react";
import mataPelajaran from '../../../data/mataPelajaran.json';

const MataPelajaran = () => {
    const data = mataPelajaran;

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        const filtered = data.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div className="wrapper">
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Mata Pelajaran</h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <a href="/tambah-pelajaran" className="btn btn-primary">
                                    <i className="fas fa-plus"></i> Tambah
                                </a>
                                <div className="float-right">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan kata kunci dan enter..."
                                        style={{ width: "500px", display: "inline-block" }}
                                        onChange={handleSearch}
                                        value={searchTerm}
                                    />
                                    <button className="btn btn-default">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead className="bg-primary">
                                        <tr>
                                            <th style={{ width: "10px" }}>No.</th>
                                            <th>Nama Mata Pelajaran</th>
                                            <th style={{ width: "150px" }}>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.length > 0 ? (
                                            filteredData.map((value, index) => (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{value}</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-primary mr-1">
                                                            <i className="fas fa-edit"></i>
                                                        </button>
                                                        <button className="btn btn-sm btn-danger">
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <li>No results found</li>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="card-footer clearfix">
                                <ul className="pagination pagination-sm m-0 float-right">
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
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MataPelajaran;
