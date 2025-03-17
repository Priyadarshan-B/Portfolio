import React, {useState} from "react";
import { Masonry } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, Chip } from "@heroui/react"; 
import { Modal, ModalContent } from "@heroui/modal";
import projects from "../../components/projects.json";
import Button from "../../components/button/button";
import att1 from "../../assets/att4.png";
import att1_2 from "../../assets/att2.png";
import att1_3 from "../../assets/att3.png";
import att1_4 from "../../assets/att1.png";

import bs from "../../assets/bs1.png";
import bs_2 from "../../assets/bs2.png";
import bs_3 from "../../assets/bs3.png";
import bs_4 from "../../assets/bs4.png";

import learn_1 from "../../assets/l1.png";
import learn_2 from "../../assets/l2.png";
import learn_3 from "../../assets/l3.png";
import learn_4 from "../../assets/l4.png";

import dot from "../../assets/dot.png";
import dot1 from "../../assets/dot2.png";
import dot2 from "../../assets/dot3.png";
import dot3 from "../../assets/dot4.png";

import la from "../../assets/la.png";
import la_1 from "../../assets/la2.png";
import la_2 from "../../assets/la3.png";
import la_3 from "../../assets/la4.png";

import e1 from "../../assets/e1.png";
import e2 from "../../assets/e2.png";
import e3 from "../../assets/e3.png";
import e4 from "../../assets/e4.png";

import b1 from '../../assets/b1.png'
import b2 from '../../assets/b2.png'
import b3 from '../../assets/b3.png'
import b4 from '../../assets/b4.png'

import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'


const images = {
  1: [att1, att1_2, att1_3, att1_4],
  2: [bs, bs_2, bs_3, bs_4],
  3: [learn_1, learn_2, learn_3, learn_4],
  4: [dot, dot1, dot2, dot3],
  5: [la, la_1, la_2, la_3],
  6: [e1, e2, e3, e4],
  7:[b1,b2, b3, b4],
  8:[p1, p2, p3, p4]
};

const ProjectsPage = () => {
     const [open, setOpen] = useState(false);
      const [selectedProject, setSelectedProject] = useState(null);
      const [previewImage, setPreviewImage] = useState(null);
      const navigate = useNavigate()

      const handleOpen = (project) => {
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
    <div className="md:m-10 sm:m-4 ">
      <h2 className="font-semibold text-3xl text-center p-10">Projects</h2>
        <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={3} >
          {projects.map((project) => (
            <Card
              key={project.id}
              className="cursor-pointer"
              onPress={() => handleOpen(project)}
              isPressable
              shadow="sm"
              
            >
              <CardHeader className="p-0">
                <img
                  src={images[project.image][0]}
                  alt={project.title}
                  className="h-38 w-full object-cover rounded-t-md"
                />
              </CardHeader>
              <CardBody className="p-6">
                <h3 className="text-lg font-semibold text-indigo-500">
                  {project.title}
                </h3>
                <p className=" mt-2 line-clamp-5 text-gray-500 dark:text-smallFontDark">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Chip
                      key={index}
                      variant="flat"
                      color="primary"
                      size="sm"
                      className="px-2 py-1"
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>
                
              </CardBody>
            </Card>
          ))}
        </Masonry>
        <Button
        variant="solid"
        onClick={() => navigate(-1)}
        className="fixed z-10 bottom-6 right-6 px-4 py-2 rounded-full shadow-md md:bottom-8 md:right-8"
      >
        ← Go Back
      </Button>
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
  );
};

export default ProjectsPage;