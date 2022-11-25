import {
  BoxProps,
  Menu,
  Button,
  Text,
  MenuButton,
  useDisclosure,
  forwardRef,
} from '@chakra-ui/react'
import { FC } from 'react'

import ContactForm from './ContactForm'
interface Props {
  onClick: () => void
}

const ContactFormButton = forwardRef<Props & BoxProps, 'div'>(
  ({ onClick }, ref) => {
    return (
      <Button
        ref={ref}
        size="xs"
        onClick={onClick}
        variant="secondaryW"
        boxShadow="0px 1px 0px #00000052"
      >
        <Text textShadow="0px 1px 0px #00000052" color="white">
          Me contacter
        </Text>
      </Button>
    )
  }
)

const ContactFormMenu: FC<BoxProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log('🚀 ~ file: ContactFormMenu.tsx ~ line 38 ~ isOpen', isOpen)
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
            <MenuButton as={ContactFormButton} />
            {isOpen && <ContactForm />}
          </>
        )
      }}
    </Menu>
  )
}

export default ContactFormMenu
