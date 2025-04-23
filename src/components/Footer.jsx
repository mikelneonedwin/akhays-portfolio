import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  Divider,
  useColorModeValue,
  ButtonGroup,
  IconButton,
  SimpleGrid,
  Stack,
  Tooltip,
} from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);
const MotionBox = motion(Box);

const SocialIcon = ({ icon: Icon, href, label }) => (
  <Tooltip label={label} hasArrow placement="top">
    <MotionBox
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      w="50px"
      h="50px"
      borderRadius="full"
      bg="rgba(26, 32, 44, 0.7)"
      border="1px solid"
      borderColor="whiteAlpha.200"
      backdropFilter="blur(10px)"
      className="fire-card"
      whileHover={{ 
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ rotate: 0 }}
    >
      <Icon size="24px" className="fire-icon" color="whiteAlpha.900" />
    </MotionBox>
  </Tooltip>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.700', 'white');
  const accentColor = useColorModeValue('blue.500', 'blue.300');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      label: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/yourusername',
    },
    {
      label: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/yourusername',
    },
    {
      label: 'Twitter',
      icon: FaTwitter,
      href: 'https://twitter.com/yourusername',
    },
    {
      label: 'Email',
      icon: FaEnvelope,
      href: 'mailto:your.email@example.com',
    },
  ];

  return (
    <Box
      as="footer"
      bg="gray.300"
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
      position="relative"
    >
      <Container maxW="container.xl" py={10}>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={8}
          mb={8}
        >
          {/* Brand Section */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="md" className="fire-text">Portfolio</Heading>
            <Text fontSize="sm" color="whiteAlpha.900">
              Building the future through code, one project at a time.
            </Text>
          </VStack>

          {/* Quick Links */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="md" color="whiteAlpha.900">Quick Links</Heading>
            <Stack spacing={2}>
              <Link href="/" className="fire-nav-item" color="whiteAlpha.900">Home</Link>
              <Link href="/assets" className="fire-nav-item" color="whiteAlpha.900">Projects</Link>
              <Link href="/contact" className="fire-nav-item" color="whiteAlpha.900">Contact</Link>
            </Stack>
          </VStack>

          {/* Social Links */}
          <VStack align="flex-start" spacing={4}>
            <Heading size="md" color="whiteAlpha.900">Connect</Heading>
            <HStack spacing={4}>
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.label}
                  icon={social.icon}
                  href={social.href}
                  label={social.label}
                />
              ))}
            </HStack>
          </VStack>
        </SimpleGrid>
        
        <Divider my={8} borderColor="whiteAlpha.200" />
        
        <Box
          pt={8}
          borderTop="1px solid"
          borderColor="whiteAlpha.200"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={4}
        >
          <Text fontSize="sm" color="whiteAlpha.900">
            © {currentYear} Portfolio. All rights reserved.
          </Text>
          <MotionBox
            whileHover={{ 
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ rotate: 0 }}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w="50px"
            h="50px"
            borderRadius="full"
            bg="rgba(26, 32, 44, 0.7)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            backdropFilter="blur(10px)"
            className="fire-card"
            cursor="pointer"
            onClick={scrollToTop}
          >
            <FaArrowUp size="20px" className="fire-icon" color="whiteAlpha.900" />
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 