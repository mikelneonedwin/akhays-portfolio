import { Box, Button, Container, Heading, Text, VStack, Image, Tag, HStack, Link, useColorModeValue, Icon, SimpleGrid, Flex } from '@chakra-ui/react';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaServer, FaPalette } from 'react-icons/fa';
import { detectTechnologies } from '../utils/techDetector';
import '../styles/animations.css';

const projects = [
  {
    title: 'Flask REST API',
    description: 'A comprehensive backend system featuring JWT authentication, SQLAlchemy ORM, and Swagger documentation. Includes user management, role-based access control, and automated testing.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    files: [
      'app.py',
      'models/user.py',
      'routes/auth.py',
      'tests/test_api.py',
      'config.py'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'AI Image Editor',
    description: 'An intelligent image processing application that leverages OpenAI\'s CLIP model for smart image classification and editing. Built with Python and modern AI frameworks.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    files: [
      'main.py',
      'services/ai_processor.py',
      'utils/image_utils.py',
      'models/clip_model.py'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Hospital Management System',
    description: 'A full-stack healthcare management solution with appointment scheduling, patient records, and medical inventory tracking. Features real-time updates and secure data handling.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    files: [
      'server/app.py',
      'database/models.py',
      'services/scheduler.py',
      'api/appointments.py',
      'utils/security.py'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

const SLIDE_DURATION = 3000; // 3 seconds per slide
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const skills = [
  { name: 'Frontend Development', icon: FaCode, description: 'Building responsive and interactive user interfaces with modern frameworks.' },
  { name: 'Backend Development', icon: FaServer, description: 'Creating robust server-side applications and APIs.' },
  { name: 'Database Design', icon: FaDatabase, description: 'Designing and optimizing database schemas and queries.' },
  { name: 'UI/UX Design', icon: FaPalette, description: 'Crafting beautiful and intuitive user experiences.' },
];

const VideoBackground = () => (
  <Box
    position="absolute"
    top={0}
    left={0}
    width="100%"
    height="100%"
    overflow="hidden"
    zIndex={0}
  >
    <Box
      as="video"
      position="absolute"
      top="50%"
      left="50%"
      minWidth="100%"
      minHeight="100%"
      width="auto"
      height="auto"
      transform="translate(-50%, -50%)"
      objectFit="cover"
      autoPlay
      muted
      loop
      playsInline
      src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
      opacity={0.15}
    />
  </Box>
);

const SkillCard = ({ skill }) => (
  <MotionBox
    whileHover={{ y: -5, boxShadow: 'xl' }}
    transition={{ duration: 0.2 }}
    bg={useColorModeValue('white', 'gray.800')}
    p={6}
    borderRadius="lg"
    boxShadow="md"
    textAlign="center"
  >
    <Icon
      as={skill.icon}
      w={10}
      h={10}
      mb={4}
      color={useColorModeValue('blue.500', 'blue.300')}
    />
    <Heading size="md" mb={2}>
      {skill.name}
    </Heading>
    <Text color={useColorModeValue('gray.600', 'gray.400')}>
      {skill.description}
    </Text>
  </MotionBox>
);

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState(1); // 1 for right

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % projects.length;
      setSlideDirection(1); // Always slide right
      return nextIndex;
    });
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex - 1 + projects.length) % projects.length;
      setSlideDirection(-1);
      return nextIndex;
    });
  };

  useEffect(() => {
    let slideTimer;
    if (!isPaused) {
      slideTimer = setInterval(nextSlide, SLIDE_DURATION);
    }
    return () => {
      if (slideTimer) {
        clearInterval(slideTimer);
      }
    };
  }, [isPaused, nextSlide]);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        height={{ base: "90vh", md: "100vh" }}
        display="flex"
        alignItems="center"
        overflow="hidden"
      >
        <VideoBackground />
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <MotionFlex
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            direction="column"
            align="center"
            textAlign="center"
          >
          <Heading
            as="h1"
              fontSize={{ base: '4xl', md: '5xl', lg: '7xl' }}
            fontWeight="bold"
              className="fire-text"
            mb={6}
          >
              Backend Developer Portfolio
          </Heading>
          <Text 
              fontSize={{ base: 'xl', md: '2xl' }}
              color={useColorModeValue('gray.700', 'gray.300')}
            maxW="3xl"
              mb={8}
            >
              Providing the best Project Experience with innovative solutions and scalable architecture.
            </Text>
            <Button
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              size="lg"
              px={8}
              color="white"
              className="fire-button"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "xl",
              }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </MotionFlex>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box
        py={{ base: 16, md: 24 }}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              textAlign="center"
              mb={8}
              className="fire-text"
            >
              My Skills
            </Heading>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={8}
              width="100%"
            >
              {skills.map((skill, index) => (
                <MotionBox
                  key={index}
                  whileHover={{ y: -5, boxShadow: 'xl' }}
                  transition={{ duration: 0.2 }}
                  bg="rgba(26, 32, 44, 0.7)"
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  backdropFilter="blur(10px)"
                >
                  <Icon
                    as={skill.icon}
                    w={10}
                    h={10}
                    mb={4}
                    className="fire-icon"
                  />
                  <Heading size="md" mb={2} color="whiteAlpha.900">
                    {skill.name}
                  </Heading>
                  <Text color="whiteAlpha.800">
                    {skill.description}
          </Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
        </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        py={{ base: 16, md: 24 }}
      >
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl' }}
              textAlign="center"
              mb={8}
              className="fire-text"
            >
              Featured Projects
            </Heading>

        <Box 
          position="relative" 
          overflow="hidden"
          bg={useColorModeValue('white', 'gray.800')}
          borderRadius="xl"
          boxShadow="xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
              width="100%"
            >
          <AnimatePresence mode="wait">
            <MotionBox
              key={currentIndex}
              initial={{ 
                x: slideDirection === 1 ? '100%' : '-100%',
                opacity: 0 
              }}
              animate={{ 
                x: 0,
                opacity: 1 
              }}
              exit={{ 
                x: slideDirection === 1 ? '-100%' : '100%',
                opacity: 0 
              }}
              transition={{ 
                type: "tween",
                duration: 0.5,
                ease: "easeInOut"
              }}
              width="100%"
              p={8}
            >
              <Box
                display="flex"
                flexDirection={{ base: "column", md: "row" }}
                gap={8}
                alignItems="center"
              >
                <Box
                  flex="1"
                  position="relative"
                  height={{ base: "200px", md: "300px" }}
                  width="100%"
                  overflow="hidden"
                  borderRadius="lg"
                >
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    transition="transform 0.5s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                </Box>
                <Box flex="1">
                  <Heading
                    as="h3"
                    size="lg"
                    mb={4}
                    color={useColorModeValue('gray.800', 'white')}
                  >
                    {projects[currentIndex].title}
                  </Heading>
                  <Text
                    color={useColorModeValue('gray.600', 'gray.300')}
                    mb={6}
                    fontSize="md"
                    lineHeight="tall"
                  >
                    {projects[currentIndex].description}
                  </Text>
                  <HStack spacing={2} mb={6} flexWrap="wrap" gap={2}>
                    {detectTechnologies(projects[currentIndex].files, projects[currentIndex].description).map((tech) => (
                      <Tag
                        key={tech}
                        size="md"
                        variant="subtle"
                        colorScheme="blue"
                        borderRadius="full"
                        px={4}
                        py={1}
                      >
                        {tech}
                      </Tag>
                    ))}
                  </HStack>
                  <HStack spacing={4}>
                    <Link href={projects[currentIndex].github} isExternal>
                      <Button
                        leftIcon={<FaGithub />}
                        colorScheme="blue"
                        variant="outline"
                      >
                        View Code
                      </Button>
                    </Link>
                    <Link href={projects[currentIndex].demo} isExternal>
                      <Button
                        leftIcon={<FaExternalLinkAlt />}
                        colorScheme="blue"
                      >
                        Live Demo
                      </Button>
                    </Link>
                  </HStack>
                </Box>
              </Box>
            </MotionBox>
          </AnimatePresence>
        </Box>
      </VStack>
    </Container>
      </Box>
    </Box>
  );
};

export default Home; 