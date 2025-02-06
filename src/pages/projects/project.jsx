import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import projectsData from '../../components/projects.json';

// Import images for project 1
import att1 from '../../assets/att1.png';
import att1_2 from '../../assets/att1.png';
import att1_3 from '../../assets/att1.png';
import att1_4 from '../../assets/att1.png';

import bs from '../../assets/bs.png';
import bs_2 from '../../assets/bs.png';
import bs_3 from '../../assets/bs.png';
import bs_4 from '../../assets/bs.png';

import learn from '../../assets/learn.png';
import dot from '../../assets/dot.png';
import la from '../../assets/la.png';

const images = {
  1: [att1, att1_2, att1_3, att1_4],
  2: [bs, bs_2, bs_3, bs_4],
  3: [learn],
  4: [dot],
  5: [la],
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: 600,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const Project = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
          data-aos="fade-right"
        >
          Projects
        </h1>

        <div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
        >
          {projectsData.map((project) => {
            const projectImages = images[project.image];
            const thumbnail = projectImages ? projectImages[0] : '';

            return (
              <div
                key={project.id}
                data-aos="flip-right"
                className="bg-white shadow-lg rounded-md overflow-hidden transform transition-transform duration-200 hover:scale-110 cursor-pointer"
                onClick={() => handleOpen(project)}
              >
                <div className="relative transform transition-transform duration-200 hover:scale-110">
                  <img
                    src={thumbnail}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="p-6 transform transition-transform duration-200 hover:scale-105">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {project.title}
                  </div>
                  <p className="mt-2 text-gray-500">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 transform transition-transform duration-200 hover:scale-110"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="project-modal-title"
          aria-describedby="project-modal-description"
        >
          <Box sx={modalStyle}>
            {selectedProject && (
              <>
                <h2 id="project-modal-title" className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h2>
                <p id="project-modal-description" className="mb-4">
                  {selectedProject.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {(images[selectedProject.image] || []).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${selectedProject.title} screenshot ${idx + 1}`}
                      className="object-cover w-full h-32 rounded-md"
                    />
                  ))}
                </div>
                <div className="flex justify-between">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Project;
