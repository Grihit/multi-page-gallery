import React from "react";
import {
    Box,
    Flex, 
    Link
} from '@chakra-ui/react'
import {
    Link as ReachLink, 
    BrowserRouter as Router
} from "react-router-dom"

export default function Navbar() {
  return (
    <Box>
        <Flex 
            bg={'gray.100'} 
            w={'full'} 
            minH={'80px'}
            alignItems={'center'}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={'gray.300'}
            boxShadow={'md'}
            paddingLeft={'20px'}
        >
            <Router>
                <Link as={ReachLink} to='/'>
                    <img src="https://www.disecto.com/static/media/logo.244765c6.svg" />
                </Link>
            </Router>    
        </Flex>
    </Box>
  );
}
