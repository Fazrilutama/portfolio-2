import React from "react";

const Sertifikat = () => {
  return (
    <div className="bg-[#0c0c0c]">
      <h1
        data-aos="zoom-out"
        className="text-3xl font-bold py-5 text-white border-b-4 border-yellow-500 text-center mx-auto "
      >
        Sertifikat
      </h1>
      <div className="container mx-auto " id="Sertifikat">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 py-20">
          <div data-aos="zoom-in" className="m-5 bg-[#1f1f1f] rounded-2xl">
            <img
              src="/img/lontarlab.jpeg"
              alt="LontarLab"
              className=" rounded-3xl"
            />
            <h2 className="text-center text-white font-bold py-3">
              Tes Ujikom PT Lontarlab
            </h2>
          </div>
          <div data-aos="zoom-in" className="m-5 bg-[#1f1f1f] rounded-2xl">
            <img src="/img/sawala.jpeg" alt="Sawala" className=" rounded-3xl" />
            <h2 className="text-center text-white font-bold py-3">
              Tes Ujikom PT Lontarlab
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sertifikat;
