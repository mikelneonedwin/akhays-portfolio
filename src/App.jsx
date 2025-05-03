import { Box, Text, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Container, HStack, Icon, Heading } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Assets from './pages/assets';
import { ErrorBoundary } from 'react-error-boundary';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaRocket, FaCode, FaPalette, FaGlobe } from 'react-icons/fa';
import './styles/animations.css';

const MotionBox = motion(Box);
const MotionDrawerContent = motion(DrawerContent);
const MotionIcon = motion(Icon);

// Enhanced AnimatedRocket component
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
        rotate: [0, 15, 0],
      }}
      transition={{
        duration: 3,
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
        color="brand.500"
        w={5} 
        h={5}
        className="fire-icon"
        filter="drop-shadow(0 0 8px rgba(255, 77, 77, 0.6))"
      />
    </MotionBox>
  );
};

// Enhanced navigation item component
const NavItem = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to}>
      <MotionBox
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        px={3}
        py={2}
        position="relative"
        className={`fire-nav-item ${isActive ? 'active' : ''}`}
      >
        {children}
      </MotionBox>
    </Link>
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

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <Box
          display="flex"
          flexDirection="column"
          minH="100vh"
          position="relative"
          bg="gray.300"
        >
          {/* Enhanced Header */}
          <Box
            as="header"
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            bg="rgba(24, 24, 24, 0.95)"
            boxShadow="dark-lg"
            height={{ base: "60px", md: "70px", lg: "80px" }}
            transform="translateZ(0)"
            backdropFilter="blur(10px)"
            borderBottom="1px solid"
            borderColor="whiteAlpha.100"
            transition="all 0.3s ease-in-out"
            className="fire-card"
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
                      className="fire-text"
                      position="relative"
                      zIndex={1}
                      letterSpacing="wider"
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
                  <NavItem to="/">Home</NavItem>
                  <NavItem to="/assets">Proof of Work</NavItem>
                </HStack>

                {/* Mobile menu button */}
                  <IconButton
                  display={{ base: 'flex', md: 'none' }}
                  onClick={onOpen}
                  variant="ghost"
                  icon={<HamburgerIcon />}
                  aria-label="Open menu"
                  size="lg"
                  className="fire-icon"
                  color="whiteAlpha.900"
                    _hover={{
                    bg: 'whiteAlpha.100'
                  }}
                />
              </Box>
            </Container>
          </Box>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {isOpen && (
              <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay bg="blackAlpha.800" />
                <MotionDrawerContent
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  position="relative"
                  bg="gray.300"
                >
                  <Box position="relative" zIndex={2}>
                    <DrawerCloseButton className="fire-icon" color="whiteAlpha.900" />
                    <DrawerHeader className="fire-text">Menu</DrawerHeader>
                    <DrawerBody>
                      <VStack spacing={4} align="stretch">
                        <NavItem to="/">Home</NavItem>
                        <NavItem to="/assets">Proof of Work</NavItem>
                      </VStack>
                    </DrawerBody>
                  </Box>
                </MotionDrawerContent>
              </Drawer>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <Box as="main" flex="1" mt={{ base: "60px", md: "70px", lg: "80px" }}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assets" element={<Assets />} />
              </Routes>
            </AnimatePresence>
          </Box>

          {/* Footer */}
          <Footer />
        </Box>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
