import React from 'react'
import { Box, Text, Center, Flex, Grid } from "@chakra-ui/react"
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom';


const MINI_PROJECT_DETAILS = [
    { github: "https://github.com/vaibhav7895/dapper-nation-4838", discription: "A collaborative project of five friends from all over India,this travel website allows users to easily purchase tourist and flight tickets. The platform features an intuitive interface, robust search functionality, and secure payment gateways, providing a seamless booking experience.", img: "https://i.ibb.co/sWkHyc6/travels.png" },
    { github: "https://github.com/Harsh2004R/rambunctious-attraction-3750", discription: "I developed Unique E-commerce, an app where users can buy all the latest trending clothes. The app features a user-friendly interface, a wide variety of fashion items, and secure payment options, providing a seamless shopping experience for fashion enthusiasts.", img: "https://i.ibb.co/PGq6fkK/koko.png" },
    { github: "https://github.com/Harsh2004R/gitHub_repository_viewer", discription: "I developed a GitHub repo viewer app that provides comprehensive information about GitHub users. The app allows users to view profiles, repositories, contributions, and other details, offering an intuitive and efficient way to explore and analyze GitHub activity and projects.", img: "https://i.ibb.co/9YGfrBV/github-user-name-repo-project.png" },
    { github: "https://github.com/Harsh2004R/Bcket_list_app", discription: "I developed a bucket wish app that helps users track their bucket list items with target dates. The app allows users to manage and organize their goals efficiently, including notifications for expired items, ensuring they stay motivated and on track to achieve their dreams and aspirations.", img: "https://i.ibb.co/j3k6Z8D/bucket.png" },
]

const TECH_STACK = [
    { name: "HTML", color: "#FF8F00" },
    { name: "CSS", color: "#4FC3F7" },
    { name: "JavaScript", color: "#FDD835" },
    { name: "EJS", color: "#D500F9" },


    { name: "Redux", color: "#00ACC1" },
    { name: "React", color: "#0288D1" },
    { name: "Bootstrap", color: "#EC407A" },
    { name: "Tailwind", color: "#5E35B1" },

    { name: "Python", color: "#C62828" },
    { name: "Expres", color: "#9FA8DA" },
    { name: "Git", color: "#424242" },
    { name: "Github", color: "#C0CA33" },


    { name: "Node.js", color: "#76FF03" },
    { name: "Vanilla", color: "#1DE9B6" },
    { name: "JSON", color: "#7C4DFF" },
    { name: "Mongo", color: "#BF360C" },
]

const OTHER_STACK = [
    { name: "Figma", color: "#7C4DFF" },
    { name: "Zustand", color: "#C62828" },
    { name: "Canva", color: "#0288D1" },
    { name: "JWT", color: "#4FC3F7" },
    { name: "Bcrypt", color: "#BF360C" },
    { name: "CORS", color: "#FDD835" },
    { name: "Netlify", color: "#EC407A" },
    { name: "Vercel", color: "#9FA8DA" },
]

const Mini_Projects = () => {
    return (
        <>
            <Box
                //  border="3px solid blue"
                p={4} w="100%" h="auto">
                <Flex gap={{ base: "2", md: "2" }} flexDirection={{ base: "column", md: "row" }} w="100%" h="auto" >

                    <Box
                        // border="3px solid #fff"
                        w="100%" h="auto" >
                        <Box w="100%" h={{ base: "auto", md: "auto" }} bg="#1F1F1F" borderRadius={"xl"}>
                            <Center transition={"0.5s ease"} _hover={{ cursor: 'pointer', borderRadius: "xl", transition: "0.5s ease", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #ffffff" }} h="auto" w="100%" p="3">
                                <Text color="#fff" textAlign={"left"} fontWeight={"bold"} fontSize={{ base: "3xl", md: "32px" }}>Some Dynamic <Text color="#C62828" as="span">Front-End</Text> Mini Projects</Text>
                            </Center>
                        </Box>

                        <Grid
                            // border="1px solid lime"
                            mt="20px" gap="2" gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }} w="100%" h="auto" >
                            {MINI_PROJECT_DETAILS.map((el, i) => (
                                <Flex
                                    bg="#1F1F1F" p="1" flexDirection={"column"} borderRadius={"2xl"}
                                    w="100%" h={{ base: "auto", md: "auto" }}
                                // border="2px solid lime"
                                >

                                    <Box w="100%" h="100%" >
                                        <Box
                                            borderTopRightRadius={"2xl"}
                                            borderTopLeftRadius={"2xl"}
                                            _hover={{ transform: "scale(1.04)", cursor: "pointer", transition: "0.4s linear" }}
                                            transition="0.5s ease"
                                            w="100%" h={{ base: "250px", md: "250px" }}
                                            bgImage={`url(${el.img})`}
                                            // {`url(${Dji_home})`}
                                            bgSize="cover" objectFit="cover"
                                            bgPosition="center" alt="DJI PROJECT Image"
                                            bgRepeat="no-repeat"
                                        >


                                        </Box>
                                        <Box w="100%" p={2}>
                                            <Text color="#FFFFFF">{el.discription}</Text>
                                        </Box>
                                        <Box w="100%" h="auto" p="5">
                                            <Link to={el.github}><Box _hover={{ cursor: "pointer" }} display={"flex"} justifyContent={"space-evenly"} pt={2} pb={2} m="auto" w="35%" h="100%" borderRadius={"xl"} bg="blue">
                                                <Text color="#fff" textAlign="center" fontWeight={"bold"} fontSize={"xs"}>View Github</Text>
                                                <BsGithub color="#fff" />
                                            </Box>
                                            </Link>
                                        </Box>
                                    </Box>

                                </Flex>
                            ))}



                        </Grid>

                    </Box>



                    <Box p={{ base: "5", md: "5" }} w="100%" h="auto" bg="#1F1F1F" borderRadius={"2xl"} >
                        <Text mb="20px" color="#fff" fontWeight={"bolder"} fontSize={{ base: "3xl", md: "4xl" }} textAlign={"center"}>Tech Stack</Text>
                        <Grid gap={3} gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }} w={{ base: "100%", md: "90%" }} m="auto" h="auto" >
                            {TECH_STACK.map((el, i) => (
                                <Box
                                    bg={el.color}
                                    _hover={{ transition: "0.5s ease", transform: "scale(1.04)", cursor: "pointer" }} transition="0.5s ease"
                                    display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} w={{ base: "100%%", md: "100%%" }} h={{ base: "60px", md: "60px" }} borderRadius={"xl"} border="1px solid grey" >
                                    <Text fontWeight={"bold"} color="#fff">{el.name}</Text>
                                </Box>
                            ))}




                        </Grid>


                        <Text mt="30px" mb="20px" color="#fff" fontWeight={"bolder"} fontSize={{ base: "3xl", md: "4xl" }} textAlign={"center"}>Others</Text>
                        <Grid gap={3} gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }} w={{ base: "100%", md: "90%" }} m="auto" h="auto" >
                            {OTHER_STACK.map((el, i) => (
                                <Box
                                    bg={el.color}
                                    _hover={{ transition: "0.5s ease", transform: "scale(1.04)", cursor: "pointer" }} transition="0.5s ease"
                                    display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} w={{ base: "100%%", md: "100%%" }} h={{ base: "60px", md: "60px" }} borderRadius={"xl"} border="1px solid grey" >
                                    <Text fontWeight={"bold"} color="#fff">{el.name}</Text>
                                </Box>
                            ))}




                        </Grid>
                    </Box>
                </Flex>
            </Box>

        </>
    )
}

export default Mini_Projects
