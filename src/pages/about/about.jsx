import { Card, CardBody, CardHeader } from "@heroui/react";
import { otherAssets } from "../../config/assetUrls";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-start p-4">
      <div className="flex flex-1 flex-col items-center gap-4">
        <h3 className="font-bold text-3xl text-center" data-aos="fade-left">
          About Me
        </h3>
        <img
          src={otherAssets.aboutGif}
          alt="About"
          height="200px"
          width="500px"
          className="rounded-full"
          data-aos="fade-up"
        />
      </div>

      <div className="flex flex-1 flex-col gap-10 text-gray-700 max-w-4xl">
        <Card isPressable data-aos="fade-right">
          <CardHeader>
            <p className="text-green-600 font-bold">Who I Am</p>
          </CardHeader>
          <CardBody>
            <p className="text-lg dark:text-smallFontDark">
              Hi, I'm a passionate developer with a keen interest in building
              innovative solutions. I thrive on learning and exploring new
              technologies.
            </p>
          </CardBody>
        </Card>

        <Card isPressable data-aos="fade-right">
          <CardHeader>
            <p className="text-green-600 font-bold">What I Do</p>
          </CardHeader>
          <CardBody>
            <p className="text-lg dark:text-smallFontDark">
              My expertise includes front-end and back-end development, creating
              seamless user experiences, and optimizing application performance.
            </p>
          </CardBody>
        </Card>

        <Card isPressable data-aos="fade-right">
          <CardHeader>
            <p className="text-green-600 font-bold">Outside Work</p>
          </CardHeader>
          <CardBody>
            <p className="text-lg dark:text-smallFontDark">
              Outside of work, I enjoy reading, exploring new tools, and
              participating in tech communities to share knowledge.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default About;
