import React from "react";
import {
  Flex,
  Text,
  Tab,
  Tabs,
  TabList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../store/actions";
import AddCollectionForm from "./AddCollectionForm";

export default function Sidebar(props) {
  const collections = useSelector((state) => state.collections);
  const dispatch = useDispatch();

  function handleClick(collection) {
    dispatch({
      type: actionTypes.CURRENT_COLLECTION,
      currentCollection: collection,
    });
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const collectionElements = collections.map((collection) => {
    return (
      <Tab
        justifyContent={"flex-start"}
        fontSize={"1.2vw"}
        textAlign={"left"}
        wordBreak={"break-all"}
        _selected={{ color: "#FFFFFF", bg: "#39c0ba" }}
        key={collection.key}
        onClick={() => handleClick(collection)}
      >
        {collection.title}
      </Tab>
    );
  });
  return (
    <Flex
      maxH={"calc(100vh - 80px)"}
      overflowY={"auto"}
      minW={"17vw"}
      maxW={"20vw"}
      boxShadow={"15px 0px 34px -19px rgba(57,192,186,0.2)"}
      flexDir={"column"}
      scrollBehavior={"smooth"}
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgb(199, 199, 199)",
          borderRadius: "24px",
        },
      }}
    >
        <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={"2xl"} color={"#39c0ba"}>
              Add Collection
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddCollectionForm close={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>
      <Text p={"15px"} fontSize={"1.6vw"} fontWeight={"500"}>
        Collections 
        {/* {<IconButton icon={<AddIcon />} onClick={onOpen} cursor={'pointer'}/>} */}
      </Text>
      <Tabs orientation={"vertical"} defaultIndex={props.index}>
        <TabList width={"full"}>{collectionElements}</TabList>
      </Tabs>
    </Flex>
  );
}
