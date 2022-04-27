import React from 'react'
import {
    Box,
    Flex,
    Text,
    HStack,
    Button
} from '@chakra-ui/react'

export default function Home(){
    return(
        <Flex
            justifyContent={'center'}
            alignItems={'center'}
            minH={'calc(80vh - 80px)'}
            w={'100vw'}
        >
            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                flexDir={'column'}
                w={'60%'}
            >
                <Text
                    fontFamily={'Inter, sans-serif'}
                    fontWeight={'700'}
                    fontSize={'5xl'}
                >
                    Welcome to <span style={{color: '#39c0ba'}}> Image Gallery </span>
                </Text>
                <HStack spacing={'50px'} marginTop={'30px'}>
                    <Button 
                        colorScheme={'teal'} 
                        size={'lg'}
                    >
                        Add Collection
                    </Button>
                    <Button 
                        colorScheme={'teal'} 
                        size={'lg'}
                    >
                        View Collections
                    </Button>
                </HStack>
            </Flex>

        </Flex>
    )
}