import React, { useState, useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { Modal } from "@mui/material";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./home.css";
import image from "../../assets/image.jpg";
import samplePDF from "../../assets/cv.pdf";

const Home = () => {
  const words = ["Developer", "Freelancer"];
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 100;
    const delayAfterWord = 500;

    const handleTyping = () => {
      const fullWord = words[wordIndex];
      if (!isDeleting) {
        setCurrentWord(fullWord.slice(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);

        if (letterIndex + 1 === fullWord.length) {
          setTimeout(() => setIsDeleting(true), delayAfterWord);
        }
      } else {
        setCurrentWord(fullWord.slice(0, letterIndex - 1));
        setLetterIndex((prev) => prev - 1);

        if (letterIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typeSpeed);

    return () => clearTimeout(typingTimer);
  }, [letterIndex, isDeleting, wordIndex]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = samplePDF;
    link.download = "Priyadarshan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full w-full px-24 text-center md:text-left">
      <div className="mb-6 md:mb-0 md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900" data-aos='fade-left'> 
          Hi, I am Priyadarshan<br />
          <span className="txt font-light">{currentWord}</span>
          <span className="blink text-blue-200 animate-blink">|</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600" data-aos='fade-right'>
          Welcome to my portfolio! I specialize in creating beautiful,
          responsive websites and web applications tailored to your needs.
        </p>
        <button
        data-aos='fade-up'
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
          onClick={openModal}
        >
          Download CV
        </button>
      </div>

      <div data-aos="fade-up" className="md:w-1/2 flex justify-center md:space-x-4">
        <div className="wave-container">
          <div className="wave-animation"></div>
          <img
            src={image}
            alt="photo"
            className="image-container"
          />
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="pdf-preview"
        aria-describedby="pdf-preview-description"
      >
        <div
          style={{
            width: "80%", 
            maxWidth: "600px",
            maxHeight: "90vh", 
            margin: "3% auto",
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
          className="modal-container"
        >
          <div style={{ overflow: "hidden", height: "100%" }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <Viewer fileUrl={samplePDF} />
            </Worker>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition self-center"
            onClick={downloadPDF}
          >
            Download
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
