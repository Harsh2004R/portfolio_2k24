import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import Dji_home from "../Project_assets/Dji_home.png"
const text = "Harsh Sharma, a 20-year-old B.Sc (PCM) student. He founded the CorsWebDuo coding club, master to build advance fullstack Web App's, and is a proficient MERN stack developer. Harsh's entrepreneurial spirit led him to establish 'Dare to visit'. His achievements highlight his dedication to technology, education and innovation, making him a notable figure in the tech community."



const Projects = () => {

    const truncateText = (text, limit) => {
        if (text.length <= limit) {
            return text;
        }
        return text.substring(0, limit) + '...';
    };
    return (

        <>

            <Box
                // border="1px solid lime"
                mt="5vh" w="100%" h={{ base: "auto", md: "50vh" }} >
                <Flex
                    // border="1px solid red"
                    justifyContent={"space-between"} flexDirection={{ base: "column", md: "row" }} w="96%" m="auto" h="auto" >
                    {/* project details box here.... */}
                    <Box p={{ base: "3", md: "3" }} w="100%" h="auto">

                        <Box p={{ base: "3", md: "3" }} w="100%" h="100%" bg="#1F1F1F" borderRadius={"2xl"} >
                            <Box w="100%" h={{ base: "20%", md: "15%" }} >
                                <Flex alignItems={"center"} justifyContent={"space-between"} w="100%" h="100%">
                                    <Text fontSize={{ base: "18px", md: "23px" }} _hover={{ cursor: "pointer", color: "#03A9F4", transition: "0.3s ease" }} fontWeight={"bold"} color="#fff">Recent Work</Text>
                                    <Text fontSize={{ base: "15px", md: "18px" }} _hover={{ cursor: "pointer", color: "#dadada", transition: "0.3s ease" }} color="#9E9E9E">See All</Text>

                                </Flex>
                            </Box>

                            <Box mt="10px" w="100%" h={{base:"40vh",md:"30vh"}}>
                                <Flex gap={4} justifyContent={"space-between"} flexDirection={{base:"column",md:"row"}} w="100%" h="100%" >
                                    <Box borderRadius={"2xl"}  w={{base:"100%",md:"48%"}} h="100%"
                                    bgImage={`url(${Dji_home})`}
                                    bgSize="cover" objectFit="cover"
                                    bgPosition="center" alt="Dji Project Image"
                                    bgRepeat="no-repeat" transition="transform .4s"
                                    _hover={{ transform: 'scale(1.05)' }}
                                    >

                                    </Box>
                                    <Box borderRadius={"2xl"} w={{base:"100%",md:"48%"}} h="100%"
                                     bgImage="url('https://i.ibb.co/QJ5KVHC/PC1.png')"
                                     bgSize="cover" objectFit="cover"
                                     bgPosition="center" alt="Zoomable Image"
                                     bgRepeat="no-repeat" transition="transform .4s"
                                     _hover={{ transform: 'scale(1.05)' }}
                                    >

                                    </Box>
                                </Flex>

                            </Box>

                        </Box>

                    </Box>











                    <Box p={{ base: "3", md: "8" }} w={{base:"100%",md:"65%"}} h="auto" >
                        <Box p={{ base: "3", md: "3" }} w="100%" h="100%" bg="#1F1F1F" borderRadius={"2xl"} >
                            <Box w="100%" h={{ base: "20%", md: "15%" }} >
                                <Flex alignItems={"center"} justifyContent={"space-between"} w="100%" h="100%">
                                    <Text fontSize={{ base: "18px", md: "23px" }} fontWeight={"bold"} color="#fff">About</Text>
                                    <NavLink to="https://drive.google.com/file/d/1fj19qekBJPV7Gk-ZDzEvm40BZiOuQmzX/view"> <Text fontSize={{ base: "15px", md: "18px" }} _hover={{ cursor: "pointer", color: "#dadada", transition: "0.3s ease" }} color="#9E9E9E">Resume</Text></NavLink>
                                </Flex>
                            </Box>

                            <Box mt="10px">
                                <Text color="#bdc9d3" >
                                    {truncateText(text, 400)}
                                </Text>
                            </Box>

                        </Box>
                    </Box>
                </Flex>
            </Box>

        </>
    )
}

export default Projects
