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
import { CiHome } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";
import { MdOutlineArticle } from "react-icons/md";
import React, { useState } from "react";
import ModalHome from "./ModalHome";
import Messages from "./Messages";
import Help from "./Help";
import Articles from "./Articles";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [home, setHome] = useState('home');

  const check = () => {
    if(home === 'home'){
      return <ModalHome/>
    }else if(home === "message"){
       return <Messages/>
    }else if(home === "help"){
       return <Help/>
    }else{
       return <Articles/>
    } 
  }

  const handleChange = (value) => {
    setHome(value);
  }

  

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
      >
        <ModalOverlay />
        <ModalContent
        style={{
          borderRadius: "20px",
          position: "absolute",
          right:20,
          bottom: 90,
          transform: "translate(-50%, -50%)",
          height:"80%",
          width:"30%"
        }}
        >
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           {
            check()
           }
          </ModalBody>
          <ModalFooter>
            <Box w={"100%"} display={'grid'} gap={"10px"} gridTemplateColumns={'25% 25% 25% 25%'} justifyContent={'center'}>
              <Box textAlign={'center'} display={"grid"} justifyContent={"center"} onClick={() => handleChange('home')}><FontAwesomeIcon icon="fa-solid fa-newspaper" /><Text fontWeight={600} color={'#292929'}>Home</Text></Box>
              <Box textAlign={'center'} display={"grid"} justifyContent={"center"}  onClick={() => handleChange('message')}><RiMessage2Line /><Text fontWeight={600} color={'#292929'}>Messages</Text></Box>
              <Box textAlign={'center'} display={"grid"} justifyContent={"center"}  onClick={() => handleChange('help')}><FiHelpCircle /><Text fontWeight={600} color={'#292929'}>Help</Text></Box>
              <Box textAlign={'center'} display={"grid"} justifyContent={"center"}  onClick={() => handleChange('article')}><MdOutlineArticle /><Text fontWeight={600} color={'#292929'}>Articles</Text></Box>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Home;
