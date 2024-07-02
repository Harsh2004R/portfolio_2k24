import { Box, Text, Center, Flex, Grid } from "@chakra-ui/react"
import React from 'react'

const Mini_Projects = () => {
    return (
        <>
            <Box p={4} w="100%" h="auto" border="1px solid red">
                <Flex gap={{ base: "0", md: "2" }} flexDirection={{ base: "column", md: "row" }} w="100%" h="100%" >

                    <Box
                        // border="1px solid red"
                        w="100%" h="100vh" >
                        <Box w="100%" h={{ base: "auto", md: "auto" }} bg="#1F1F1F" borderRadius={"xl"}>
                            <Center _hover={{ cursor: 'pointer', borderRadius: "xl", transition: "0.5s ease", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #ffffff" }} h="auto" w="100%" p="3">
                                <Text color="#fff" textAlign={"left"} fontWeight={"bold"} fontSize={{ base: "3xl", md: "32px" }}>Some Dynamic <Text color="#C62828" as="span">Front-End</Text> Mini Projects</Text>
                            </Center>
                        </Box>

                        <Grid
                            // border="1px solid lime"
                            mt="20px" gap="2" gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }} w="100%" h="auto" >

                            <Flex bg="#1F1F1F" p="1" flexDirection={"column"} borderRadius={"2xl"}
                                w="100%" h={{ base: "400px", md: "400px" }}>
                                <Box
                                    borderTopRightRadius={"2xl"}
                                    borderTopLeftRadius={"2xl"}
                                    _hover={{transform:"scale(1.04)",cursor:"pointer"}}
                                    w="100%" h="45%"
                                    bgImage="url('https://i.ibb.co/sWkHyc6/travels.png')"
                                    // {`url(${Dji_home})`}
                                    bgSize="cover" objectFit="cover"
                                    bgPosition="center" alt="DJI PROJECT Image"
                                    bgRepeat="no-repeat"
                                >


                                </Box>
                                <Box>

                                </Box>
                            </Flex>

                            <Box borderRadius={"2xl"} w="100%" h={{ base: "350px", md: "400px" }} border="1px solid grey">

                            </Box>
                        </Grid>

                    </Box>
                    <Box w="100%" h="100vh" border="1px solid red"></Box>
                </Flex>
            </Box>

        </>
    )
}

export default Mini_Projects
{/* <Box w="100%" h={{base:"auto",md:"auto"}} bg="#1F1F1F" borderRadius={"xl"}>
                        <Center _hover={{ cursor: 'pointer', borderRadius: "xl", transition: "0.5s ease", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #ffffff" }} h="auto" w="100%" p="3">
                            <Text color="#fff" textAlign={"left"} fontWeight={"bold"} fontSize={{ base: "3xl", md: "32px" }}>Some Dynamic <Text color="#C62828" as="span">Front-End</Text> Mini Projects</Text>
                        </Center>
                    </Box> */}