import React from "react";

import { Flex, Text, HStack, Button, Link } from "@chakra-ui/react";

import { AddIcon, ViewIcon } from "@chakra-ui/icons";

import { Link as RouterLink } from "react-router-dom";

export default function Home() {
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
                    <RouterLink to="/AddCollection">
                        <Button colorScheme={"teal"} size={"lg"} leftIcon={<AddIcon />}>
                            Add Collection
                        </Button>
                    </RouterLink>

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
