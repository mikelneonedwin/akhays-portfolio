import { Box, Container, Heading, Text, VStack, SimpleGrid, Image, Tag, HStack, Link, Icon, IconButton, useColorModeValue, Button } from '@chakra-ui/react';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { detectTechnologies } from '../utils/techDetector';

const MotionBox = motion(Box);

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

const Assets = () => {
  return (
    <Box
      as="section"
      minH="100vh"
      py={{ base: 20, md: 28 }}
      bg={useColorModeValue('gray.50', 'gray.900')}
    >
      <Container 
        maxW="container.xl"
        px={{ base: 6, md: 8 }}
      >
        <VStack spacing={12} align="stretch">
          <Box textAlign="center" mb={8}>
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="bold"
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
              mb={6}
              letterSpacing="tight"
            >
              Proof of Work
            </Heading>
            <Text 
              fontSize={{ base: 'lg', md: 'xl' }} 
              color={useColorModeValue('gray.600', 'gray.400')}
              maxW="3xl"
              mx="auto"
            >
              Explore my latest projects and contributions — each one representing a unique challenge and innovative solution.
            </Text>
          </Box>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 8, lg: 10 }}
            width="100%"
          >
            {projects.map((project, index) => (
              <ScrollAnimation key={project.title} delay={index * 0.15}>
                <MotionBox
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    boxShadow: '2xl',
                    transition: { duration: 0.3 }
                  }}
                  bg={useColorModeValue('white', 'gray.800')}
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="lg"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  border="1px solid"
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                >
                  <Box
                    position="relative"
                    height="220px"
                    overflow="hidden"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      objectFit="cover"
                      width="100%"
                      height="100%"
                      transition="transform 0.5s ease"
                      _hover={{
                        transform: 'scale(1.05)'
                      }}
                    />
                  </Box>
                  <Box p={8} flex="1" display="flex" flexDirection="column">
                    <Text
                      fontSize="2xl"
                      fontWeight="bold"
                      mb={3}
                      color={useColorModeValue('gray.800', 'white')}
                      letterSpacing="tight"
                    >
                      {project.title}
                    </Text>
                    <Text
                      color={useColorModeValue('gray.600', 'gray.300')}
                      mb={6}
                      flex="1"
                      fontSize="md"
                      lineHeight="tall"
                    >
                      {project.description}
                    </Text>
                    <HStack spacing={2} mb={6} flexWrap="wrap" gap={2}>
                      {detectTechnologies(project.files, project.description).map((tech) => (
                        <Tag
                          key={tech}
                          size="md"
                          variant="subtle"
                          colorScheme="blue"
                          borderRadius="full"
                          px={4}
                          py={1}
                          fontWeight="medium"
                        >
                          {tech}
                        </Tag>
                      ))}
                    </HStack>
                    <HStack spacing={4} mt="auto" justify="flex-start">
                      <Link href={project.github} isExternal>
                        <Button
                          leftIcon={<FaGithub />}
                          size="md"
                          variant="solid"
                          colorScheme="blue"
                          _hover={{ transform: 'translateY(-2px)' }}
                          transition="all 0.3s"
                        >
                          View Code
                        </Button>
                      </Link>
                      <Link href={project.demo} isExternal>
                        <Button
                          leftIcon={<FaExternalLinkAlt />}
                          size="md"
                          variant="outline"
                          colorScheme="blue"
                          _hover={{ 
                            transform: 'translateY(-2px)',
                            bg: useColorModeValue('blue.50', 'blue.900')
                          }}
                          transition="all 0.3s"
                        >
                          Live Demo
                        </Button>
                      </Link>
                    </HStack>
                  </Box>
                </MotionBox>
              </ScrollAnimation>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Assets; 