import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Chip } from "@heroui/chip";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import { Modal, ModalContent } from "@heroui/modal";
import projectsData from "../../components/projects.json";
import { projectImageArrays } from "../../config/assetUrls";
import ImageSkeleton from "../../components/skeleton/ImageSkeleton";
import "./project.css";
import Masonry from "react-masonry-css";

const images = projectImageArrays;

const Project = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [imageLoading, setImageLoading] = useState({});
  const [modalImageLoading, setModalImageLoading] = useState({});
  const navigate = useNavigate();

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
    const modalImages = images[project.image] || [];
    const initialModalLoading = {};
    modalImages.forEach((_, idx) => {
      initialModalLoading[`${project.id}-${idx}`] = true;
    });
    setModalImageLoading(initialModalLoading);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
    setPreviewImage(null);
  };

  const handleImageClick = (image) => {
    setPreviewImage(image);
  };

  const handleImageLoad = (projectId) => {
    setImageLoading((prev) => ({ ...prev, [projectId]: false }));
  };

  const handleImageError = (projectId) => {
    setImageLoading((prev) => ({ ...prev, [projectId]: false }));
  };

  // Initialize loading state for all projects
  React.useEffect(() => {
    const initialLoadingState = {};
    projectsData.forEach((project) => {
      initialLoadingState[project.id] = true;
    });
    setImageLoading(initialLoadingState);
  }, []);

  return (
    <div className="min-h-screen w-full py-8 px-4 sm:px-6 lg:px-8  from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-fontDark mb-4">
            All Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and creative solutions across various
            technologies
          </p>
        </div>
        {/* Masonry Grid */}
        <Masonry
          breakpointCols={{
            default: 4,
            1280: 4,
            1024: 3,
            768: 2,
            0: 1,
          }}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {projectsData.map((project) => {
            const projectImages = images[project.image];
            const thumbnail = projectImages ? projectImages[0] : "";
            const isLoading = imageLoading[project.id] !== false;

            return (
              <div
                key={project.id}
                className="masonry-item relative group hover-lift overflow-hidden rounded-xl cursor-pointer shadow-lg"
                onClick={() => handleOpen(project)}
                data-aos="fade-up"
                data-aos-delay={project.id * 100}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  {isLoading && (
                    <div
                      className={`${
                        project.id % 3 === 0
                          ? "h-80"
                          : project.id % 3 === 1
                          ? "h-64"
                          : "h-96"
                      } w-full animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl"></div>
                    </div>
                  )}
                  <img
                    src={thumbnail}
                    alt={project.title}
                    className={`image-zoom ${
                      project.id % 3 === 0
                        ? "h-80"
                        : project.id % 3 === 1
                        ? "h-64"
                        : "h-96"
                    } w-full object-cover ${isLoading ? "hidden" : ""}`}
                    onLoad={() => handleImageLoad(project.id)}
                    onError={() => handleImageError(project.id)}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Project Info Overlay */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out"
                    style={{
                      transform: "translateY(100%)",
                      transition: "transform 0.5s ease-out",
                    }}
                  >
                    <h3
                      className="text-xl font-bold mb-2 text-white"
                      style={{
                        opacity: 0,
                        transition: "opacity 0.3s ease 0.1s",
                      }}
                    >
                      {project.title}
                    </h3>
                    {/* Removed description from hover overlay */}
                    <div
                      className="flex items-center justify-between"
                      style={{
                        opacity: 0,
                        transition: "opacity 0.3s ease 0.3s",
                      }}
                    >
                      {/* <span className="text-xs font-medium bg-indigo-600/80 px-2 py-1 rounded-full">
                        {project.role}
                      </span> */}
                      <div className="flex gap-1">
                        {project.techStack.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Click Indicator */}
                  <div className="absolute top-4 right-4 glass-effect text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pulse-animation">
                    Click to view
                  </div>
                </div>
              </div>
            );
          })}
        </Masonry>

        <Modal
          isOpen={open}
          size="4xl"
          placement="center"
          scrollBehavior="inside"
          onClose={handleClose}
          className="flex items-center justify-center p-4"
        >
          <ModalContent className=" p-4 ">
            {selectedProject && (
              <>
                <h2 className="text-2xl font-bold mb-4 text-center text-indigo-500">
                  {selectedProject.title}
                </h2>
                <p className="mb-4 text-sm ">{selectedProject.description}</p>
                {/* Add role and tech stack in modal */}
                <div className="flex flex-wrap items-center gap-3 mb-4 justify-center">
                  <span className="text-xs font-medium bg-indigo-600/80 px-2 py-1 rounded-full text-white">
                    {selectedProject.role}
                  </span>
                  <div className="flex gap-1 flex-wrap">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-200 dark:bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm text-gray-800 dark:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto">
                  {(images[selectedProject.image] || []).map((img, idx) => {
                    const imageKey = `${selectedProject.id}-${idx}`;
                    const isLoading = modalImageLoading[imageKey];

                    return (
                      <div key={idx} className="relative">
                        {isLoading && (
                          <ImageSkeleton className="w-full h-40 sm:h-48" />
                        )}
                        <img
                          src={img}
                          alt={`${selectedProject.title} screenshot ${idx + 1}`}
                          className={`w-full h-40 sm:h-48 object-cover rounded-md cursor-pointer ${
                            isLoading ? "hidden" : ""
                          }`}
                          onClick={() => handleImageClick(img)}
                          onLoad={() => {
                            setModalImageLoading((prev) => ({
                              ...prev,
                              [imageKey]: false,
                            }));
                          }}
                          onError={() => {
                            setModalImageLoading((prev) => ({
                              ...prev,
                              [imageKey]: false,
                            }));
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 flex flex-row  gap-6">
                  {selectedProject.liveLink && (
                    <Button
                      as="a"
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      className="w-full sm:w-auto"
                    >
                      Live Link
                    </Button>
                  )}
                  {selectedProject.githubLink && (
                    <Button
                      color="success"
                      variant="flat"
                      size="md"
                      as="a"
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </>
            )}
          </ModalContent>
        </Modal>

        {previewImage && (
          <Modal
            isOpen={true}
            placement="center"
            size="5xl"
            onClose={() => setPreviewImage(null)}
            className="flex items-center justify-center p-4 sm:p-6"
          >
            <ModalContent className="p-4 w-full max-w-lg sm:max-w-xl mx-auto">
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-auto rounded-md"
              />
            </ModalContent>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Project;
