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
} from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.700', 'white');
  const accentColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <Box
      as="footer"
      bg={bgColor}
      color={textColor}
      borderTop="1px"
      borderColor={borderColor}
    >
      <Container maxW="container.xl" py={10}>
        <Grid 
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={{ base: 8, md: 12 }}
        >
          {/* Company Info */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Heading 
                as="h3"
                size="md"
                color={headingColor}
                fontWeight="600"
              >
                Portfolio
              </Heading>
              <Text fontSize="sm" lineHeight="tall">
                Creating beautiful digital experiences with cutting-edge technology
                and thoughtful design.
              </Text>
              <HStack spacing={4} pt={2}>
                <IconButton
                  as={Link}
                  href="https://github.com"
                  aria-label="GitHub"
                  icon={<FaGithub size={24} />}
                  size="md"
                  isExternal
                  variant="ghost"
                  color={textColor}
                  _hover={{ color: accentColor, bg: 'transparent' }}
                />
                <IconButton
                  as={Link}
                  href="https://twitter.com"
                  aria-label="Twitter"
                  icon={<FaTwitter size={24} />}
                  size="md"
                  isExternal
                  variant="ghost"
                  color={textColor}
                  _hover={{ color: accentColor, bg: 'transparent' }}
                />
                <IconButton
                  as={Link}
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin size={24} />}
                  size="md"
                  isExternal
                  variant="ghost"
                  color={textColor}
                  _hover={{ color: accentColor, bg: 'transparent' }}
                />
              </HStack>
            </VStack>
          </GridItem>

          {/* Links */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Heading 
                as="h3" 
                size="md"
                color={headingColor}
                fontWeight="600"
              >
                Quick Links
              </Heading>
              <VStack align="flex-start" spacing={2}>
                <Link href="/" _hover={{ color: accentColor }}>Home</Link>
                <Link href="/assets" _hover={{ color: accentColor }}>Projects</Link>
                <Link href="/contact" _hover={{ color: accentColor }}>Contact</Link>
              </VStack>
            </VStack>
          </GridItem>

          {/* Contact Info */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Heading 
                as="h3" 
                size="md"
                color={headingColor}
                fontWeight="600"
              >
                Contact
              </Heading>
              <VStack align="flex-start" spacing={2}>
                <Flex align="center">
                  <Icon as={FaEnvelope} mr={2} boxSize={5} />
                  <Link href="mailto:contact@portfolio.com" _hover={{ color: accentColor }}>
                    contact@portfolio.com
                  </Link>
                </Flex>
                <Flex align="center">
                  <Icon as={FaPhone} mr={2} boxSize={5} />
                  <Text>+1 (555) 123-4567</Text>
                </Flex>
              </VStack>
            </VStack>
          </GridItem>
        </Grid>
        
        <Divider my={8} borderColor={borderColor} />
        
        <Flex 
          justify="space-between" 
          align="center"
          direction={{ base: "column", sm: "row" }}
          gap={{ base: 4, sm: 0 }}
          textAlign={{ base: "center", sm: "left" }}
        >
          <Text fontSize="sm">
            © {currentYear} Portfolio. All rights reserved.
          </Text>
          <HStack spacing={6} fontSize="sm">
            <Link href="#" _hover={{ color: accentColor }}>Privacy Policy</Link>
            <Link href="#" _hover={{ color: accentColor }}>Terms of Service</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer; 