import React from "react";
import {
  Flex,
  Text,
  Grid,
  GridItem,
  Image,
  Input,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { CheckIcon, EditIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../store/actions";
import "antd/dist/antd.min.css";
import { message } from "antd";
import UploadImage from "./UploadImage";
import ImgOpen from "./ImgOpen";

export default function CollectionView() {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections);
  let collection = useSelector((state) => state.currentCollection);
  const [imgElements, setImgElements] = React.useState("");
  const [newImages, setNewImages] = React.useState([]);
  const [imgHover, setImgHover] = React.useState("");
  function hoverToggle(imgIndex) {
    setImgHover(imgIndex);
  }
  function imgDelete(imgIndex) {
    const collectionIndex = collections.indexOf(collection);
    if(collection.Images.length <= 1){
        message.error('Collection must have atleast 1 image!')
        return
    }
    message.success('Image Deleted')
    dispatch({
      type: actionTypes.DELETE_IMAGE,
      imgIndex: imgIndex,
      collectionIndex: collectionIndex,
    });
  }
  const [currentImg, setCurrentImg] = React.useState("") 
  function imgClick(img){
    setCurrentImg(img)
  }
  React.useEffect(() => {
    setImgElements(
      collection.Images.map((img, imgIndex) => {
        return (
          <GridItem
            key={nanoid()}
            w={"100%"}
            pos={"relative"}
            onMouseEnter={() => hoverToggle(imgIndex)}
            onMouseLeave={() => hoverToggle("")}
          >
            <Image
              src={img.thumbUrl}
              alt={img.name}
              w={"full"}
              objectFit={"cover"}
              h={"full"}
              cursor={"pointer"}
              onClick={() => imgClick(img)}
            />
            {imgHover === imgIndex && (
              <DeleteIcon
                bg={"rgba(64, 206, 199, 0.764)"}
                color={"#FFFFFF"}
                w={7}
                h={7}
                p={"3px"}
                pos={"absolute"}
                top={"2px"}
                right={"2px"}
                onClick={() => imgDelete(imgIndex)}
                cursor={'pointer'}
              />
            )}
          </GridItem>
        );
      })
    );
    setNewCollection(collection);
  }, [collection, collections, imgHover]);

  const [newCollection, setNewCollection] = React.useState(collection);
  const [editCollection, setEditCollection] = React.useState({
    title: false,
    description: false,
    image: false,
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewCollection((prevNewCollection) => {
      return {
        ...prevNewCollection,
        [name]: value,
      };
    });
  }

  function change(value) {
    if (value === "title") {
      setEditCollection((prevEditCollection) => {
        return {
          ...prevEditCollection,
          [value]: !prevEditCollection.title,
        };
      });
    } else if (value === "description") {
      setEditCollection((prevEditCollection) => {
        return {
          ...prevEditCollection,
          [value]: !prevEditCollection.description,
        };
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const index = collections.indexOf(collection);
    if (
      newCollection.title.length < 1 ||
      newCollection.description.length < 1
    ) {
      message.error(
        "Collection's name and description cannot empty!"
      );
      return;
    }
    const updatedNewCollection = {
      ...newCollection,
      Images: newCollection.Images.concat(newImages),
    };
    setNewCollection(updatedNewCollection);
    setNewImages([]);
    dispatch({
      type: actionTypes.EDIT_COLLECTION,
      index: index,
      title: updatedNewCollection.title,
      description: updatedNewCollection.description,
      Images: updatedNewCollection.Images,
    });
    onClose()
  }
  const { isOpen, onOpen, onClose } = useDisclosure();

  if(!collection)
    collection=collections[0]
  
  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <Flex
        flexDir={"column"}
        p={"30px"}
        w={"full"}
        overflowY={"auto"}
        maxH={"calc(100vh - 80px)"}
        css={{
          "&::-webkit-scrollbar": {
            width: "6px",
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
        {!editCollection.title ? (
          <Flex alignItems={"center"} gap={"30px"}>
            <Text fontSize={"3vw"} fontWeight={"500"} display={"inline-block"}>
              {collection.title}
            </Text>
            <IconButton
              icon={<EditIcon />}
              bg={"rgba(64, 206, 199, 0.764)"}
              color={"#FFFFFF"}
              size={"md"}
              onClick={() => change("title")}
              type={"submit"}
            />
          </Flex>
        ) : (
          <Flex gap={"20px"}>
            <Input
              type={"text"}
              name={"title"}
              placeholder={"Enter New Collection Name"}
              value={newCollection.title}
              onChange={handleInputChange}
              marginBottom={"10px"}
            ></Input>
            <IconButton
              icon={<CheckIcon />}
              bg={"rgba(64, 206, 199, 0.764)"}
              color={"#FFFFFF"}
              size={"md"}
              onClick={() => change("title")}
            />
          </Flex>
        )}
        {!editCollection.description ? (
          <Flex alignItems={"center"} gap={"30px"} marginTop={"15px"}>
            <Text fontSize={"2vw"} display={"inline-block"}>
              {collection.description}
            </Text>
            <IconButton
              icon={<EditIcon />}
              bg={"rgba(64, 206, 199, 0.764)"}
              color={"#FFFFFF"}
              size={"xs"}
              onClick={() => change("description")}
              type={"submit"}
            />
          </Flex>
        ) : (
          <Flex gap={"20px"}>
            <Input
              type={"text"}
              name={"description"}
              placeholder={"Enter New Collection Description"}
              value={newCollection.description}
              onChange={handleInputChange}
              marginBottom={"20px"}
            ></Input>
            <IconButton
              icon={<CheckIcon />}
              bg={"rgba(64, 206, 199, 0.764)"}
              color={"#FFFFFF"}
              size={"md"}
              onClick={() => change("description")}
            />
          </Flex>
        )}
        <Button
          colorScheme={"teal"}
          size={"md"}
          leftIcon={<AddIcon />}
          onClick={onOpen}
          w={"150px"}
          minH={"40px"}
          marginLeft={"auto"}
          marginRight={"30px"}
        >
          Add Images
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={"2xl"} color={"#39c0ba"}>
              Add Images
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <UploadImage fileList={newImages} setFileList={setNewImages} />
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme={"teal"}
                size={"lg"}
                type={"submit"}
                marginLeft={"auto"}
                onClick={handleSubmit}
              >
                Add
              </Button>
              <Button
                colorScheme={"teal"}
                size={"lg"}
                variant={"ghost"}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Grid
          templateColumns={"repeat(4, 1fr)"}
          gap={"30px"}
          w={"full"}
          marginTop={"20px"}
        >
          {imgElements}
        </Grid>
      </Flex>
      <ImgOpen image = {currentImg} isOpen={!!currentImg} onClose={()=>setCurrentImg("")}/>

    </form>
  );
}
