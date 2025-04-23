import { Box, Container, Heading, Text, SimpleGrid, Image, Tag, HStack, Link, Icon, useColorModeValue, Button } from '@chakra-ui/react';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { detectTechnologies } from '../utils/techDetector';
import '../styles/animations.css';

const MotionBox = motion(Box);

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

const Assets = () => {
  return (
    <Box
      as="section"
      minH="100vh"
      py={{ base: 20, md: 28 }}
      position="relative"
      overflow="hidden"
      bg="gray.300"
    >
      <Container 
        maxW="container.xl"
        px={{ base: 6, md: 8 }}
        position="relative"
        zIndex={1}
      >
        <Box textAlign="center" mb={16}>
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
            className="fire-text"
            mb={6}
            letterSpacing="tight"
          >
            Proof of Work
          </Heading>
          <Text 
            fontSize={{ base: 'lg', md: 'xl' }} 
            color="whiteAlpha.900"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="fire-card"
                bg="rgba(26, 32, 44, 0.7)"
                borderRadius="xl"
                overflow="hidden"
                height="100%"
                display="flex"
                flexDirection="column"
                border="1px solid"
                borderColor="whiteAlpha.200"
                backdropFilter="blur(10px)"
                whileHover={{ y: -5, boxShadow: '2xl' }}
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
                    className="fire-text"
                    letterSpacing="tight"
                  >
                    {project.title}
                  </Text>
                  <Text
                    color="whiteAlpha.900"
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
                        bg="whiteAlpha.200"
                        color="whiteAlpha.900"
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
                        className="fire-button"
                        color="white"
                      >
                        View Code
                      </Button>
                    </Link>
                    <Link href={project.demo} isExternal>
                      <Button
                        leftIcon={<FaExternalLinkAlt />}
                        variant="outline"
                        borderColor="whiteAlpha.400"
                        color="whiteAlpha.900"
                        _hover={{ 
                          transform: 'translateY(-2px)',
                          bg: 'whiteAlpha.100'
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
      </Container>
    </Box>
  );
};

export default Assets; 