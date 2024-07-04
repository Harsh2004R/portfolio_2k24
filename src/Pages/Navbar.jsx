import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div>
            <Box w="100%" h='100%'>
                <Flex w="100%" m="auto" h={{ base: "8vh", md: "10vh" }} borderRadius={"xl"} bg="#1F1F1F">
                    <Center w="100%" h="100%" >
                        <Link to="projects" smooth={true} duration={500}> <Text fontSize={{ base: "16px", md: "20px" }} fontWeight={"500"} color="#fff" _hover={{ cursor: "pointer", color: "#1E88E5", transition: "0.3s ease" }}>
                            Projects
                        </Text>
                        </Link>
                    </Center>
                    <Center w="100%" h="100%" >
                        <Link to="about" smooth={true} duration={1000}>   <Text fontSize={{ base: "16px", md: "20px" }} fontWeight={"500"} color="#fff" _hover={{ cursor: "pointer", color: "#1E88E5", transition: "0.3s ease" }}>
                            About
                        </Text>
                        </Link>
                    </Center>
                    <Center w="100%" h="100%" >
                        <Link to="tech" smooth={true} duration={800}>   <Text fontSize={{ base: "16px", md: "20px" }} fontWeight={"500"} color="#fff" _hover={{ cursor: "pointer", color: "#1E88E5", transition: "0.3s ease" }}>
                            Tech
                        </Text>
                        </Link>
                    </Center>
                    <Center w="100%" h="100%">
                        <Link to="contact" smooth={true} duration={1200}>     <Text fontSize={{ base: "16px", md: "20px" }} fontWeight={"500"} color="#fff" _hover={{ cursor: "pointer", color: "#1E88E5", transition: "0.3s ease" }}>
                            Contact
                        </Text>
                        </Link>
                    </Center>
                </Flex>
            </Box>
        </div>
    )
}

export default Navbar
