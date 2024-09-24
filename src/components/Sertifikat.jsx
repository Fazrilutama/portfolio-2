import React, { useState } from "react";

// Komponen Modal untuk menampilkan gambar fullscreen
const ImageModal = ({ imageSrc, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative w-full h-full flex justify-center items-center">
        <img
          src={imageSrc}
          alt="Full screen"
          className="object-contain max-w-full max-h-full"
        />
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white text-3xl"
        >
          ⛔
        </button>
      </div>
    </div>
  );
};

// Komponen Header untuk judul halaman
const Header = ({ title }) => (
  <h1
    data-aos="zoom-out"
    className="text-3xl font-bold py-5 text-white border-b-4 border-yellow-500 text-center mx-auto"
  >
    {title}
  </h1>
);

// Komponen CertificateCard untuk menampilkan kartu sertifikat
const CertificateCard = ({ imgSrc, altText, title, onClick }) => (
  <div data-aos="zoom-in" className="m-5 bg-[#1f1f1f] rounded-2xl">
    <img
      src={imgSrc}
      alt={altText}
      className="rounded-3xl cursor-pointer"
      onClick={onClick}
    />
    <h2 className="text-center text-white font-bold py-3">{title}</h2>
  </div>
);

// Komponen Sertifikat untuk menampilkan daftar gambar sertifikat
const Sertifikat = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  const certificates = [
    {
      imgSrc: "/img/lontarlab.jpeg",
      altText: "LontarLab",
      title: "Tes Ujikom PT Lontarlab",
    },
    {
      imgSrc: "/img/sawala.jpeg",
      altText: "Sawala",
      title: "Tes Ujikom PT Lontarlab",
    },
    {
      imgSrc: "/img/alibaba.png",
      altText: "alibaba setifikat",
      title: "Sertifikat Developer Alibaba",
    },
    {
      imgSrc: "/img/fe-dicoding.jpg",
      altText: "Frontend Web Development Dicoding",
      title: "Sertifikat FE Dicoding",
    },
    {
      imgSrc: "/img/js-dicoding.jpg",
      altText: "Javascript Dicoding",
      title: "Sertifikat Javascript Dicoding",
    },
    {
      imgSrc: "/img/js-codepolitan.jpg",
      altText: "Javascript Codepolitan",
      title: "Sertifikat Javascript Codepolitan",
    },
    {
      imgSrc: "/img/js-myskill.jpg",
      altText: "Javascript MySkill",
      title: "Sertifikat Javascript MySkill",
    },
    {
      imgSrc: "/img/react-myskil.jpg",
      altText: "React JS MySkill",
      title: "Sertifikat React MySkill",
    },
    {
      imgSrc: "/img/react-Codepolitan.jpg",
      altText: "React JS Codepolitan",
      title: "Sertifikat React Codepolitan",
    },
    {
      imgSrc: "/img/state-Codepolitan.jpg",
      altText: "State Management Codepolitan",
      title: "Sertifikat State Management Codepolitan",
    },
    {
      imgSrc: "/img/webDasar-dicoding.jpg",
      altText: "Web Dasar Dicoding",
      title: "Sertifikat Web Dasar Dicoding",
    },
  ];

  return (
    <div className="bg-[#0c0c0c]">
      <Header title="Sertifikat" />
      <div className="container mx-auto" id="Sertifikat">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 py-20">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              imgSrc={cert.imgSrc}
              altText={cert.altText}
              title={cert.title}
              onClick={() => handleImageClick(cert.imgSrc)}
            />
          ))}
        </div>
      </div>
      <ImageModal
        imageSrc={selectedImage}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Sertifikat;
