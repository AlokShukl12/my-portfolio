// src/components/certificate/CertificateCard.jsx
import { motion } from "framer-motion";  // If you're using animations like framer-motion

const CertificateCard = ({ certificate, onClick }) => {
  return (
    <motion.div
      className="certificate-card"
      onClick={() => onClick(certificate)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={certificate.img} alt={certificate.title} />
      <h3>{certificate.title}</h3>
    </motion.div>
  );
};

export default CertificateCard;
