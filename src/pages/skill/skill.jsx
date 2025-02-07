import { useState } from "react";
import './skill.css';
import { motion, AnimatePresence } from "framer-motion";

const skillGroups = {
  Frontend: [
    {
      name: "HTML",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      url: "https://react.dev",
    },
    {
      name: "Tailwind",
      image: "https://www.drupal.org/files/project-images/screenshot_361.png",
      url: "https://tailwindcss.com",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      url: "https://nodejs.org",
    },
    {
      name: "Express",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      url: "https://expressjs.com",
    },
    {
      name: "Golang",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      url: "https://golang.org",
    },
  ],
  Database: [
    {
      name: "MySQL",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      url: "https://www.mysql.com",
    },
    {
      name: "MongoDB",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      url: "https://www.mongodb.com",
    },
  ],
  DevOps: [
    {
      name: "Docker",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      url: "https://www.docker.com",
    },
    {
      name: "Git",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      url: "https://git-scm.com",
    },
    {
      name: "Postman",
      image: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
      url: "https://www.postman.com",
    },
  ],
};

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  const calculatePosition = (index, total, radius) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  const handleGroupClick = (group) => {
    setActiveGroup(activeGroup === group ? null : group);
    setRotationAngle((prevAngle) => prevAngle + 360);
  };

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-groups">
        {Object.keys(skillGroups).map((group) => (
          <motion.button
            key={group}
            className={`skill-group-button ${activeGroup === group ? "active" : ""}`}
            onClick={() => handleGroupClick(group)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {group}
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {activeGroup && (
          <motion.div
            className="skills-circle"
            style={{ transform: `rotate(${rotationAngle}deg)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {skillGroups[activeGroup].map((skill, index) => {
              const position = calculatePosition(index, skillGroups[activeGroup].length, 150);
              return (
                <motion.a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-item"
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, x: position.x, y: position.y }}
                  exit={{ opacity: 0, x: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img src={skill.image || "/placeholder.svg"} alt={skill.name} className="skill-image" />
                  <span className="skill-name">{skill.name}</span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;




// import react, { useState } from "react"
// import "./skill.css"

 
    
// const skills = [
//   { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
//   { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
//   { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://react.dev' },
//   { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org' },
//   { name: 'Express', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', url: 'https://expressjs.com' },
//   { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', url: 'https://www.mysql.com' },
//   { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', url: 'https://www.mongodb.com' },
//   { name: 'Tailwind CSS', image: 'https://www.drupal.org/files/project-images/screenshot_361.png', url: 'https://tailwindcss.com' },
//   { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', url: 'https://www.docker.com' },
// ];

// const Skill= () => {
//   return (
//     <div className="w-full overflow-hidden  py-10">
//       <h2 className="text-3xl font-bold text-center mb-8" data-aos='fade-left'>Skills</h2>
//       <div className="relative">
//         <div className="flex animate-scroll">
//           {[...skills, ...skills].map((skill, index) => (
//             <div
//             data-aos='flip-left'
//               key={`${skill.name}-${index}`}
//               className="flex-shrink-0 w-40 mx-4 transform transition-transform duration-100 hover:scale-110"
//             >
//               <a
//                 href={skill.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block bg-white rounded-lg shadow-md overflow-hidden"
//               >
//                 <div className="h-32 flex items-center justify-center p-4">
//                   <img src={skill.image} alt={skill.name} className="max-h-full max-w-full" />
//                 </div>
//                 <div className="bg-gray-800 text-white p-2 text-center">
//                   <h3 className="font-semibold">{skill.name}</h3>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default Skill;

