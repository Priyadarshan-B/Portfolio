import React from "react";
import gif from '../../assets/about1.gif'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import {
  Typography,
  Box,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const events = [
    {
      title: "My Journey",
      color: "primary",
      content:
        "I began my journey in the world of technology with a fascination for how things work. From dismantling old computers to writing my first lines of code, I knew I had found my calling. This curiosity led me to pursue a degree in Computer Science, where I honed my skills and discovered my passion for creating innovative solutions to complex problems.",
    },
    {
      title: "Professional Growth",
      color: "success",
      content:
        "As I entered the professional world, I embraced every opportunity to learn and grow. I've had the privilege of working on diverse projects, from developing robust backend systems to creating intuitive user interfaces. Each experience has taught me valuable lessons about teamwork, problem-solving, and the importance of continuous learning in the ever-evolving tech landscape.",
    },
    {
      title: "My Approach",
      color: "secondary",
      content:
        "I believe in the power of technology to make a positive impact on people's lives. My approach to development is centered around creating clean, efficient, and scalable solutions. I'm passionate about user-centric design and strive to build applications that not only function flawlessly but also provide an exceptional user experience. I'm always excited to tackle new challenges and push the boundaries of what's possible.",
    },
    {
      title: "Looking Ahead",
      color: "error",
      content:
        "As I look to the future, I'm excited about the endless possibilities in the world of technology. I'm particularly interested in emerging fields like artificial intelligence, blockchain, and the Internet of Things. My goal is to continue growing as a developer, contribute to meaningful projects, and collaborate with like-minded individuals who share my passion for innovation.",
    },
  ];

  return (
    <Box sx={{ py: 6, px: 3, maxWidth: "900px", mx: "auto" }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Me
      </Typography>
      {isMobile ? (
        <Box>
          {events.map((event, index) => (
            <Card
              key={index}
              data-aos="flip-up"
              sx={{ mb: 3, boxShadow: 3, borderRadius: 2 }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: `${event.color}.main`,
                  }}
                >
                  {event.title}
                </Typography>
                <Typography>{event.content}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <Timeline position="alternate">
          {events.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color={event.color} />
                {index < events.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  sx={{ mb: 3 }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      color: `${event.color}.main`,
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography>{event.content}</Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </Box>
  );
};

export default About;
