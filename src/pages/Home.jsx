import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useState, useEffect, useCallback } from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
  },
  // Add more projects as needed
];

const SLIDE_DURATION = 3000; // 3 seconds per slide

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
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
    >
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl">
          Portfolio
        </Heading>
        
        <Box mt={8}>
          <Text fontSize="lg" textAlign="center">
            Welcome to my portfolio. Explore my projects and creative work.
          </Text>
        </Box>

        <Box 
          mt={10} 
          w="full" 
          position="relative" 
          overflow="hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Heading as="h2" size="lg" textAlign="center" mb={6}>
            Project Showcase
          </Heading>
          <Box 
            display="flex" 
            transition="transform 0.5s ease-in-out" 
            transform={`translateX(-${currentIndex * 100}%)`}
          >
            {projects.map((project, index) => (
              <Box 
                key={index} 
                flex="0 0 100%" 
                p={6} 
                borderWidth="1px" 
                borderRadius="lg" 
                boxShadow="md"
              >
                <Heading size="md">{project.title}</Heading>
                <Text mt={2}>{project.description}</Text>
              </Box>
            ))}
          </Box>
          <Button 
            onClick={prevSlide} 
            position="absolute" 
            left={0} 
            top="50%" 
            transform="translateY(-50%)"
            opacity={isPaused ? 1 : 0}
            transition="opacity 0.3s"
            _hover={{ opacity: 1 }}
          >
            Prev
          </Button>
          <Button 
            onClick={nextSlide} 
            position="absolute" 
            right={0} 
            top="50%" 
            transform="translateY(-50%)"
            opacity={isPaused ? 1 : 0}
            transition="opacity 0.3s"
            _hover={{ opacity: 1 }}
          >
            Next
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home; 