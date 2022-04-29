import React from "react"
import {Flex, Text, Grid, GridItem, Img, Input, IconButton} from '@chakra-ui/react'
import {CheckIcon, EditIcon} from '@chakra-ui/icons'
import { nanoid } from "nanoid"
import { useDispatch } from "react-redux";
import * as actionTypes from "../store/actions";

export default function CollectionView(props){
    const dispatch = useDispatch();
    const collection = props.collection

    const imgElements = collection.Images.map(img => {
        return <GridItem key={nanoid()}>
            <Img src={img.thumbUrl} alt={img.name} w={'full'}/>
        </GridItem>
    })

    const [newCollection, setNewCollection] = React.useState(collection)
    const [editCollection, setEditCollection] = React.useState({
        title: false,
        description: false,
        image: false
    })
    

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewCollection((prevNewCollection) => {
          return {
            ...prevNewCollection,
            [name]: value,
          };
        });
      }
    
      function titleChange(){
          setEditCollection((prevEditCollection) => {
              return{
                ...prevEditCollection,
                title: !prevEditCollection.title
              }
          })
      }

      function handleSubmit(event){
        event.preventDefault();
        if(newCollection.title.length<1) return
        dispatch({
            type: actionTypes.EDIT_COLLECTION,
            key: newCollection.key,
            title: newCollection.title,
            description: newCollection.description,
            Images: newCollection.Images,
        })

      }
    return(
        <form style={{width: '100%'}} onSubmit={handleSubmit}>
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
            {!editCollection.title ? (
                <Flex alignItems={'center'} gap={'30px'}>
                    <Text fontSize={'3vw'} fontWeight={'500'} display={'inline-block'}>{collection.title}</Text>
                    <IconButton icon={<EditIcon />} bg={'rgba(64, 206, 199, 0.764)'} color={'#FFFFFF'} size={'md'} onClick={titleChange} type={'submit'}/>
                </Flex>
                ) : (
                    <Flex gap={'20px'}>
                    <Input
                        type={"text"}
                        name={"title"}
                        placeholder={"Enter New Collection Name"}
                        value={newCollection.title}
                        onChange={handleInputChange}
                    ></Input>
                    <IconButton icon={<CheckIcon />} bg={'rgba(64, 206, 199, 0.764)'} color={'#FFFFFF'} size={'md'} onClick={titleChange} />
                    </Flex>
                )
            }
            <Text fontSize={'2vw'} marginTop={'15px'}>{collection.description}</Text>
            <Grid templateColumns={'repeat(4, 1fr)'} gap={'30px'} w={'full'} marginTop={'20px'}>
                {imgElements}
            </Grid>
        </Flex>
        </form>
    )
}