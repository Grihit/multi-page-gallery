import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image
} from "@chakra-ui/react";

export default function ImgOpen(props) {
  const { image, isOpen, onClose } = props;
//   console.log(image);
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={"2xl"} color={"#39c0ba"}>
          {image.name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src={image.thumbUrl}
            alt={image.name}
            w={"full"}
            objectFit={"cover"}
            h={"full"}
            cursor={"pointer"}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
