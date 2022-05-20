import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box>
      <Flex
        bg={"gray.50"}
        w={"full"}
        minH={"80px"}
        alignItems={"center"}
        boxShadow={"0px 15px 34px -19px rgba(57,192,186,0.3)"}
        paddingLeft={"20px"}
      >
        <RouterLink to="/">
          <Text
            fontFamily={"Inter, sans-serif"}
            fontWeight={"700"}
            fontSize={"3xl"}
            color={"#39c0ba"}
          >
            Image Gallery
          </Text>
        </RouterLink>
      </Flex>
    </Box>
  );
}
