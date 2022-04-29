import React from "react"
import {Flex, Text, Grid} from '@chakra-ui/react'

export default function CollectionView(props){
    const collection = props.collection
    return(
        <Flex 
            flexDir={'column'} 
            p={'30px'} 
        >
            <Text fontSize={'3vw'} fontWeight={'500'}>{collection.title}</Text>
            <Text fontSize={'2vw'} marginTop={'15px'}>{collection.description}</Text>
        </Flex>
    )
}