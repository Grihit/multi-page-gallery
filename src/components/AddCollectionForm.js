import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Flex,
  Button,
  Text,
  ModalFooter,
} from "@chakra-ui/react";
import UploadImage from "./UploadImage";
import { useDispatch } from "react-redux";
import * as actionTypes from "../store/actions";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

export default function AddCollectionForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
  });
  const [isError, setIsError] = React.useState({
    title: false,
    description: false,
  });

  const [errorMsg, setErrorMsg] = React.useState("");

  const [FormImages, setFormImages] = React.useState([]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  React.useEffect(() => {
    setIsError((prevIsError) => {
      return !formData.title
        ? { ...prevIsError, title: true }
        : { ...prevIsError, title: false };
    });
  }, [formData.title]);
  React.useEffect(() => {
    setIsError((prevIsError) => {
      return !formData.description
        ? { ...prevIsError, description: true }
        : { ...prevIsError, description: false };
    });
  }, [formData.description]);

  function formSubmit(event) {
    event.preventDefault();
    if (isError.title) setErrorMsg("Collection name is required");
    else if (isError.description)
      setErrorMsg("Collection description is required");
    else if (FormImages.length < 1) setErrorMsg("No Image Uploaded");
    else setErrorMsg("");
    if (!isError.title && !isError.description) {
      const collection = {
        key: nanoid(),
        title: formData.title,
        description: formData.description,
        Images: FormImages,
      };
      dispatch({
        type: actionTypes.CURRENT_COLLECTION,
        currentCollection: collection,
      });
      dispatch({
        type: actionTypes.ADD_COLLECTION,
        collection: collection,
      });

      navigate("/viewCollection");
    }
  }

  return (
    <form onSubmit={formSubmit}>
      <FormControl isInvalid={isError.title} marginBottom={"10px"}>
        <Flex alignItems={"center"}>
          <FormLabel htmlFor="title" fontSize={"2xl"} minW={"150px"}>
            Name:{" "}
          </FormLabel>
          <Input
            type={"text"}
            name={"title"}
            placeholder={"Enter Collection Name"}
            value={formData.title}
            onChange={handleInputChange}
          />
        </Flex>
      </FormControl>
      <FormControl isInvalid={isError.description}>
        <Flex alignItems={"center"}>
          <FormLabel htmlFor="description" fontSize={"2xl"} minW={"150px"}>
            Description:{" "}
          </FormLabel>
          <Textarea
            name={"description"}
            placeholder={"Enter Collection Description"}
            value={formData.description}
            onChange={handleInputChange}
          />
        </Flex>
      </FormControl>

      <Flex justifyContent={"center"} margin={"15px 0px"}>
        <UploadImage fileList={FormImages} setFileList={setFormImages} />
      </Flex>
      <ModalFooter justifyContent={"flex-start"} pl={0} pr={0}>
        <Flex>
          {errorMsg && (
            <Text color={"red.400"} fontSize={"xl"} margin={0}>
              *{errorMsg}
            </Text>
          )}
        </Flex>
        <Button
          colorScheme={"teal"}
          size={"lg"}
          type={"submit"}
          marginLeft={"auto"}
          onClick={
            !isError.title && !isError.description
              ? props.close
              : () => void undefined
          }
        >
          Add
        </Button>
        <Button
          colorScheme={"teal"}
          size={"lg"}
          variant={"ghost"}
          onClick={props.close}
        >
          Close
        </Button>
      </ModalFooter>
    </form>
  );
}
