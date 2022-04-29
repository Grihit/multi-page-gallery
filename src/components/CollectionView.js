import React from "react"
import {Flex, Text, Grid, GridItem, Img} from '@chakra-ui/react'
import { nanoid } from "nanoid"

export default function CollectionView(props){
    const collection = props.collection
    const imgElements = collection.Images.map(img => {
        return <GridItem key={nanoid()}>
            <Img src={img.thumbUrl} alt={img.name} w={'full'}/>
        </GridItem>
    })
    return(
        <Flex 
            flexDir={'column'} 
            p={'30px'}
            w={'full'}
            overflowY={'auto'}
            maxH={"calc(100vh - 80px)"}
            css={{
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'rgb(199, 199, 199)',
                  borderRadius: '24px',
                },
              }} 
        >
            <Text fontSize={'3vw'} fontWeight={'500'}>{collection.title}</Text>
            <Text fontSize={'2vw'} marginTop={'15px'}>{collection.description}</Text>
            <Grid templateColumns={'repeat(4, 1fr)'} gap={'30px'} w={'full'} marginTop={'20px'}>
                {imgElements}
            </Grid>
        </Flex>
    )
}