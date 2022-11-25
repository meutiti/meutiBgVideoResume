import {
  Container,
  Text,
  Heading,
  Flex,
  MenuList,
  BoxProps,
} from '@chakra-ui/react'
import { FC } from 'react'

const ContactForm: FC<BoxProps> = () => {
  return (
    <MenuList
      minW={{ base: '100%', md: '680px' }}
      maxWidth={{ base: '100%', md: '680px' }}
      mx="2"
      p={{ base: 5, md: '8' }}
      mt="4"
    >
      <Flex>
        <Text size="lg" textAlign="center">
          Pour travailler ou discuter
        </Text>
      </Flex>
    </MenuList>
  )
}

export default ContactForm
