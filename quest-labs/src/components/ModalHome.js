import { Box, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa";
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'

const ModalHome = () => {
  return (
    <Box>
      <Box display={"flex"} justifyContent={'space-between'} alignItems={"center"} padding={'0px 10px'}>
        <Image w={'40px'} src={"/images/home2.png"}/>
        <Box display={'flex'}>
          <Image w={'40px'} height={'40px'} borderRadius={'50%'} src='/images/home3.png'/>
          <Image w={'40px'} height={'40px'} borderRadius={'50%'} src='/images/home4.png'/>
          <Image w={'40px'} height={'40px'} borderRadius={'50%'} src='/images/home5.png'/>
        </Box>
      </Box>
      <Text fontSize={"40px"} fontWeight={800}  color={'#48484a'} mt={'80px'}>Hello there. </Text>
      <Text fontSize={"37px"} fontWeight={800} color={'white'}>How can we help?</Text>
      <Box bgColor={"white"} borderRadius={"10px"} mt={'30px'}>
        <Image src='/images/home6.png' borderTopRightRadius={'10px'} borderTopLeftRadius={"10px"}/>
        <hr/>
        <Box padding={'10px 10px'} _hover={{bgColor:"#81d4fa",color:"white",cursor:"pointer"}} borderBottomRightRadius={'10px'} borderBottomLeftRadius={"10px"}>
          <Text fontSize={'15px'} fontWeight={600}>The Intercom Community</Text>
          <Text fontSize={'14px'} color={'grey'}>Be sure to check out the Intercom Community for support, plus tips and tricks from Intercom users and much more.</Text>
        </Box>
      </Box>
      <Box bgColor={"white"} borderRadius={"10px"} mt={'30px'} padding={'10px 20px'}>
      <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<FaSearch color="gray.300" />}
      />
      <Input type="text" placeholder="Search for help" />
    </InputGroup>
       <Box _hover={{bgColor:"#86c4f2",borderRadius:"10px"}} display={'flex'} alignItems={'center'} justifyContent={'space-between'} padding={'10px 10px'}>
       <Text fontSize={'13px'}>Send customuser attributes to Intercom</Text>
       <ChevronRightIcon/>
       </Box>
       <Box _hover={{bgColor:"#86c4f2",borderRadius:"10px"}} display={'flex'} alignItems={'center'} justifyContent={'space-between'} padding={'10px 10px'}>
       <Text fontSize={'13px'}>Send customuser attributes to Intercom</Text>
       <ChevronRightIcon/>
       </Box>
       <Box _hover={{bgColor:"#86c4f2",borderRadius:"10px"}} display={'flex'} alignItems={'center'} justifyContent={'space-between'} padding={'10px 10px'}>
       <Text fontSize={'13px'}>Send customuser attributes to Intercom</Text>
       <ChevronRightIcon/>
       </Box>
       <Box _hover={{bgColor:"#86c4f2",borderRadius:"10px"}} display={'flex'} alignItems={'center'} justifyContent={'space-between'} padding={'10px 10px'}>
       <Text fontSize={'13px'}>Send customuser attributes to Intercom</Text>
       <ChevronRightIcon/>
       </Box>
      </Box>
      <Box bgColor={"white"} borderRadius={"10px"} mt={'30px'}>
        <Image src='/images/home7.png' borderTopRightRadius={'10px'} borderTopLeftRadius={"10px"}/>
        <hr/>
        <Box padding={'10px 10px'} _hover={{bgColor:"#81d4fa",color:"white",cursor:"pointer"}} borderBottomRightRadius={'10px'} borderBottomLeftRadius={"10px"}>
          <Text fontSize={'15px'} fontWeight={600}>The Intercom Community</Text>
          <Text fontSize={'14px'} color={'grey'}>Be sure to check out the Intercom Community for support, plus tips and tricks from Intercom users and much more.</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default ModalHome