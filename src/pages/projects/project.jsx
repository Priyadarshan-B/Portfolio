import React from 'react';
import projectsData from '../../components/projects.json';

const Project = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">My Projects</h1>
        
        {/* Grid Layout */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="relative">
                {/* Card Image */}
                <img
                  src={`../../assets/${project.image}`}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6">
                {/* Card Title */}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
