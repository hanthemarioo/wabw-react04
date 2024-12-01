import React from "react";

const Dashboard = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Dashboard</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* Card for Ujian */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-white">
                <div className="inner">
                  <p>Ujian</p>
                  <h3>2</h3>
                </div>
                <div className="icon">
                  <i className="fas fa-edit"></i>
                </div>
              </div>
            </div>
            {/* Card for Sesi Ujian */}
            <div className="col-lg-3 col-6">
              <div className="small-box bg-white">
                <div className="inner">
                  <p>Sesi Ujian</p>
                  <h3>2</h3>
                </div>
                <div className="icon">
                  <i className="fas fa-clock"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
