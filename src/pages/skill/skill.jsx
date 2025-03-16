import next from"../../assets/nextui.png"
import "./skill.css";

const skills = [
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    image: "https://static.cdnlogo.com/logos/t/58/tailwindcss.svg",
  },
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Vercel",
    image:
      "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/favicon.ico",
  },
  {
    name: "Postman",
    image: "https://static.cdnlogo.com/logos/p/20/postman.svg",
  },
  {
    name: "Linux",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  { name: "pnpm", image: "https://pnpm.io/img/favicon.png" },
  {
    name: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Nginx",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  {
    name: "Netlify",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
  },
  {
    name: "Ant Design",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
  },
  {
    name: "MUI",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "NextUI",
    image: next,
  },
];

const Skills = () => {
  return (
    <div className="p-6 max-w-7xl flex flex-col">
      <center className="mb-1 uppercase" data-aos="fade-up">I constantly try to improve</center>
      <h2 className="text-3xl font-semibold text-center mb-6" data-aos="fade-down">
        My Tech Stack
      </h2>

      <div className="flex flex-row justify-center flex-wrap gap-2 items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            data-aos="zoom-in"
            className="flex items-center gap-2 bg-white dark:bg-gray-950 text-black dark:text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <img src={skill.image} rel="preconnect" alt={skill.name} className="w-6 h-6" />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
