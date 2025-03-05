import { useState, useEffect } from "react";
import { Tooltip, Chip, Card, Progress } from "@heroui/react";
import "./skill.css";

const skillGroups = {
  Frontend: [
    {
      name: "HTML",
      level: 90,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      level: 95,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "React",
      level: 80,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      url: "https://react.dev",
    },
    {
      name: "Tailwind",
      level: 80,
      image: "https://static.cdnlogo.com/logos/t/58/tailwindcss.svg",
      url: "https://tailwindcss.com",
    }, // Alternate Tailwind PNG
  ],
  Backend: [
    {
      name: "Node.js",
      level: 85,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      url: "https://nodejs.org",
    },
    {
      name: "Express",
      level: 85,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      url: "https://expressjs.com",
    },
    {
      name: "Golang",
      level: 50,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      url: "https://golang.org",
    },
  ],
  Database: [
    {
      name: "MySQL",
      level: 90,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      url: "https://www.mysql.com",
    },
    {
      name: "MongoDB",
      level: 70,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      url: "https://www.mongodb.com",
    },
  ],
  DevOps: [
    {
      name: "Docker",
      level: 75,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      url: "https://www.docker.com",
    },
    {
      name: "Git",
      level: 95,
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      url: "https://git-scm.com",
    },
    {
      name: "Postman",
      level: 95,
      image: "https://static.cdnlogo.com/logos/p/20/postman.svg",
      url: "https://www.postman.com",
    }, 
  ],
};

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState(Object.keys(skillGroups)[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 999);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 999);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="skills-container">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.keys(skillGroups).map((group) => (
          <Chip
            key={group}
            variant={activeGroup === group ? "dot" : "flat"}
            color="primary"
            size="lg"
            onClick={() => setActiveGroup(group)}
            className="cursor-pointer font-semibold"
          >
            {group}
          </Chip>
        ))}
      </div>

      <div className="skills-main">
        {activeGroup && (
          <div className="skills-list">
            {skillGroups[activeGroup].map((skill) => (
              <Card
                isHoverable
                isPressable
                key={skill.name}
                className="skills-card p-5 flex flex-row  min-w-56 gap-3 text-center"
              >
                <a href={skill.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="skill-image"
                  />
                </a>
                <div className="skill-info">
                  <span className="skill-name w-full mb-1">{skill.name}</span>
                  <Tooltip
                    content={`${skill.level}% proficiency`}
                    placement="top"
                    closeDelay={1000}
                  >
                    {!isMobile ? (
                      <Progress
                        aria-label="Loading..."
                        color="success"
                        className="pg1 max-w-md"
                        value={skill.level}
                      />
                    ) : (
                      <Progress
                        aria-label="Loading..."
                        color="success"
                        className="pg2 max-w-md"
                        showValueLabel={true}
                        value={skill.level}
                      />
                    )}
                  </Tooltip>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
