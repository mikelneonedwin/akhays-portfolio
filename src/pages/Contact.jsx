import { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  useToast,
  Text,
  Icon,
  Grid,
  GridItem,
  Flex,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/animations.css';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const SocialLink = ({ icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon
      as={icon}
      w={6}
      h={6}
      className="fire-icon"
      transition="all 0.3s"
      aria-label={label}
    />
  </motion.a>
);

const ContactInfo = ({ icon, title, content, delay }) => (
  <MotionFlex
    align="center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    mb={{ base: 4, md: 0 }}
    role="group"
  >
    <Box
      p={3}
      bg="rgba(26, 32, 44, 0.7)"
      borderRadius="lg"
      mr={4}
      transition="all 0.3s"
      borderColor="whiteAlpha.200"
      border="1px solid"
      backdropFilter="blur(10px)"
      className="fire-card"
    >
      <Icon as={icon} w={6} h={6} className="fire-icon" />
    </Box>
    <Box>
      <Text fontWeight="bold" fontSize="lg" mb={1} color="whiteAlpha.900">
        {title}
      </Text>
      <Text color="whiteAlpha.800">
        {content}
      </Text>
    </Box>
  </MotionFlex>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: 'Message sent!',
        description: "We'll get back to you soon.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      minH="100vh"
      position="relative"
      overflow="hidden"
      py={{ base: 20, md: 28 }}
      bg="gray.300"
    >
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={12}>
          {/* Contact Form */}
          <GridItem>
            <VStack align="stretch" spacing={8}>
              <Box>
                <Heading
                  as="h1"
                  fontSize={{ base: '4xl', md: '5xl' }}
                  className="fire-text"
                  mb={4}
                >
                  Get in Touch
                </Heading>
                <Text fontSize="lg" color="whiteAlpha.900">
                  Have a question or want to work together? Let's connect!
                </Text>
              </Box>

              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <FormControl isRequired>
                    <FormLabel color="whiteAlpha.900">Name</FormLabel>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      bg="rgba(26, 32, 44, 0.7)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      _hover={{ borderColor: 'whiteAlpha.300' }}
                      _focus={{ 
                        borderColor: 'brand.500',
                        boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)'
                      }}
                      backdropFilter="blur(10px)"
                      color="whiteAlpha.900"
                      _placeholder={{ color: 'whiteAlpha.500' }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="whiteAlpha.900">Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      bg="rgba(26, 32, 44, 0.7)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      _hover={{ borderColor: 'whiteAlpha.300' }}
                      _focus={{ 
                        borderColor: 'brand.500',
                        boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)'
                      }}
                      backdropFilter="blur(10px)"
                      color="whiteAlpha.900"
                      _placeholder={{ color: 'whiteAlpha.500' }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="whiteAlpha.900">Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      minH="200px"
                      bg="rgba(26, 32, 44, 0.7)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      _hover={{ borderColor: 'whiteAlpha.300' }}
                      _focus={{ 
                        borderColor: 'brand.500',
                        boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)'
                      }}
                      backdropFilter="blur(10px)"
                      color="whiteAlpha.900"
                      _placeholder={{ color: 'whiteAlpha.500' }}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    className="fire-button"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                    color="white"
                    size="lg"
                    width="100%"
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </VStack>
          </GridItem>

          {/* Contact Information */}
          <GridItem>
            <VStack
              align="stretch"
              spacing={8}
              bg="rgba(26, 32, 44, 0.7)"
              p={8}
              borderRadius="xl"
              border="1px solid"
              borderColor="whiteAlpha.200"
              backdropFilter="blur(10px)"
              className="fire-card"
            >
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                className="fire-text"
                mb={4}
              >
                Contact Information
              </Heading>

              <VStack spacing={6} align="stretch" pt={4}>
                <ContactInfo
                  icon={FaEnvelope}
                  title="Email"
                  content="contact@example.com"
                  delay={0.2}
                />
                <ContactInfo
                  icon={FaPhone}
                  title="Phone"
                  content="+1 (555) 123-4567"
                  delay={0.3}
                />
                <ContactInfo
                  icon={FaMapMarkerAlt}
                  title="Location"
                  content="New York, NY 10001"
                  delay={0.4}
                />
              </VStack>

              <HStack spacing={6} pt={4}>
                <SocialLink
                  icon={FaGithub}
                  href="https://github.com"
                  label="GitHub"
                />
                <SocialLink
                  icon={FaLinkedin}
                  href="https://linkedin.com"
                  label="LinkedIn"
                />
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 