import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ModalHome from "./ModalHome";
import Messages from "./Messages";
import Help from "./Help";
import Articles from "./Articles";
import "../modal.css"

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [home, setHome] = useState("home");

  const check = () => {
    if (home === "home") {
      return <ModalHome />;
    } else if (home === "message") {
      return <Messages/>;
    }else {
      return <Articles />;
    }
  };

  const handleChange = (value) => {
    setHome(value);
  };

  return (
    <Box>
      <Box
        bgGradient="linear(to-l, #eec394, #9290fe)"
        display={{ base: "block", md: "flex" }}
        alignItems={{ base: "initial", md: "center" }}
        justifyContent={{ base: "initial", md: "space-between" }}
        padding={{ base: "10px", md: "10px 10px 0px 10px" }}
      >
        <Image
          w={{ base: "100%", md: "300px" }}
          h={{ base: "auto", md: "150px" }}
          src="/images/home1.png"
        />
        <Box
          textAlign={{ base: "center", md: "left" }}
          marginLeft={{ base: "0", md: "-100px" }}
          marginTop={{ base: "20px", md: "0" }}
        >
          <Text fontSize={{ base: "24px", md: "30px" }} fontWeight={"700"}>
            Meet Fin, a breakthrough AI bot.
          </Text>
          <Text fontSize={{ base: "24px", md: "30px" }} fontWeight={"300"}>
            Resolve 50% of your support questions. Instantly.
          </Text>
        </Box>
        <Button
          bgColor={"black"}
          color={"white"}
          marginTop={{ base: "20px", md: "0" }}
        >
          Learn more➡️
        </Button>
      </Box>
      <Box bgColor={"#041527"} boxShadow="inner">
        <Box
          textAlign={"center"}
          margin={"auto"}
          w={"100%"}
          maxWidth={{ base: "100%", md: "70%" }}
          color={"white"}
        >
          <Text fontSize={{ base: "40px", md: "80px" }} fontFamily={"cursive"}>
            The only AI customer service solution you need
          </Text>
          <Text fontSize={{ base: "20px", md: "30px" }} mt={"20px"}>
            The only solution that combines an AI chatbot, help desk, and
            proactive support—so you can keep costs low, support teams happy,
            and customers satisfied.
          </Text>
        </Box>
      </Box>
      <Image
        onClick={onOpen}
        _hover={{ cursor: "pointer" }}
        position={"fixed"}
        bottom={10}
        right={10}
        w={"50px"}
        h={"50px"}
        borderRadius={"50%"}
        src="/images/chat.png"
      />
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent
          style={{
            borderRadius: "20px",
            position: "absolute",
            right: 20,
            bottom: 90,
            transform: "translate(-50%, -50%)",
            height: "80%",
            width: "100%",
            maxWidth: { base: "100%", md: "30%" },
            background: "linear-gradient(to bottom, #2563eb, #f5ece6)"
          }}
        >
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody
           className="hide-scrollbar"
           style={{
             overflowY: 'auto', 
           }}
          >{check()}</ModalBody>
          <ModalFooter>
            <Box
              w={"100%"}
              display={"flex"}
              // border={'1px solid red'}
              gap={"10px"}
              justifyContent={"space-between"}
              
              // bgColor={"white"}
            >
              <Box
                _hover={{ cursor: "pointer" }}
                display={"grid"}
                justifyContent={"center"}
                onClick={() => handleChange("home")}
              >
                <Image ml={"10px"} src="/images/house-solid.png" />
                <Text mt={"5px"} fontWeight={600} color={"#292929"}>
                  Home
                </Text>
              </Box>
              <Box
                _hover={{ cursor: "pointer" }}
                display={"grid"}
                justifyContent={"center"}
                onClick={() => handleChange("message")}
              >
                <Image ml={"25px"} src="/images/message-solid.png" />
                <Text mt={"5px"} fontWeight={600} color={"#292929"}>
                  Messages
                </Text>
              </Box>
              {/* <Box
                _hover={{ cursor: "pointer" }}
                display={"grid"}
                justifyContent={"center"}
                onClick={() => handleChange("help")}
              >
                <Image ml={"10px"} src="/images/question-solid.png" />
                <Text mt={"5px"} fontWeight={600} color={"#292929"}>
                  Help
                </Text>
              </Box> */}
              <Box
                _hover={{ cursor: "pointer" }}
                display={"grid"}
                justifyContent={"center"}
                onClick={() => handleChange("news")}
              >
                <Image ml={"10px"} src="/images/newspaper-solid.png" />
                <Text mt={"5px"} fontWeight={600} color={"#292929"}>
                  Articles
                </Text>
              </Box>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Home;
