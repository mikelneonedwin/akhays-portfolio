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
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

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
      bg={useColorModeValue('gray.100', 'gray.700')}
      borderRadius="lg"
      mr={4}
      transition="all 0.3s"
      _groupHover={{ bg: 'blue.500', color: 'white' }}
    >
      <Icon as={icon} w={6} h={6} />
    </Box>
    <Box>
      <Text fontWeight="bold" fontSize="lg" mb={1}>
        {title}
      </Text>
      <Text color={useColorModeValue('gray.600', 'gray.400')}>
        {content}
      </Text>
    </Box>
  </MotionFlex>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const toast = useToast();

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast({
        title: 'Message sent!',
        description: 'Thank you for your message. We will get back to you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }, 1500);
  };

  return (
    <Container 
      maxW="container.xl" 
    >
      <VStack spacing={8} align="stretch">
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          gap={{ base: 8, lg: 12 }}
          w="100%"
        >
          {/* Contact Information */}
          <GridItem>
            <VStack align="stretch" spacing={{ base: 6, md: 8 }}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Heading 
                  as="h1" 
                  size="2xl"
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  bgClip="text"
                  mb={4}
                >
                  Get in Touch
                </Heading>
                <Text 
                  fontSize={{ base: "lg", md: "xl" }}
                  color={useColorModeValue('gray.600', 'gray.400')}
                  maxW="500px"
                >
                  Have a question or want to work together? Feel free to reach out!
                </Text>
              </MotionBox>

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
            </VStack>
          </GridItem>

          {/* Contact Form */}
          <GridItem>
            <MotionBox
              as="form"
              onSubmit={handleSubmit}
              p={{ base: 6, md: 8 }}
              bg={bgColor}
              borderRadius="xl"
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <VStack spacing={5}>
                <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={5} w="full">
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        size="lg"
                        variant="filled"
                        transition="all 0.3s"
                        transform={focusedField === 'name' ? 'translateY(-2px)' : 'none'}
                        boxShadow={focusedField === 'name' ? 'md' : 'none'}
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'md'
                        }}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        size="lg"
                        variant="filled"
                        transition="all 0.3s"
                        transform={focusedField === 'email' ? 'translateY(-2px)' : 'none'}
                        boxShadow={focusedField === 'email' ? 'md' : 'none'}
                      />
                    </FormControl>
                  </GridItem>
                </Grid>

                <FormControl isRequired>
                  <FormLabel>Subject</FormLabel>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    size="lg"
                    variant="filled"
                    transition="all 0.3s"
                    transform={focusedField === 'subject' ? 'translateY(-2px)' : 'none'}
                    boxShadow={focusedField === 'subject' ? 'md' : 'none'}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    size="lg"
                    variant="filled"
                    rows={6}
                    transition="all 0.3s"
                    transform={focusedField === 'message' ? 'translateY(-2px)' : 'none'}
                    boxShadow={focusedField === 'message' ? 'md' : 'none'}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  w="full"
                  h="56px"
                  isLoading={isSubmitting}
                  loadingText="Sending..."
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.3s"
                >
                  Send Message
                </Button>
              </VStack>
            </MotionBox>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Contact; 