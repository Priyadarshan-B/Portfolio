import { RadialBarChart, RadialBar, Tooltip, ResponsiveContainer } from "recharts";

const skillsData = [
  { name: "React", level: 90, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", level: 85, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Golang", level: 80, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "MySQL", level: 75, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", level: 70, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

const RadialSkillGraph = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
      {skillsData.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-lg">
          <div className="relative w-24 h-24">
            <img src={skill.image} alt={skill.name} className="absolute inset-0 w-full h-full object-contain" />
          </div>
          <h3 className="text-lg font-semibold mt-2 text-gray-800 dark:text-white">{skill.name}</h3>
          <ResponsiveContainer width={150} height={150}>
            <RadialBarChart innerRadius="80%" outerRadius="100%" data={[{ value: skill.level }]} startAngle={90} endAngle={-270}>
              <RadialBar dataKey="value" fill="#4F46E5" cornerRadius={10} />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
};

export default RadialSkillGraph;
