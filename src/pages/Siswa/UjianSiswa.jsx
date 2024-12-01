import React, { useState } from "react";

const UjianSiswa = () => {
  // State untuk navigasi soal dan jawaban
  const [currentSoal, setCurrentSoal] = useState(1); // Soal yang sedang dikerjakan
  const [jawaban, setJawaban] = useState({}); // Jawaban siswa {1: "A", 2: "B", ...}

  // Soal ujian
  const soalUjian = [
    {
      nomor: 1,
      pertanyaan: "Berapakah hasil dari 2 + 2?",
      pilihan: ["4", "6", "5", "3", "2"],
      jawabanBenar: "A",
    },
    {
      nomor: 2,
      pertanyaan: "Berapakah hasil dari 3 + 3?",
      pilihan: ["5", "7", "6", "9", "10"],
      jawabanBenar: "C",
    },
    // Tambahkan soal lainnya...
  ];

  const totalSoal = soalUjian.length;

  // Fungsi untuk menangani navigasi soal
  const handleNext = () => {
    if (currentSoal < totalSoal) {
      setCurrentSoal(currentSoal + 1);
    }
  };

  const handlePrev = () => {
    if (currentSoal > 1) {
      setCurrentSoal(currentSoal - 1);
    }
  };

  // Fungsi untuk memilih jawaban
  const handleJawab = (nomor, pilihan) => {
    setJawaban({ ...jawaban, [nomor]: pilihan });
  };

  // Render pilihan jawaban
  const renderPilihan = (soal) => {
    return soal.pilihan.map((pilihan, index) => {
      const pilihanLabel = String.fromCharCode(65 + index); // A, B, C, D, E
      return (
        <div
          key={index}
          className={`btn btn-outline-primary d-block text-left ${
            jawaban[soal.nomor] === pilihanLabel ? "active" : ""
          }`}
          onClick={() => handleJawab(soal.nomor, pilihanLabel)}
        >
          {pilihanLabel}. {pilihan}
        </div>
      );
    });
  };

  return (
    <div className="p-5">
      <section className="content">
        <div className="row">
          {/* Bagian Kiri: Soal */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5>Soal No. {currentSoal}</h5>
                <span className="badge badge-primary">
                  0 jam, 19 menit, 36 detik
                </span>
              </div>
              <div className="card-body">
                <p>{soalUjian[currentSoal - 1].pertanyaan}</p>
                {renderPilihan(soalUjian[currentSoal - 1])}
                <div className="mt-3 text-right">
                  <button
                    className="btn btn-primary mr-2"
                    onClick={handlePrev}
                    disabled={currentSoal === 1}
                  >
                    Sebelumnya
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleNext}
                    disabled={currentSoal === totalSoal}
                  >
                    Selanjutnya
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Navigasi Soal */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5>Navigasi Soal</h5>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap">
                  {soalUjian.map((soal) => (
                    <button
                      key={soal.nomor}
                      className={`btn btn-sm mr-2 mb-2 ${
                        jawaban[soal.nomor]
                          ? "btn-success"
                          : currentSoal === soal.nomor
                          ? "btn-secondary"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => setCurrentSoal(soal.nomor)}
                    >
                      {soal.nomor}
                    </button>
                  ))}
                </div>
              </div>
              <div className="card-footer text-center">
                <a href="/siswa/ujian-selesai" className="btn btn-danger btn-lg">
                  Akhiri Ujian
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UjianSiswa;
