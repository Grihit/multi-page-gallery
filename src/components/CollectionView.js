import React from "react";
import {
  Flex,
  Text,
  Grid,
  GridItem,
  Img,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../store/actions";
import "antd/dist/antd.min.css";
import { message } from "antd";

export default function CollectionView() {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections);
  const collection = useSelector((state) => state.currentCollection);
  const [imgElements, setImgElements] = React.useState("");
  React.useEffect(() => {
    setImgElements(
      collection.Images.map((img) => {
        return (
          <GridItem key={nanoid()}>
            <Img src={img.thumbUrl} alt={img.name} w={"full"} />
          </GridItem>
        );
      })
    );
    setNewCollection(collection);
  }, [collection, collections]);

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
    console.log(value);
    if (value === "title") {
      setEditCollection((prevEditCollection) => {
        return {
          ...prevEditCollection,
          [value]: !prevEditCollection.title,
        };
      });
    }
    else if(value === "description"){
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
    if (newCollection.title.length < 1 || newCollection.description.length < 1 || newCollection.Images.length < 1){
        message.error('Make sure Collection name, description and images are not empty')
        return;
    }
    dispatch({
      type: actionTypes.EDIT_COLLECTION,
      index: index,
      title: newCollection.title,
      description: newCollection.description,
      Images: newCollection.Images,
    });
  }
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
            <Text fontSize={"3vw"} fontWeight={"500"} display={'inline-block'}>
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
              marginBottom={'10px'}
            ></Input>
            <IconButton
              icon={<CheckIcon />}
              bg={"rgba(64, 206, 199, 0.764)"}
              color={"#FFFFFF"}
              size={'md'}
              onClick={() => change("title")}
            />
          </Flex>
        )}
        {!editCollection.description ? (
          <Flex alignItems={"center"} gap={"30px"} marginTop={'15px'}>
            <Text fontSize={"2vw"} display={"inline-block"}>
              {collection.description}
            </Text>
            <IconButton
              icon={<EditIcon />}
              bg={"rgba(64, 206, 199, 0.764)"}
              color={"#FFFFFF"}
              size={'xs'}
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
        <Grid
          templateColumns={"repeat(4, 1fr)"}
          gap={"30px"}
          w={"full"}
          marginTop={"20px"}
        >
          {imgElements}
        </Grid>
      </Flex>
    </form>
  );
}
