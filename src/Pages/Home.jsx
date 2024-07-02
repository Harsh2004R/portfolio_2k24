import React, { useState } from 'react'
import Navbar from './Navbar'
import { Box, Button, Center, Flex, VStack, Text, Image, useColorModeValue } from '@chakra-ui/react';
import { Link as ScrollLink, Element } from 'react-scroll';
import CountUp from 'react-countup';
// import profile from "../Profile/myPIC.jpg"
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import Projects from './Projects';
import Project_details from './Project_details';
import Mini_Projects from './Mini_Projects';


const primaryUrl = "https://img.freepik.com/premium-photo/3d-animation-character-cartoon_113255-10536.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais_user";
const fallbackUrl = "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100221.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais_user";

function Home() {

  const [profile, setProfile] = useState(primaryUrl)
  const handleError = () => {
    // Fall back image setting here......
    setProfile(fallbackUrl);
  }


  return (
    <>

      <Box h={"1000vh"} w="100%" bg="#000000" >


        <Flex direction={{ base: "column", md: "row" }} w="100%" h={{ base: "auto", md: "50vh" }} bg='#000000' pt="20px">



          <Box
            //  border={"1px solid red"}
            w="100%" h={{ base: "auto", md: "50vh" }}>
            <Navbar />
            <Flex
              // border={"1px solid lime"}
              flexDirection={{ base: "column", md: "row" }} w="100%" h="auto" >
              <Box w="100%" h={{ base: "40vh", md: "40vh" }} p="3">
                <Box borderRadius={"xl"} w="90%" m="auto" h="100%" overflow="hidden" position="relative" >
                  <Image borderRadius={"xl"} w="100%" h="100%" src={profile} onError={handleError} alt="profile.png"
                    transition="transform 0.5s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                </Box>
              </Box>
              <Box w="100%" h={{ base: "40vh", md: "40vh" }} >
                <Flex flexDirection={"column"} w="100%" h="100%" p={2}>

                  <Box position="relative" w="100%" h="60%" borderRadius="xl" overflow="hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27938.04426002731!2d79.94866820609393!3d28.920462996482794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0511d1e63d2b3%3A0x6c8b4465ad7665ec!2sKhatima%2C%20Uttarakhand%20262308!5e0!3m2!1sen!2sin!4v1719642235055!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </Box>

                  <Box w="100%" m="auto" h="35%" bg="#1F1F1F" borderRadius={"xl"}>
                    <Flex _hover={{ cursor: "pointer" }} w="100%" h="100%" justifyContent={"space-evenly"} alignItems={"center"}>

                      <BsGithub size={"40px"} color="#fff" />
                      <BsLinkedin size={"40px"} color="#fff" />
                      <BsInstagram size={"40px"} color="#fff" />
                      <MdEmail size={"40px"} color="#fff" />

                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>











          <Box p={2} w="100%"
            // border={"1px solid green"} 
            h={{ base: "auto", md: "100%" }} >
            <Box w="90%" m="auto" height={{ base: "100px", md: "18vh" }} bg="#1F1F1F" borderRadius={"xl"}>
              <Center _hover={{ cursor: 'pointer', backgroundColor: "#0074f5", borderRadius: "xl", transition: "0.5s ease", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #ffffff" }} h="100%" w="100%" p="5">
                <Text color="#fff" textAlign={"left"} fontWeight={"bold"} fontSize={{ base: "3xl", md: "5xl" }}>Make Your Web Vision Real With Us</Text>
              </Center>


            </Box>
            <Flex w="90%" m="auto" h="auto" direction={{ base: "column", md: "row" }} mt="25px" gap={"5"}>

              <Box w={{ base: "100%", md: "100%" }} borderRadius={"xl"} h="25vh" bg="#1D4ED8" >
                <Center display={"flex"} flexDirection={"column"} h="100%" w="100%" p="5">
                  <Text color="#fff" textAlign={"left"} fontWeight={"500"} fontSize={{ base: "3xl", md: "3xl" }}>
                    <CountUp start={0} end={2} duration={1} />+
                  </Text>
                  <Text color="#fff">
                    Years Experience
                  </Text>
                </Center>
              </Box>
              <Box w={{ base: "100%", md: "100%" }} borderRadius={"xl"} h="25vh" bg="#B91C1C">
                <Center display={"flex"} flexDirection={"column"} h="100%" w="100%" p="5">
                  <Text color="#fff" textAlign={"left"} fontWeight={"500"} fontSize={{ base: "3xl", md: "3xl" }}>
                    <CountUp start={0} end={14} duration={2} />+
                  </Text>
                  <Text color="#fff">
                    Projects Completed
                  </Text>
                </Center>
              </Box>
              <Box w={{ base: "100%", md: "100%" }} borderRadius={"xl"} h="25vh" bg="#FACC15"  >
                <Center display={"flex"} flexDirection={"column"} h="100%" w="100%" p="5">
                  <Text color="#fff" textAlign={"left"} fontWeight={"500"} fontSize={{ base: "3xl", md: "3xl" }}>
                    <CountUp start={0} end={5} duration={1} />+
                  </Text>
                  <Text color="#fff">
                    Clients Served
                  </Text>
                </Center>
              </Box>

            </Flex>
          </Box>
        </Flex >


        <Projects />



        <Project_details />


        <Mini_Projects />















        {/* <Flex as="nav" bg="teal.500" p={4} color="white" justify="space-around">
          <ScrollLink to="projects" smooth={true} duration={500}>
            <Button variant="ghost" colorScheme="teal">
              Projects
            </Button>
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500}>
            <Button variant="ghost" colorScheme="teal">
              Skills
            </Button>
          </ScrollLink>
        </Flex> */}

        {/* <VStack spacing={16} align="stretch" p={8}>
          <Element name="projects">
            <Box border="1px solid red" h="100vh" w="100%" bg="gray.100" p={8} borderRadius="md">
              <h2>Projects Section</h2>
              
              <Navbar />
            </Box>
          </Element>

          <Element name="skills">
            <Box  border="1px solid red" h="100vh" w="100%"  bg="gray.100" p={8} borderRadius="md">
              <h2>Skills Section</h2>
           
            </Box>
          </Element>
        </VStack> */}
      </Box >
    </>
  )
}

export default Home
