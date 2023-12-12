import { Box, Image, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import { FaSearch, FaTelegram } from 'react-icons/fa'

const SendMessage = () => {

    const handleSendMessage = () => {

    }
  return (
    <Box>
      <Text textAlign={"center"} fontSize={"20px"} fontWeight={"700"} color={"white"}>Intercom</Text>
      <Box display={'flex'} justifyContent={"center"} mt={'20px'}>
        <Image width={'40px'} h={'40px'} borderRadius={"50%"} src='/images/home3.png'/>
        <Image width={'40px'} h={'40px'} borderRadius={"50%"} src='/images/home4.png'/>
        <Image width={'40px'} h={'40px'} borderRadius={"50%"} src='/images/home5.png'/>
      </Box>
      <Text fontSize={"15px"} mt={'20px'} fontWeight={600} textAlign={"center"}>We typically reply within a day</Text>
      <Text textAlign={"center"} color={"white"}>We help your business grow by connecting you to your customers. For more support, tips & tricks, check out the Community https://community.intercom.com</Text>
      <InputGroup mt={'40px'}>
      <Input type="text" placeholder="Search for help" border={'1px solid black'}/>
      <InputRightElement
        pointerEvents="auto"
        cursor="pointer"
        children={<FaTelegram color="gray.300" />}
        onClick={handleSendMessage} // Attach onClick event to the icon
      />
    </InputGroup>
    </Box>
  )
}

export default SendMessage