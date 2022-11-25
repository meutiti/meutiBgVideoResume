import {
  BoxProps,
  Menu,
  Button,
  Text,
  MenuButton,
  useDisclosure,
} from '@chakra-ui/react'
import { FC } from 'react'

import ContactForm from './ContactForm'

const ContactFormButton = ({ onOpen }) => {
  console.log(
    '🚀 ~ file: ContactFormMenu.tsx ~ line 14 ~ ContactFormButton ~ onOpen',
    onOpen
  )
  return (
    <Button
      size="xs"
      onClick={onOpen}
      variant="secondaryW"
      boxShadow="0px 1px 0px #00000052"
    >
      <Text textShadow="0px 1px 0px #00000052" color="white">
        Me contacter
      </Text>
    </Button>
  )
}

const ContactFormMenu: FC<BoxProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  //   if (isMobile) {
  //     return (
  //       <>
  //         {isOpen && (
  //           <CartDrawer
  //             slug={slug}
  //             rewardsData={rewardsData}
  //             user={user!}
  //             title={title}
  //             isOpen={isOpen}
  //             onClose={onClose}
  //           />
  //         )}
  //         <CartButton onClick={onOpen} totalItems={totalItems} />
  //       </>
  //     )
  //   }

  return (
    <Menu>
      {({ isOpen }) => {
        console.log('🚀 ~ file: ContactFormMenu.tsx ~ line 48 ~ isOpen', isOpen)
        return (
          <>
            <MenuButton as={ContactFormButton} onOpen={onOpen} />
            {isOpen && <ContactForm />}
          </>
        )
      }}
    </Menu>
  )
}

export default ContactFormMenu
