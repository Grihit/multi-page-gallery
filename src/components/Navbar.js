import React from "react";
import {
    Box,
    Flex, 
} from '@chakra-ui/react'
import {
    Link as RouterLink, 
} from "react-router-dom"


export default function Navbar() {
  return (
    <Box>
        <Flex 
            bg={'gray.50'} 
            w={'full'} 
            minH={'80px'}
            alignItems={'center'}
            boxShadow={'0px 15px 34px -19px rgba(57,192,186,0.3)'}
            paddingLeft={'20px'}
        >
            <RouterLink to="/">
                <img src="https://www.disecto.com/static/media/logo.244765c6.svg" alt="Disecto logo" /> 
            </RouterLink>
        </Flex>
    </Box>
  );
}
