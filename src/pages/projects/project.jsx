import React from 'react';
import projectsData from '../../components/projects.json';
import att1 from '../../assets/att1.png'
import att2 from '../../assets/att1.png'
import att3 from '../../assets/att1.png'
import att4 from '../../assets/att1.png'
// import att5 from '../../assets/att1.png'


const images = {
    1: att1,
    2: att2,
    3: att3,
    4: att4,
  };

  const Project = () => {
    return (
      <div className="min-h-screen w-full  py-4 px-4  sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-aos='fade-right'>Projects</h1>
  
          <div  className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          data-aos = 'fade-up'
          >
            {projectsData.map((project) => {
              const image = images[project.image];
  
              return (
                <div data-aos = 'flip-right'
                  key={project.id}
                  className="bg-white shadow-lg rounded-md overflow-hidden transform transition-transform duration-200 hover:scale-110"
                >
                  <div className="relative transform transition-transform duration-200 hover:scale-110">
                    <img
                      src={image}
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
        </div>
      </div>
    );
  };

export default Project;
