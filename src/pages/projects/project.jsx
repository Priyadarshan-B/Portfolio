import React, { useState } from 'react';
import { Card, CardBody, CardHeader,  } from "@heroui/react";
import { Chip } from "@heroui/chip";
import Button from '../../components/button/button';
import { Modal, ModalContent } from "@heroui/modal";
import "aos/dist/aos.css";
import projectsData from '../../components/projects.json';
import att1 from '../../assets/att4.png';
import att1_2 from '../../assets/att2.png';
import att1_3 from '../../assets/att3.png';
import att1_4 from '../../assets/att1.png';

import bs from '../../assets/bs1.png';
import bs_2 from '../../assets/bs2.png';
import bs_3 from '../../assets/bs3.png';
import bs_4 from '../../assets/bs4.png';

import learn_1 from '../../assets/l1.png';
import learn_2 from '../../assets/l2.png';
import learn_3 from '../../assets/l3.png';
import learn_4 from '../../assets/l4.png';

import dot from '../../assets/dot.png';
import dot1 from '../../assets/dot2.png';
import dot2 from '../../assets/dot3.png';
import dot3 from '../../assets/dot4.png';

import la from '../../assets/la.png';
import la_1 from '../../assets/la2.png';
import la_2 from '../../assets/la3.png';
import la_3 from '../../assets/la4.png';


const images = {
  1: [att1, att1_2, att1_3, att1_4],
  2: [bs, bs_2, bs_3, bs_4],
  3: [learn_1, learn_2, learn_3, learn_4],
  4: [dot, dot1, dot2, dot3],
  5: [la, la_1, la_2, la_3],
};

const Project = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleOpen = (project) => {
    // console.log("card clicked")
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
    setPreviewImage(null);
  };

  const handleImageClick = (image) => {
    setPreviewImage(image);
  };

  return (
    <div className="min-h-screen w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-3xl font-bold text-gray-900 dark:text-fontDark mb-8 text-center"
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
            const thumbnail = projectImages ? projectImages[0] : "";

            return (
              <Card
                key={project.id}
                className=" cursor-pointer"
                onPress={() => handleOpen(project)}
                isPressable
                shadow='sm'
                data-aos="flip-right"
              >
                <CardHeader className="p-0">
                  <img
                    src={thumbnail}
                    alt={project.title}
                    className="h-48 w-full object-cover rounded-t-md"
                  />
                </CardHeader>
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold text-indigo-500">
                    {project.title}
                  </h3>
                  <p className="line-clamp-4 mt-2 text-gray-500 dark:text-smallFontDark">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Chip key={index} variant="flat" color="primary" className="px-2 py-1 text-xs">
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        <Modal isOpen={open} size='4xl' placement='center' scrollBehavior='inside' onClose={handleClose} className="flex items-center justify-center p-4">
          <ModalContent className=" p-4 ">
            {selectedProject && (
              <>
                <h2 className="text-2xl font-bold mb-4 text-center text-indigo-500">{selectedProject.title}</h2>
                <p className="mb-4 text-sm ">{selectedProject.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto">
                  {(images[selectedProject.image] || []).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${selectedProject.title} screenshot ${idx + 1}`}
                      className="w-full h-40 sm:h-48 object-cover rounded-md cursor-pointer"
                      onClick={() => handleImageClick(img)}
                    />
                  ))}
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
          <Modal isOpen={true} placement='center' size='5xl' onClose={() => setPreviewImage(null)} className="flex items-center justify-center p-4 sm:p-6">
            <ModalContent className="p-4 w-full max-w-lg sm:max-w-xl mx-auto">
              <img src={previewImage} alt="Preview" className="w-full h-auto rounded-md" />
            </ModalContent>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Project;
