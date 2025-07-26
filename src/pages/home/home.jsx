import React, { useState, useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Button from "../../components/button/button";
import { SiLeetcode } from "react-icons/si";
import { Modal, ModalContent } from "@heroui/modal";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./home.css";
import { otherAssets } from "../../config/assetUrls";

const Home = () => {
  const words = ["Developer", "Freelancer"];
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Priyadarshan-B/",
      color: "hover:text-green-600 dark:hover:text-green-400",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/priyan1808",
      color: "hover:text-blue-500 dark:hover:text-blue-300",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/_priyan_2004?igsh=N3V6anY5NjRsazAz",
      color: "hover:text-pink-500 dark:hover:text-pink-300",
    },
    {
      icon: <SiLeetcode />,
      href: "https://leetcode.com/u/priyan18824/",
      color: "hover:text-orange-500 dark:hover:text-orange-300",
    },
  ];

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar: (Toolbar) => (
      <Toolbar>
        {(slots) => (
          <div className="custom-toolbar flex items-center space-x-2">
            {slots.CurrentPageInput && <slots.CurrentPageInput />}
            {slots.NumberOfPages && <slots.NumberOfPages />}
            {slots.Zoom && <slots.Zoom />}
          </div>
        )}
      </Toolbar>
    ),
  });

  useEffect(() => {
    const typeSpeed = 100;
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = otherAssets.cv;
    link.download = "Priyan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full w-full px-24 text-center md:text-left">
      <div className="mb-6 md:mb-0 md:w-1/2">
        <h1
          className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-fontDark"
          data-aos="fade-right"
        >
          Hi, I am Priyadarshan
          <br />
          <span className="txt font-medium text-indigo-600 dark:text-indigo-400">
            {currentWord}
          </span>
          <span className="blink text-indigo-600 dark:text-indigo-400 animate-blink">
            |
          </span>
        </h1>
        <p
          className="mt-4 text-lg text-gray-600 dark:text-smallFontDark"
          data-aos="fade-right"
        >
          <span className="font-semibold text-2xl text-indigo-600 dark:text-indigo-400">
            MERN
          </span>{" "}
          stack developer and{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400 text-2xl">
            DevOps
          </span>{" "}
          enthusiast
        </p>
        <div data-aos="fade-up">
          <Button className="mt-6 px-6 py-3" onClick={openModal}>
            Download CV
          </Button>
        </div>
        <div
          className="mt-6 p-6 rounded-lg flex flex-no-wrap gap-4 justify-center"
          data-aos="fade-down"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-fontDark ${link.color} hover:bg-gray-100 dark:hover:bg-gray-700 transition transform duration-200`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="md:w-1/2 flex justify-center md:space-x-4"
      >
        <div className="wave-container">
          <div className="wave-animation"></div>
          <div className={`image-wrapper ${imageLoaded ? "image-loaded" : ""}`}>
            <img
              src={otherAssets.profileImage}
              alt="photo"
              className="image-container cursor-pointer"
              onLoad={handleImageLoad}
            />
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent>
          <div className="modal-container bg-white dark:bg-gray-900 p-4 rounded-lg">
            <div className="modal-viewer">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl={otherAssets.cv} />
              </Worker>
            </div>
            <Button className="mt-4 px-4 py-2" onClick={downloadPDF}>
              Download
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Home;
