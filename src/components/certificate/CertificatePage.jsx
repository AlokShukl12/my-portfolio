// src/components/certificate/CertificatePage.jsx
import { useState } from "react";
import CertificateCard from "./CertificateCard";  // Importing the CertificateCard component
import "./Certificate.scss";  // Importing the SCSS file for styles

const CertificatePage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    { id: 1, title: "Cloud Computing(NPTEL)", img: "/nptel.jpg", description: "Advance cloud computing" },
    { id: 2, title: "Indian Space Lab", img: "/isl1.jpg", description: "Indian Space Lab" },
    { id: 3, title: "Government Internship", img: "/government.jpg", description: "Based on frontend developer" },
    { id: 4, title: "Workshop", img: "/vitInternship.jpg", description: "It's all about workshop" },
    { id: 5, title: "Java", img: "/java.jpg", description: "Advance Java" },
    { id: 6, title: "Data Science Certification", img: "/dataScienceClub.jpg", description: "Data Science and ML..." },
    
    { id: 7, title: "Coursera Certificate", img: "/ibm.jpg", description: "Data Science and ML..." },
    { id: 8, title: "Coincent Certificate", img: "/coincent.jpg", description: "Certificate" },
    { id: 9, title: "Postman API", img: "/postman.jpg", description: "Related to API " },
    
    
  ];

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleClose = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="certificate-page">
      <div className="certificate-cards">
        {certificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            onClick={handleCertificateClick}
          />
        ))}
      </div>

      {selectedCertificate && (
        <div className="certificate-modal">
          <div className="certificate-content">
            <button className="close-btn" onClick={handleClose}>X</button>
            <h2>{selectedCertificate.title}</h2>
            <img src={selectedCertificate.img} alt={selectedCertificate.title} />
            <p>{selectedCertificate.description}</p>
          </div>
        </div>
      )}
    </div>
  );
   
};

export default CertificatePage;
