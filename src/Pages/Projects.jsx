import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
    return (
        <>

            <Box
                // border="1px solid lime"
                mt="5vh" w="100%" h="50vh" >
                <Flex justifyContent={"space-between"} flexDirection={{ base: "column", md: "row" }} w="95%" m="auto" h="100%" border="1px solid red">
                    {/* project details box here.... */}
                    <Box p={{ base: "3", md: "3" }} w="100%" h="100%">
                        <Box w="100%" h="100%" bg="#1F1F1F" borderRadius={"2xl"}>

                        </Box>
                    </Box>
                    <Box p={{ base: "3", md: "8" }} w="100%" h="100%">
                        <Box w="100%" h="100%" bg="#1F1F1F" borderRadius={"2xl"}>

                        </Box>
                    </Box>
                </Flex>
            </Box>

        </>
    )
}

export default Projects
