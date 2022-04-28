import React from "react";
import {
    Flex,
    Box,
    Text
} from '@chakra-ui/react'

export default function Sidebar(){
    return(
        <Flex 
            minH={'calc(100vh - 80px)'} 
            overflowY={'auto'} 
            maxW={'20vw'}
            boxShadow={'15px 0px 34px -19px rgba(57,192,186,0.2)'}
            flexDir={'column'}
        >
            <Text  
                p={'15px'} 
                fontSize={'2.5rem'} 
                fontWeight={'700'}
            >
                Collections
            </Text>
            <Box p={'15px'} m={''} cursor={'pointer'}>
                <Text fontSize={'1.5rem'}>Collection 1</Text>
            </Box>
            <Box p={'15px'} m={''} cursor={'pointer'}>
                <Text fontSize={'1.5rem'}>Collection 2</Text>
            </Box>
        </Flex>
    )
}