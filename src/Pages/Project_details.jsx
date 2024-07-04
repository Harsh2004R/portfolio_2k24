import React from 'react'
import { Box, Center, Flex, Progress, Text, Grid } from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'
import { FaVideo } from 'react-icons/fa'

import Dji_home from "../Project_assets/Dji_home.png"
import Dji_search from "../Project_assets/Dji_search.png"
import Dji_buy from "../Project_assets/Dji_buy.png";
import Dji_hand from "../Project_assets/Dji_hand.png";
import Dji_login from "../Project_assets/Dji_login.png";
import Dji_cart from "../Project_assets/Dji_cart.png"

import DTV_home from "../Project_assets/DTV_home.png";
import DTV_login from "../Project_assets/DTV_login.png";
import DTV_dark_web from "../Project_assets/DTV_dark_web.png";
import DTV_videos from "../Project_assets/DTV_videos.png";
import DTV_vid_page from "../Project_assets/DTV_vid_page.png";
import DTV_buy from "../Project_assets/DTV_buy.png";
import DTV_pod from "../Project_assets/DTV_pod.png";
import DTV_3D from "../Project_assets/DTV_3D.png";
import { Link } from 'react-router-dom'



const DJI_TECH_STACK = [
    { name: "JWT", color: "#283593" },
    { name: "Justand", color: "#880E4F" },
    { name: "React", color: "#D500F9" },
    { name: "ROZER PAY", color: "#37474F" },
    { name: "CHAKRA UI", color: "#FF1744" },
    { name: "JSON", color: "#3E2723" },
    { name: "AXIOS", color: "#2962FF" },
    { name: "MULTER", color: "#004D40" },
    { name: "NODE.JS", color: "#651FFF" },
    { name: "EXPRESS", color: "#00897B" },
    { name: "MONGO DB", color: "#4DD0E1" },
    { name: "NODE MAILER", color: "#E64A19" },
    // {name:"",color:"#"},
]

const DJI_IMAGES = [
    Dji_home,
    Dji_search,
    Dji_buy,
    Dji_hand,
    Dji_login,
    Dji_cart

]

const Dare_To_Visit_url = "https://i.ibb.co/QJ5KVHC/PC1.png"
const DARE_TO_VISIT_TECH_STACK = [
    { name: "EXPRESS", color: "#F9A825" },
    { name: "NODE.JS", color: "#455A64" },
    { name: "MONGO DB", color: "#3E2723" },
    { name: "CHAKRA UI", color: "#FF5252" },
    { name: "REACT", color: "#00BCD4" },
    { name: "NODE MAILER", color: "#AA00FF" },
    { name: "VANILLA", color: "#7B1FA2" },
    { name: "MULTER", color: "#F50057" },
    { name: "AXIOS", color: "#33691E" },
    { name: "BCRYPT", color: "#C6FF00" },
    { name: "JWT", color: "#BF360C" },
    { name: "EJS", color: "#536DFE" },
]

const DTV_IMAGES = [
    DTV_home,
    DTV_3D,
    DTV_login,
    DTV_pod,
    DTV_buy,
    DTV_dark_web,
    DTV_vid_page,
    DTV_videos
]

const Project_details = () => {
    return (
        <>
            <Box w="100%" h="auto" p={5}>
                <Flex gap={{ base: "0", md: "2" }} flexDirection={{ base: "column", md: "row" }} w="100%" h="100%" >
                    <Box w="100%" h="100%"  >
                        <Flex gap={6} flexDirection={{ base: "column", md: "Column" }} w="100%" h="100%" >
                            <Box w="100%" height={{ base: "auto", md: "auto" }} bg="#1F1F1F" borderRadius={"xl"}>
                                <Center transition="0.5s ease" _hover={{ cursor: 'pointer', borderRadius: "xl", transition: "0.5s ease", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #ffffff" }} h="100%" w="100%" p="3">
                                    <Text color="#fff" textAlign={"left"} fontWeight={"bold"} fontSize={{ base: "3xl", md: "32px" }}>Turning <Text color="#43A047" as="span">Ideas</Text> into Innovation: Explore Our Projects!</Text>
                                </Center>
                            </Box>


                            <Box w="100%" h="auto"
                            //  border={"2px solid grey"}
                            >
                                <Box
                                    // border={"1px solid grey"}
                                    w="100%" h={{ base: "250px", md: "300px" }} borderTopRightRadius={"2xl"} borderTopLeftRadius={"2xl"}
                                    bgImage={`url(${Dji_home})`}
                                    bgSize="cover" objectFit="cover"
                                    bgPosition="center" alt="DJI PROJECT Image"
                                    bgRepeat="no-repeat"
                                > </Box>
                                <Box
                                    // border={"1px solid red"}
                                    w="100%" h="auto" bg="#1F1F1F" >

                                    <Box w="100%" h="100px" >


                                        <Flex w="100%" h="100%">
                                            <Box
                                                // border={"1px solid green"}
                                                p={4} display={"flex"} flexDirection={"column"} alignItems={"left"} alignContent={"center"} justifyContent={"center"} h="100%" w="70%" >
                                                {/* Title of your project....... */}
                                                <Text bgGradient="linear(to-r, teal.500, red)" bgClip="text" fontSize={{ base: "2xl", md: "3xl" }} fontWeight={"500"} textAlign={"left"}>Dji Official Clone</Text>
                                                <Text bgGradient="linear(to-l, #37474F, #FAFAFA)" bgClip="text" fontSize={{ base: "15px", md: "16px" }} fontWeight={"450"} textAlign={"left"}>By - Harsh Sharma</Text>
                                            </Box>
                                            <Center
                                                // border={"1px solid green"}
                                                display={"flex"} flexDirection={{ base: "column", md: "row" }} justifyContent={"space-evenly"} h="100%" w="30%" >
                                                <Box transition="0.5s ease" _hover={{ transition: "0.3s ease", fontWeight: "600", bg: "#388E3C", cursor: "pointer", boxShadow: "#FFEB3B 0px 20px 30px -10px" }} p="1" display={"flex"} justifyContent={"space-evenly"} flexDirection={"row"} alignItems={"center"} w={{ base: "50px", md: "80px" }} h={{ base: "28px", md: "35px" }} bg="#C62828" borderRadius={"2xl"}>
                                                    <Link to="https://github.com/Harsh2004R/drone_site"> <Text fontSize={{ base: "0", md: "12px" }} color="#fff">Demo</Text> </Link>
                                                    <FaVideo size={"20px"} color="#fff" />
                                                </Box>
                                                <Box transition="0.5s ease" _hover={{ transition: "0.3s ease", fontWeight: "600", bg: "#4E342E", cursor: "pointer", boxShadow: "#FFEB3B 0px 20px 30px -10px" }} p="1" display={"flex"} justifyContent={"space-evenly"} flexDirection={"row"} alignItems={"center"} w={{ base: "50px", md: "80px" }} h={{ base: "28px", md: "35px" }} bg="#1565C0" borderRadius={"2xl"}>
                                                    <Link to="https://github.com/Harsh2004R/drone_site"> <Text fontSize={{ base: "0", md: "12px" }} color="#fff">Github</Text> </Link>
                                                    <BsGithub size={"20px"} color="#fff" />
                                                </Box>
                                            </Center>
                                        </Flex>



                                    </Box>
                                    <Box
                                        // border="1px solid cyan"
                                        p="4" w="100%" h="auto" >
                                        {/* Discription of your project....... */}
                                        <Text fontSize={{ base: "14px", md: "16px" }} textAlign={"justify"} color="#CFD8DC">
                                            DJIclone served as a comprehensive replication of the official DJI website,
                                            meticulously designed to provide a fully functional and immersive user
                                            experience. This platform offered an extensive range of DJI products,
                                            including drones, cameras, and accessories, mirroring the features
                                            and interface of the original site. Through DJIclone, users could
                                            explore detailed product descriptions, view high-quality images,
                                            and access support resources, ensuring an authentic and informative
                                            browsing experience.
                                        </Text>
                                        <Box w="100%" mt="20px" h="auto" >
                                            <Grid gap={2} gridTemplateColumns={{ base: "repeat(3,1fr)", md: "repeat(6,1fr)" }}>

                                                {DJI_TECH_STACK.map((el, i) => (
                                                    <Box key={i} bg={el.color} p={3} borderRadius={"md"} justifyContent={"center"} display={"flex"} alignContent={"center"} alignItems={"center"} w={{ base: "auto", md: "auto" }} h={{ base: "30px", md: "25px" }}>
                                                        <Text fontSize={{ base: "9px", md: "12px" }} color="#fff">{el.name}</Text>
                                                    </Box>
                                                ))}

                                            </Grid>

                                            <Progress mt="20px" size='lg' value={86} colorScheme={"blue"} borderRadius={"xl"} />
                                            <Text mt="20px" fontSize={{ base: "22px", md: "26px" }} fontWeight={"bolder"} color='#fff'>Prototype Screenshots 👇</Text>
                                            <Grid mt="20px" gap={2} w="100%" h="auto" gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)" }}>
                                                {DJI_IMAGES.map((el, i) => (
                                                    <Box
                                                        bgImage={`url(${el})`}
                                                        bgSize="cover" objectFit="cover"
                                                        bgPosition="center" alt="Zoomable Image"
                                                        bgRepeat="no-repeat" transition="0.5s ease" _hover={{ transform: 'scale(1.04)', transition: "0.5s ease" }}
                                                        borderRadius={"xl"} w={{ base: "100%", md: "100%" }} h={{ base: "100px", md: "130px" }}>

                                                    </Box>
                                                ))}
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>






























                    <Box
                        // border={"1px solid yellow"}
                        w="100%" h="100%" >
                        <Box
                            // border="1px solid cyan"
                            w="100%" h="auto" >
                            <Box w="100%" h="auto"
                            //  border={"2px solid grey"}
                            >
                                <Box
                                    // border={"1px solid grey"}
                                    w="100%" h={{ base: "250px", md: "300px" }} borderTopRightRadius={"2xl"} borderTopLeftRadius={"2xl"}
                                    bgImage={`url(${Dare_To_Visit_url})`}
                                    bgSize="cover" objectFit="cover"
                                    bgPosition="center" alt="DJI PROJECT Image"
                                    bgRepeat="no-repeat"
                                > </Box>
                                <Box
                                    // border={"1px solid red"}
                                    w="100%" h="auto" bg="#1F1F1F" >

                                    <Box w="100%" h="100px" >


                                        <Flex w="100%" h="100%">
                                            <Box
                                                // border={"1px solid green"}
                                                p={4} display={"flex"} flexDirection={"column"} alignItems={"left"} alignContent={"center"} justifyContent={"center"} h="100%" w="70%" >
                                                {/* Title of your project....... */}
                                                <Text bgGradient="linear(to-r, teal.500, red)" bgClip="text" fontSize={{ base: "2xl", md: "3xl" }} fontWeight={"500"} textAlign={"left"}>Dare to visit</Text>
                                                <Text bgGradient="linear(to-l, #37474F, #FAFAFA)" bgClip="text" fontSize={{ base: "15px", md: "16px" }} fontWeight={"450"} textAlign={"left"}>By - Harsh Sharma</Text>
                                            </Box>
                                            <Center
                                                // border={"1px solid green"}
                                                display={"flex"} flexDirection={{ base: "column", md: "row" }} justifyContent={"space-evenly"} h="100%" w="30%" >
                                                <Box transition="0.5s ease" _hover={{ transition: "0.3s ease", fontWeight: "600", bg: "#388E3C", cursor: "pointer", boxShadow: "#FFEB3B 0px 20px 30px -10px" }} p="1" display={"flex"} justifyContent={"space-evenly"} flexDirection={"row"} alignItems={"center"} w={{ base: "50px", md: "80px" }} h={{ base: "28px", md: "35px" }} bg="#C62828" borderRadius={"2xl"}>
                                                    <Link to="https://github.com/Harsh2004R/DTV/tree/main/dare-to-visit"> <Text fontSize={{ base: "0", md: "12px" }} color="#fff">Demo</Text> </Link>
                                                    <FaVideo size={"20px"} color="#fff" />
                                                </Box>
                                                <Box transition="0.5s ease" _hover={{ transition: "0.3s ease", fontWeight: "600", bg: "#4E342E", cursor: "pointer", boxShadow: "#FFEB3B 0px 20px 30px -10px" }} p="1" display={"flex"} justifyContent={"space-evenly"} flexDirection={"row"} alignItems={"center"} w={{ base: "50px", md: "80px" }} h={{ base: "28px", md: "35px" }} bg="#1565C0" borderRadius={"2xl"}>
                                                    <Link to="https://github.com/Harsh2004R/DTV/tree/main/dare-to-visit">  <Text fontSize={{ base: "0", md: "12px" }} color="#fff">Github</Text> </Link>
                                                    <BsGithub size={"20px"} color="#fff" />
                                                </Box>
                                            </Center>
                                        </Flex>



                                    </Box>
                                    <Box
                                        // border="1px solid cyan"
                                        p="4" w="100%" h="auto" >
                                        {/* Discription of your project....... */}
                                        <Text fontSize={{ base: "14px", md: "16px" }} textAlign={"justify"} color="#CFD8DC">
                                            Dare to Visit is an immersive web platform that provides users with spine-chilling
                                            adventures across various horror and thriller experiences. As the creator,
                                            I combined multiple elements of horror entertainment into one engaging
                                            platform. Key features include:--- Horror Video Collection, Thriller Podcasts,
                                            3D Virtual Tours, Dark Web Content,
                                            User-Generated Horror Reels ,Additional Activities.
                                            Dare to Visit showcases my passion for horror and thriller genres, combining
                                            different media into a thrilling experience and demonstrating my
                                            skills in web development and content creation


                                        </Text>
                                        <Box w="100%" mt="20px" h="auto" >
                                            <Grid gap={2} gridTemplateColumns={{ base: "repeat(3,1fr)", md: "repeat(6,1fr)" }}>

                                                {DARE_TO_VISIT_TECH_STACK.map((el, i) => (
                                                    <Box key={i} bg={el.color} p={3} borderRadius={"md"} justifyContent={"center"} display={"flex"} alignContent={"center"} alignItems={"center"} w={{ base: "auto", md: "auto" }} h={{ base: "30px", md: "25px" }}>
                                                        <Text fontSize={{ base: "9px", md: "12px" }} color="#fff">{el.name}</Text>
                                                    </Box>
                                                ))}

                                            </Grid>

                                            <Progress mt="20px" size='lg' value={60} colorScheme={"green"} borderRadius={"xl"} />
                                            <Text mt="20px" fontSize={{ base: "22px", md: "26px" }} fontWeight={"bolder"} color='#fff'>Prototype Screenshots 👇</Text>
                                            <Grid mt="20px" gap={2} w="100%" h="auto" gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)" }}>
                                                {DTV_IMAGES.map((el, i) => (
                                                    <Box
                                                        bgImage={`url(${el})`}
                                                        bgSize="cover" objectFit="cover"
                                                        bgPosition="center" alt="Zoomable Image"
                                                        bgRepeat="no-repeat" transition="0.5s ease" _hover={{ transform: 'scale(1.04)', transition: "0.5s ease" }}
                                                        borderRadius={"xl"} w={{ base: "100%", md: "100%" }} h={{ base: "100px", md: "130px" }}>

                                                    </Box>
                                                ))}
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                </Flex >
            </Box >
        </>
    )
}

export default Project_details
