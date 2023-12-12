import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Box
        bgGradient='linear(to-l, #eec394, #9290fe)'
        display={{ base: 'block', md: 'flex' }}
        alignItems={{ base: 'initial', md: 'center' }}
        justifyContent={{ base: 'initial', md: 'space-between' }}
        padding={{ base: '10px', md: '10px 10px 0px 10px' }}
      >
        <Image w={{ base: '100%', md: '300px' }} h={{ base: 'auto', md: '150px' }} src='/images/home1.png' />
        <Box textAlign={{ base: 'center', md: 'left' }} marginLeft={{ base: '0', md: '-100px' }} marginTop={{ base: '20px', md: '0' }}>
          <Text fontSize={{ base: '24px', md: '30px' }} fontWeight={'700'}>
            Meet Fin, a breakthrough AI bot.
          </Text>
          <Text fontSize={{ base: '24px', md: '30px' }} fontWeight={'300'}>
            Resolve 50% of your support questions. Instantly.
          </Text>
        </Box>
        <Button bgColor={'black'} color={'white'} marginTop={{ base: '20px', md: '0' }}>
          Learn more➡️
        </Button>
      </Box>
      <Box bgColor={'#041527'} boxShadow='inner'>
        <Box textAlign={'center'} margin={'auto'} w={'100%'} maxWidth={{ base: '100%', md: '70%' }} color={'white'}>
          <Text fontSize={{ base: '40px', md: '80px' }} fontFamily={'cursive'}>
            The only AI customer service solution you need
          </Text>
          <Text fontSize={{ base: '20px', md: '30px' }} mt={'20px'}>
            The only solution that combines an AI chatbot, help desk, and proactive support—so you can keep costs low, support teams happy, and customers satisfied.
          </Text>
        </Box>
      </Box>
      <Button onClick={onOpen} position={'fixed'} bottom={70} right={70}>Open Modal</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Home