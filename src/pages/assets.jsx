import { Box, Container, Heading, Text, SimpleGrid, Image, Tag, HStack, Link, Button, VStack, Flex } from '@chakra-ui/react';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { detectTechnologies } from '../utils/techDetector';
import '../styles/animations.css';

const MotionBox = motion(Box);

const projects = [
  {
    title: 'Flask REST API',
    subtitle: 'NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION',
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
    subtitle: 'REACT JS, FRAMER MOTION',
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
    title: 'Hospital Management',
    subtitle: 'REACT JS, NODE JS, MONGO DB, EXPRESS',
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

const Assets = () => {
  return (
    <Box
      as="section"
      minH="100vh"
      py={{ base: 20, md: 28 }}
      position="relative"
      bg="gray.300"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(102, 0, 255, 0.15) 0%, rgba(0, 163, 255, 0.15) 100%)',
        filter: 'blur(100px)',
        transform: 'scale(1.2)',
        zIndex: 0,
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={16} align="stretch">
          <Box textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="brand.500"
              textTransform="uppercase"
              mb={3}
            >
              Yeah, I work hard 💼
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
              color="whiteAlpha.900"
              className="gradient-text"
            >
              Each project is unique.<br />
              Here are some of my works.
            </Heading>
          </Box>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 8, md: 12 }}
          >
            {projects.map((project, index) => (
              <ScrollAnimation key={index} delay={index * 0.2}>
                <MotionBox
                  className="glass-card"
                  borderRadius="2xl"
                  overflow="hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box position="relative" overflow="hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      w="full"
                      h="300px"
                      objectFit="cover"
                      transition="transform 0.3s ease"
                      _groupHover={{ transform: 'scale(1.05)' }}
                    />
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bg="blackAlpha.600"
                      backdropFilter="blur(2px)"
                      opacity={0}
                      transition="opacity 0.3s ease"
                      _groupHover={{ opacity: 1 }}
                    />
                  </Box>

                  <VStack
                    spacing={4}
                    p={8}
                    align="flex-start"
                  >
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color="brand.500"
                      letterSpacing="wider"
                    >
                      {project.subtitle}
                    </Text>
                    
                    <Heading
                      as="h3"
                      fontSize={{ base: '2xl', md: '3xl' }}
                      color="whiteAlpha.900"
                      className="gradient-text"
                    >
                      {project.title}
                    </Heading>

                    <Text
                      color="whiteAlpha.800"
                      fontSize="lg"
                      lineHeight="tall"
                    >
                      {project.description}
                    </Text>

                    <HStack spacing={4} pt={4}>
                      <Link href={project.github} isExternal>
                        <Button
                          leftIcon={<FaGithub />}
                          variant="ghost"
                          size="lg"
                          className="glow-icon"
                        >
                          View Code
                        </Button>
                      </Link>
                      <Link href={project.demo} isExternal>
                        <Button
                          leftIcon={<FaExternalLinkAlt />}
                          variant="gradient"
                          size="lg"
                        >
                          Live Demo
                        </Button>
                      </Link>
                    </HStack>
                  </VStack>
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