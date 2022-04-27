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
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'

export default function Home() {

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
                            <ModalHeader>Add Collection</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <AddCollectionForm />
                            </ModalBody>
                            <ModalFooter>
                            <Button colorScheme={"teal"} size={"lg"}>
                                Add
                            </Button>
                            <Button colorScheme={"teal"} size={"lg"} variant={'ghost'} onClick={onClose}>
                                Close
                            </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                    <RouterLink to="/ViewCollection">
                        <Button colorScheme={"teal"} size={"lg"} leftIcon={<ViewIcon />}>
                            View Collections
                        </Button>
                    </RouterLink>
                </HStack>
            </Flex>
        </Flex>
    );
}