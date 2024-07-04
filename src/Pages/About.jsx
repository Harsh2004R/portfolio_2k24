import React from 'react'
import { Box, Flex, Center, Text, Grid } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import one from "../About_me/one.jpg"
import two from "../About_me/two.jpg"
import three from "../About_me/three.jpg"
import four from "../About_me/four.jpg"
import five from "../About_me/five.jpg"
import six from "../About_me/six.jpg"
import seven from "../About_me/seven.jpg"
import eight from "../About_me/eight.jpg"
import nine from "../About_me/nine.jpg"
import ten from "../About_me/ten.jpg"
import eleven from "../About_me/eleven.jpg"
import twelve from "../About_me/twelve.jpg"
import thirteen from "../About_me/thirteen.jpg"


const mini_box_style = {

}

const About = () => {
    return (
        <>
            <Box
                // border="3px solid blue"
                p={5} mt="10px" w="100%" h="auto">
                <Flex
                    // border="3px solid red"
                    gap={{ base: "2", md: "2" }} flexDirection={{ base: "column", md: "row" }} w="100%" h="auto" >
                    <Box
                        // border="3px solid #fff"
                        w="100%" h="auto"  >
                        <Box w="100%" h={{ base: "auto", md: "auto" }} bg="#1F1F1F" borderRadius={"xl"}>
                            <Center transition={"0.5s ease"} _hover={{ cursor: 'pointer', borderRadius: "xl", transition: "0.5s ease", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #ffffff" }} h="auto" w="100%" p="3">
                                <Text
                                    color="#0d74da" textAlign={"left"} fontWeight={"bold"} fontSize={{ base: "3xl", md: "32px" }}
                                >
                                    About
                                    <Text color="#FFFFFF" as="span">
                                        {" "}Me - The
                                        <Text color="#0d74da" as={"span"} fontWeight={"bold"} fontSize={{ base: "3xl", md: "32px" }}>
                                            {" "}Story{" "}<Text color="#FFFFFF" as={"span"} fontWeight={"bold"} fontSize={{ base: "3xl", md: "32px" }}>Behind the Tech</Text>
                                        </Text>
                                    </Text>
                                </Text>
                            </Center>
                        </Box>
                        <Grid mt="20px" p={5} gap={2} gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }} bg="#1F1F1F" w="100%" h="auto" borderRadius={"2xl"}>

                            <Flex gap="2" w="100%" h="100%" >
                                <Flex gap="2" direction={"column"} w="100%" h="100%" >
                                    <Box bgImage={`url(${two})`} bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="DJI PROJECT Image"
                                        _hover={{
                                            transform: "rotateY(30deg) rotatex(-10deg)",
                                            transition: "transform 0.5s ease",
                                        }}
                                        transition="transform 0.8s ease"
                                        bgRepeat="no-repeat" w="100%" h={{ base: "130px", md: "140px" }} borderRadius={"xl"} >

                                    </Box>
                                    <Box bgImage={`url(${five})`} bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="DJI PROJECT Image"
                                        _hover={{
                                            transform: "rotateY(30deg) rotatex(-10deg)",
                                            transition: "transform 0.5s ease",
                                        }}
                                        transition="transform 0.8s ease"
                                        bgRepeat="no-repeat" w='100%' h={{ base: "130px", md: "140px" }} borderRadius={"xl"} >

                                    </Box>
                                    <Box bgImage={`url(${one})`} bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="DJI PROJECT Image"
                                        _hover={{
                                            transform: "rotateY(30deg) rotatex(-10deg)",
                                            transition: "transform 0.5s ease",
                                        }}
                                        transition="transform 0.8s ease"
                                        bgRepeat="no-repeat" w='100%' h={{ base: "180px", md: "250px" }} borderRadius={"xl"} >
                                    </Box>
                                </Flex>
                                <Flex gap="2" direction={"column"} w="100%" h="100%" >
                                    <Box bgImage={`url(${ten})`} bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="DJI PROJECT Image"
                                        _hover={{
                                            transform: "rotateY(30deg) rotatex(-10deg)",
                                            transition: "transform 0.5s ease",
                                        }}
                                        transition="transform 0.8s ease"
                                        bgRepeat="no-repeat" w='100%' h={{ base: "180px", md: "250px" }} borderRadius={"xl"} >
                                    </Box>
                                    <Box bgImage={`url(${six})`} bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="DJI PROJECT Image"
                                        _hover={{
                                            transform: "rotateY(30deg) rotatex(-10deg)",
                                            transition: "transform 0.5s ease",
                                        }}
                                        transition="transform 0.8s ease"
                                        bgRepeat="no-repeat" w="100%" h={{ base: "130px", md: "140px" }} borderRadius={"xl"}>

                                    </Box>
                                    <Box bgImage={`url(${seven})`} bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="DJI PROJECT Image"
                                        _hover={{
                                            transform: "rotateY(30deg) rotatex(-10deg)",
                                            transition: "transform 0.5s ease",
                                        }}
                                        transition="transform 0.8s ease"
                                        bgRepeat="no-repeat" w='100%' h={{ base: "130px", md: "140px" }} borderRadius={"xl"} >

                                    </Box>

                                </Flex>
                            </Flex>


                            <Flex gap="2" w="100%" h="100%" >
                                <Flex gap="2" direction={"column"} w="100%" h="100%" >
                                    <Box bgImage={`url(${eight})`} bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="DJI PROJECT Image"
                                        _hover={{
                                            transform: "rotateY(30deg) rotatex(-10deg)",
                                            transition: "transform 0.5s ease",
                                        }}
                                        transition="transform 0.8s ease"
                                        bgRepeat="no-repeat" w="100%" h={{ base: "130px", md: "140px" }} borderRadius={"xl"}>

                                    </Box>
                                    <Box bgImage={`url(${nine})`} bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="DJI PROJECT Image"
                                        _hover={{
                                            transform: "rotateY(30deg) rotatex(-10deg)",
                                            transition: "transform 0.5s ease",
                                        }}
                                        transition="transform 0.8s ease"
                                        bgRepeat="no-repeat" w='100%' h={{ base: "180px", md: "250px" }} borderRadius={"xl"} >
                                    </Box>
                                    <Box bgImage={`url(${eleven})`} bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="DJI PROJECT Image"
                                        _hover={{
                                            transform: "rotateY(30deg) rotatex(-10deg)",
                                            transition: "transform 0.5s ease",
                                        }}
                                        transition="transform 0.8s ease"
                                        bgRepeat="no-repeat" w='100%' h={{ base: "130px", md: "140px" }} borderRadius={"xl"} >

                                    </Box>

                                </Flex>
                                <Flex gap="2" direction={"column"} w="100%" h="100%">
                                    <Box bgImage={`url(${twelve})`} bgSize="cover" objectFit="cover"
                                        _hover={{
                                            transform: "rotateY(30deg) rotatex(-10deg)",
                                            transition: "transform 0.5s ease",
                                        }}
                                        transition="transform 0.8s ease"
                                        bgPosition="center" alt="DJI PROJECT Image"
                                        bgRepeat="no-repeat" w="100%" h={{ base: "130px", md: "140px" }} borderRadius={"xl"} >

                                    </Box>

                                    <Box bgImage={`url(${thirteen})`} bgSize="cover" objectFit="cover"
                                        _hover={{
                                            transform: "rotateY(30deg) rotatex(-10deg)",
                                            transition: "transform 0.5s ease",
                                        }}
                                        transition="transform 0.8s ease"
                                        bgPosition="center" alt="DJI PROJECT Image"
                                        bgRepeat="no-repeat" w='100%' h={{ base: "180px", md: "250px" }} borderRadius={"xl"}>
                                    </Box>
                                    <Box bgImage={`url(${four})`} bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="DJI PROJECT Image"
                                        bgRepeat="no-repeat" w='100%' h={{ base: "130px", md: "140px" }} borderRadius={"xl"}
                                        _hover={{
                                            transform: "rotateY(30deg) rotatex(-10deg)",
                                            transition: "transform 0.5s ease",
                                        }}
                                        transition="transform 0.8s ease"
                                    >
                                    </Box>
                                </Flex>
                            </Flex>

                        </Grid>
                    </Box>















                    <Flex direction={"column"} w="100%" h="auto">
                        <Flex direction={"column"} bg="#1F1F1F" w="100%" p={5} h="auto" borderRadius={"2xl"}>
                            <Box>

                            </Box>
                            <Text fontSize={{ base: "16px", md: "18px" }} color="#fff" >
                                I'm <Text fontSize={{ base: "16px", md: "18px" }} as={"span"} color="coral">Harsh Sharma</Text>, a 20-year-old B.Sc PCM student deeply passionate
                                about technology. My journey into the world of tech started with
                                a simple curiosity that blossomed into a full-fledged love for
                                coding and innovation. As the founder of the , <Text fontSize={{ base: "16px", md: "18px" }} as={"span"} color="blue">
                                    CorsWebDuo </Text>coding
                                club, I've had the opportunity to not only sharpen my skills but
                                also lead my team to victory in various Web vision.

                            </Text>

                            <Text mt="25px" fontSize={{ base: "16px", md: "18px" }} color="#fff">
                                The <Text fontSize={{ base: "16px", md: "18px" }} as={"span"} color="lime">MERN</Text> stack has been my playground, allowing me to craft dynamic
                                and impactful web applications. This journey has been one of perseverance,
                                creativity, and an unwavering drive to leave a mark in the tech industry.
                                In my quest for knowledge, I've embraced challenges and setbacks as
                                opportunities for learning and growth. This mindset has not only helped
                                me overcome obstacles but has also fueled my curiosity to explore new
                                technologies and their applications.My collaborative projects across all Indian friends
                                has provided me with a solid foundation in computer science principles,
                                which I've applied to real-world projects and challenges. This practical
                                experience has been invaluable in shaping my skills and preparing me for
                                a career in the tech industry.
                            </Text>

                            <Text mt="25px" fontSize={{ base: "16px", md: "18px" }} color="#fff">
                                Looking ahead, I am excited about the endless possibilities that technology
                                holds and am committed to making meaningful contributions to the field,
                                pushing the boundaries of innovation.
                            </Text>

                        </Flex>
                        <Link to="https://www.instagram.com/corswebduo?igsh=MWE4M2IxNzUxYXpwZg==">
                        <Box mt="20px" w="100%" h={{ base: "auto", md: "auto" }} bg="#1F1F1F" borderRadius={"xl"}>
                            <Center transition={"0.5s ease"} _hover={{ cursor: 'pointer', borderRadius: "xl", transition: "0.5s ease", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #ffffff" }} h="auto" w="100%" p="3">
                                <Text
                                    color="#FFFFFF" textAlign={"left"} fontWeight={"bold"} fontSize={{ base: "3xl", md: "32px" }}
                                >
                                    Instagram handle -
                                    <Text color="#0d74da" as="span">
                                        {" "}CorsWebDuo
                                    </Text>
                                </Text>
                            </Center>
                        </Box>
                    </Link>
                </Flex>





            </Flex >
        </Box >
        </>
    )
}

export default About
