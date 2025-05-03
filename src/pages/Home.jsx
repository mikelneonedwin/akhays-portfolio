import { Box, Button, Container, Heading, Text, VStack, Image, Tag, HStack, Link, Icon, SimpleGrid, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown, FaExternalLinkAlt } from 'react-icons/fa';
import ScrollAnimation from '../components/ScrollAnimation';
import '../styles/animations.css';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const projects = [
  {
    title: 'Flask REST API',
    subtitle: 'NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION',
    description: 'A comprehensive backend system featuring JWT authentication, SQLAlchemy ORM, and Swagger documentation. Includes user management, role-based access control, and automated testing.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'AI Image Editor',
    subtitle: 'REACT JS, FRAMER MOTION',
    description: 'An intelligent image processing application that leverages OpenAI\'s CLIP model for smart image classification and editing. Built with Python and modern AI frameworks.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Hospital Management',
    subtitle: 'REACT JS, NODE JS, MONGO DB, EXPRESS',
    description: 'A full-stack healthcare management solution with appointment scheduling, patient records, and medical inventory tracking. Features real-time updates and secure data handling.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
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
        {/* Floating Elements */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex={1}
          overflow="hidden"
          pointerEvents="none"
        >
          {[...Array(20)].map((_, i) => (
            <MotionBox
              key={i}
              position="absolute"
              top={`${Math.random() * 100}%`}
              left={`${Math.random() * 100}%`}
              width={`${Math.random() * 10 + 5}px`}
              height={`${Math.random() * 10 + 5}px`}
              borderRadius="full"
              bg={i % 2 === 0 ? 'brand.500' : 'accent.500'}
              opacity={0.3}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() * 0.5 + 1],
                opacity: [0.3, 0.6],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </Box>
        <Container maxW="container.lg" position="relative" zIndex={2}>
          <VStack spacing={8} textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                as="h1"
                fontSize={{ base: '4xl', md: '6xl' }}
                className="gradient-text"
                mb={4}
              >
                Hi, I'm Your Name
              </Heading>
              <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                color="whiteAlpha.900"
                maxW="2xl"
                mx="auto"
              >
                Full Stack Developer & Blockchain Engineer
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <HStack spacing={6} justify="center">
                <Link href="https://github.com" isExternal>
                  <Icon as={FaGithub} w={8} h={8} className="glow-icon" />
                </Link>
                <Link href="https://linkedin.com" isExternal>
                  <Icon as={FaLinkedin} w={8} h={8} className="glow-icon" />
                </Link>
                <Link href="https://twitter.com" isExternal>
                  <Icon as={FaTwitter} w={8} h={8} className="glow-icon" />
                </Link>
                <Link href="mailto:your.email@example.com">
                  <Icon as={FaEnvelope} w={8} h={8} className="glow-icon" />
                </Link>
              </HStack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="scroll-indicator"
              marginTop={8}
            >
              <Icon
                as={FaArrowDown}
                w={8}
                h={8}
                color="brand.500"
                cursor="pointer"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  aboutSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        py={20}
        bg="gray.500"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(102, 0, 255, 0.1) 0%, rgba(0, 163, 255, 0.1) 100%)',
          zIndex: 0,
        }}
      >
        <Container maxW="container.lg" position="relative" zIndex={1}>
          <VStack spacing={16}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              textAlign="center"
              maxW="800px"
            >
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '4xl' }}
                className="gradient-text"
                mb={6}
              >
                About Me
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="whiteAlpha.900"
                lineHeight="tall"
                mb={8}
              >
                I'm a passionate developer with expertise in full-stack development
                and blockchain technologies. With a strong foundation in modern web
                technologies and a deep understanding of decentralized systems,
                I create innovative solutions that bridge the gap between traditional
                web applications and the blockchain ecosystem.
              </Text>
            </MotionBox>

            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={10}
              w="full"
            >
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card"
                p={8}
                borderRadius="2xl"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl',
                }}
              >
                <VStack spacing={6} align="flex-start">
                  <Heading size="md" className="gradient-text">Technical Expertise</Heading>
                  <SimpleGrid columns={2} spacing={4} w="full">
                    {['React', 'Node.js', 'Solidity', 'Web3.js', 'TypeScript', 'MongoDB'].map((skill) => (
                      <Tag
                        key={skill}
                        size="lg"
                        variant="subtle"
                        className="glass-card"
                        p={3}
                        justifyContent="center"
                        _hover={{
                          transform: 'scale(1.05)',
                          bg: 'whiteAlpha.200',
                        }}
                        transition="all 0.3s"
                      >
                        {skill}
                      </Tag>
                    ))}
                  </SimpleGrid>
                </VStack>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card"
                p={8}
                borderRadius="2xl"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl',
                }}
              >
                <VStack spacing={6} align="flex-start">
                  <Heading size="md" className="gradient-text">What I Do</Heading>
                  <VStack spacing={4} align="stretch">
                    {[
                      'Full Stack Development',
                      'Blockchain Integration',
                      'Smart Contract Development',
                      'UI/UX Design',
                    ].map((item) => (
                      <HStack
                        key={item}
                        p={3}
                        bg="whiteAlpha.100"
                        borderRadius="lg"
                        _hover={{
                          bg: 'whiteAlpha.200',
                          transform: 'translateX(5px)',
                        }}
                        transition="all 0.3s"
                      >
                        <Box
                          w={2}
                          h={2}
                          borderRadius="full"
                          bg="brand.500"
                        />
                        <Text color="whiteAlpha.900">{item}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </MotionBox>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        py={20}
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
                as="h2"
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
    </Box>
  );
};

export default Home; 