import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import SendMessage from './SendMessage';

const Messages = () => {

  const [message,setMessage] = useState(true);

  const handleClick = () => {
    setMessage(!message)
  }

let messages = ["Hello intercom","I want to know about the company","Who is the founder of this company","How many employes are working here"]

  return (
    <Box>
      {
        message ? <Box>
        <Text fontSize={'25px'} fontWeight={'600'} color={'white'} textAlign={'center'}>Messages</Text>
        <Box bgColor={"white"} padding={'10px 10px'} borderRadius={"10px"} mt={'30px'}>
          {
            messages.map((el) => {
              return (
                <Box>
                <Box display={'flex'} justifyContent={"space-between"} padding={'10px 1px'} alignItems={"center"}>
                  <Image w={'20px'} borderRadius={"50%"} height={'20px'} src='/images/home3.png' />
                  <Text>{el}</Text>
                  <ChevronRightIcon/>
                </Box>
                <hr/>
                </Box>
              )
            })
          }
          <Button 
          _hover={{ cursor: "pointer" }}
        position={"fixed"}
        bottom={40}
        right={140}
        bgColor={"blue"}
        color={"white"}
        h={"50px"} onClick={handleClick}>Send a message</Button>
        </Box>
        </Box> : <Box>
          <SendMessage/>
        </Box>
      }
      
    </Box>
  )
}

export default Messages