import React from "react";
import AddCollectionForm from "./AddCollectionForm";

import { Flex, Text, HStack, Button } from "@chakra-ui/react";

import { AddIcon, ViewIcon } from "@chakra-ui/icons";

import { Link as RouterLink } from "react-router-dom";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'

  import { useSelector } from 'react-redux'

export default function Home() {

    const collections = useSelector(state => state.collections)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex
            justifyContent={"center"}
            alignItems={"center"}
            minH={"calc(80vh - 80px)"}
            w={"100vw"}
        >
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                w={"60%"}
            >
                <Text
                    fontFamily={"Inter, sans-serif"}
                    fontWeight={"700"}
                    fontSize={"5xl"}
                >
                    Welcome to <span style={{ color: "#39c0ba" }}> Image Gallery </span>
                </Text>
                <HStack spacing={"50px"} marginTop={"30px"}>
                    <Button colorScheme={"teal"} size={"lg"} leftIcon={<AddIcon />} onClick={onOpen}>
                        Add Collection
                    </Button>

                    <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader fontSize={'2xl'} color={'#39c0ba'}>Add Collection</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <AddCollectionForm close={onClose}/>
                            </ModalBody>
                        </ModalContent>
                    </Modal>

                    <RouterLink to="/ViewCollection">
                        <Button colorScheme={"teal"} size={"lg"} leftIcon={<ViewIcon />} isDisabled={collections.length<1}>
                            View Collections
                        </Button>
                    </RouterLink>
                </HStack>
            </Flex>
        </Flex>
    );
}
