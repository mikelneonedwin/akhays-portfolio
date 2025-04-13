import { Box, Button, Container, Heading, Text, VStack, Image, Tag, HStack, Link, useColorModeValue } from '@chakra-ui/react';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { detectTechnologies } from '../utils/techDetector';

const projects = [
  {
    title: 'Project 1',
    description: 'A comprehensive web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.',
    image: 'https://via.placeholder.com/400x250',
    files: [
      'src/App.jsx',
      'server.js',
      'package.json',
      'database/mongo.js',
      'styles/main.css'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Project 2',
    description: 'Mobile-first e-commerce platform with seamless payment integration and inventory management system built with Next.js and Firebase.',
    image: 'https://via.placeholder.com/400x250',
    files: [
      'pages/index.tsx',
      'firebase.config.js',
      'components/Cart.tsx',
      'styles/global.scss'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Project 3',
    description: 'AI-powered data analytics dashboard using Python and TensorFlow for data processing and visualization.',
    image: 'https://via.placeholder.com/400x250',
    files: [
      'app.py',
      'models/neural_network.py',
      'requirements.txt',
      'Dockerfile'
    ],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

const SLIDE_DURATION = 3000; // 3 seconds per slide
const MotionBox = motion(Box);

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
    <Container 
      maxW="container.xl"
      py={{ base: 8, md: 12 }}
    >
      <VStack spacing={12} align="stretch">
        <Box textAlign="center">
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
            mb={6}
          >
            Welcome to My Portfolio
          </Heading>
          <Text 
            fontSize={{ base: 'lg', md: 'xl' }}
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="3xl"
            mx="auto"
          >
            Explore my journey through code and creativity. Each project represents a unique challenge and innovative solution.
          </Text>
        </Box>

        <Box 
          position="relative" 
          overflow="hidden"
          bg={useColorModeValue('white', 'gray.800')}
          borderRadius="xl"
          boxShadow="xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Heading 
            as="h2" 
            size="lg" 
            textAlign="center" 
            pt={8}
            pb={4}
            px={4}
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
          >
            Featured Projects
          </Heading>
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
  );
};

export default Home; 