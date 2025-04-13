import { Box, Text, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, useColorModeValue, Container, HStack, Icon, useColorMode } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Assets from './pages/Assets';
import Contact from './pages/Contact';
import { ErrorBoundary } from 'react-error-boundary';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { FaRocket } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionDrawerContent = motion(DrawerContent);
const MotionIcon = motion(Icon);

// Animated Rocket component
const AnimatedRocket = () => {
  const rocketPath = {
    start: { x: -20, y: 10 },
    end: { x: 20, y: -10 }
  };

  return (
    <MotionBox
      position="absolute"
      animate={{
        x: [rocketPath.start.x, rocketPath.end.x, rocketPath.start.x],
        y: [rocketPath.start.y, rocketPath.end.y, rocketPath.start.y],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ 
        transformOrigin: "center",
        zIndex: 2
      }}
    >
      <Icon 
        as={FaRocket} 
        color={useColorModeValue('blue.400', 'blue.300')}
        w={4} 
        h={4}
      />
    </MotionBox>
  );
};

// Honeycomb pattern component
const HoneycombPattern = ({ isOpen }) => {
  const bgColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 0.1)');
  
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      overflow="hidden"
      opacity={0.3}
      pointerEvents="none"
    >
      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)'],
          gap: ['20px', '30px', '40px'],
          padding: ['20px', '30px', '40px'],
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: isOpen ? 1 : 0.5,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ 
          duration: 3,
          delay: 1,
          ease: "easeOut"
        }}
      >
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              width: '100%',
              paddingBottom: '115.47%', // Hexagon aspect ratio
              position: 'relative',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: bgColor,
              border: '1px solid',
              borderColor: useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 0.1)'),
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: isOpen ? 1 : 0,
              rotate: isOpen ? 360 : 0,
            }}
            transition={{ 
              duration: 3,
              delay: 1 + (i * 0.1),
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
    </Box>
  );
};

console.log('App component is being rendered');

function ErrorFallback({ error }) {
  return (
    <Box p={4} color="red.500">
      <Text>Something went wrong:</Text>
      <Text>{error.message}</Text>
    </Box>
  );
}

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <Box
          display="flex"
          flexDirection="column"
          minH="100vh"
          position="relative"
          bg={useColorModeValue('gray.50', 'gray.900')}
        >
          {/* Header */}
          <Box
            as="header"
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow="sm"
            height={{ base: "60px", md: "70px", lg: "80px" }}
            transform="translateZ(0)"
            backdropFilter="blur(8px)"
            backgroundColor={useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(26, 32, 44, 0.9)')}
            borderBottom="1px solid"
            borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
            <Container 
              maxW="container.xl" 
              px={{ base: 4, md: 6, lg: 8 }}
              height="100%"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
              >
                <Link to="/">
                  <Box position="relative" p={2}>
                    <AnimatedRocket />
                    <Text
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="bold"
                      bgGradient="linear(to-r, blue.400, purple.500)"
                      bgClip="text"
                      position="relative"
                      zIndex={1}
                    >
                      Portfolio
                    </Text>
                  </Box>
                </Link>

                {/* Desktop Navigation */}
                <HStack
                  spacing={{ base: 4, md: 6, lg: 8 }}
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="center"
                >
                  <Link to="/">
                    <MotionBox
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      px={3}
                      py={2}
                    >
                      Home
                    </MotionBox>
                  </Link>
                  <Link to="/assets">
                    <MotionBox
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      px={3}
                      py={2}
                    >
                      Proof of Work
                    </MotionBox>
                  </Link>
                  <Link to="/contact">
                    <MotionBox
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      px={3}
                      py={2}
                    >
                      Contact Us
                    </MotionBox>
                  </Link>
                  <MotionBox
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      onClick={toggleColorMode}
                      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                      variant="unstyled"
                      colorScheme="blue"
                      aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
                      _hover={{
                        bg: useColorModeValue('blue.50', 'blue.900'),
                      }}
                      _active={{
                        border: 'none',
                        outline: 'none',
                        boxShadow: 'none'
                      }}
                      _focus={{
                        border: 'none',
                        outline: 'none',
                        boxShadow: 'none'
                      }}
                      sx={{
                        border: 'none !important',
                        outline: 'none !important',
                        boxShadow: 'none !important'
                      }}
                    />
                  </MotionBox>
                </HStack>

                {/* Mobile Navigation */}
                <HStack spacing={2} display={{ base: 'flex', md: 'none' }}>
                  <IconButton
                    onClick={toggleColorMode}
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    variant="unstyled"
                    colorScheme="blue"
                    aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
                    _hover={{
                      bg: useColorModeValue('blue.50', 'blue.900'),
                    }}
                    _active={{
                      border: 'none',
                      outline: 'none',
                      boxShadow: 'none'
                    }}
                    _focus={{
                      border: 'none',
                      outline: 'none',
                      boxShadow: 'none'
                    }}
                    sx={{
                      border: 'none !important',
                      outline: 'none !important',
                      boxShadow: 'none !important'
                    }}
                  />
                  <IconButton
                    onClick={onOpen}
                    icon={<HamburgerIcon />}
                    variant="ghost"
                    aria-label="Open menu"
                  />
                </HStack>
              </Box>
            </Container>
          </Box>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {isOpen && (
              <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <MotionDrawerContent
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  position="relative"
                >
                  <HoneycombPattern isOpen={isOpen} />
                  <Box position="relative" zIndex={2}>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                      <VStack spacing={4} align="stretch">
                        <Link to="/" onClick={onClose}>
                          <MotionBox
                            whileHover={{ scale: 1.05, x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            p={2}
                          >
                            Home
                          </MotionBox>
                        </Link>
                        <Link to="/assets" onClick={onClose}>
                          <MotionBox
                            whileHover={{ scale: 1.05, x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            p={2}
                          >
                            Proof of Work
                          </MotionBox>
                        </Link>
                        <Link to="/contact" onClick={onClose}>
                          <MotionBox
                            whileHover={{ scale: 1.05, x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            p={2}
                          >
                            Contact Us
                          </MotionBox>
                        </Link>
                      </VStack>
                    </DrawerBody>
                  </Box>
                </MotionDrawerContent>
              </Drawer>
            )}
          </AnimatePresence>

          {/* Main Content Wrapper */}
          <Box
            as="main"
            flex="1"
            mt={{ base: "60px", md: "70px", lg: "80px" }}
            position="relative"
            zIndex={1}
            width="100%"
          >
            <Container
              maxW="container.xl"
              px={{ base: 4, md: 6, lg: 8 }}
              py={{ base: 6, md: 8, lg: 10 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assets" element={<Assets />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Container>
          </Box>

          <Footer />
        </Box>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
