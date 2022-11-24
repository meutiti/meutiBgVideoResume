import Head from 'next/head'
import { useState, Fragment } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Switch from 'react-switch'
import { Button, Box, Flex, Heading, Text, Tooltip } from '@chakra-ui/react'
import { MdDarkMode } from 'react-icons/md'
import { BiSun } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import { TiHeartFullOutline } from 'react-icons/ti'
import {
  SiTypescript,
  SiNextdotjs,
  SiBlender,
  SiChakraui,
  SiAdobeillustrator,
} from 'react-icons/si'
import { AiOutlineInstagram } from 'react-icons/ai'
import useMountedBreakpoints from '../hooks/useMountedBreakpoints'
import Link from 'next/link'

const VIDEOS_MAP = {
  dark: './meuti-zzz_encoded.webm',
  dark_mobile: './meuti-zzz-mobile_encoded.webm',
  light: './meuti-qhd_encoded.webm',
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const isMobile = useMountedBreakpoints({ base: true, md: false }, false)
  const handleDarkMode = () => setIsDarkMode(!isDarkMode)
  const videoSrc =
    (isMobile && isDarkMode && VIDEOS_MAP.dark_mobile) ||
    (isDarkMode && VIDEOS_MAP.dark) ||
    VIDEOS_MAP.light

  return (
    <>
      <Flex
        as="section"
        className="showcase"
        bgColor={isDarkMode ? '#2c2c2c' : '#000'}
      >
        <header>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={isMobile ? 60 : 80}
              height={isMobile ? 60 : 80}
            />
          </Link>
          <Flex align="center" justify="flex-end" gap="6">
            <Flex align="center">
              <Button
                size="xs"
                onClick={() => console.log('mail')}
                variant="secondaryW"
                boxShadow="0px 1px 0px #00000052"
              >
                <Text textShadow="0px 1px 0px #00000052" color="white">
                  Me contacter
                </Text>
              </Button>
            </Flex>
            <Flex align="center" as="label" htmlFor="switch-dark-mode">
              <BiSun color="white" size="18px" />
              <Flex mx="2">
                <Switch
                  id="switch-dark-mode"
                  onChange={handleDarkMode}
                  checked={isDarkMode}
                  uncheckedIcon={false}
                  onColor="#9fc332"
                  offColor="#5a5a5a"
                  checkedIcon={false}
                  width={28}
                  height={14}
                  handleDiameter={10}
                />
              </Flex>
              <MdDarkMode color="white" size="18px" />
            </Flex>
          </Flex>
        </header>
        <video src={videoSrc} muted loop autoPlay></video>

        <Flex direction="column" position="relative">
          <Heading
            as="h1"
            textShadow="0px 1px 0px #00000052"
            size={['md', 'xl']}
            color="white"
          >
            Timothée B.
          </Heading>
          <Heading
            as="h2"
            textShadow="0px 1px 0px #00000052"
            color="white"
            size={['sm', 'md']}
          >
            Front-End Developer
          </Heading>
          <Flex position="relative" width="fit-content">
            {/* <Box
              position="absolute"
              background="white"
              bottom="0px"
              height="6px"
              width="100%"
              zIndex={0}
            /> */}
            <Text
              size={['sm', 'lg']}
              textShadow="0px 1px 0px #00000052"
              mt="1.5"
              as="h3"
              color="white"
              width="fit-content"
              zIndex={1}
            >
              React & React Native
            </Text>
          </Flex>
          <Flex mt="8" direction="column">
            <Text
              size={['md', 'lg']}
              color="white"
              width="min(100% - 2rem, 800px)"
              textShadow="0px 1px 0px #00000052"
            >
              Touche à tout et féru de design avec une grosse passion pour la
              modélisation 3D, j'aime voir les features prendre vie et faire
              naître de nouvelles choses grâce au code.
            </Text>
            <Text
              size={['md', 'lg']}
              mt="3"
              color="white"
              width="min(100% - 2rem, 800px)"
              textShadow="0px 1px 0px #00000052"
            >
              Mon parcours est orienté SASS web & mobile, mais je suis toujours
              curieux de voir et d'apprendre sur des sujets différents.
            </Text>
            <Text
              size={['md', 'lg']}
              mt="3"
              color="white"
              width="min(100% - 2rem, 800px)"
              textShadow="0px 1px 0px #00000052"
            >
              J'ai un coup de
              <Text as="span" mx="1">
                <TiHeartFullOutline
                  style={{ display: 'inline' }}
                  size="20px"
                  color="#ff3357"
                />
              </Text>
              pour les boites early stage car il y a tout à construire avec
              l'envie de bien faire.
            </Text>
          </Flex>
        </Flex>
        <Flex
          align="center"
          position="absolute"
          zIndex={10}
          bottom="60px"
          gap="4"
        >
          <FaReact color="#80D8F7" size="30px" />
          <SiTypescript color="#4178C0" size="30px" />
          <SiChakraui color="#4F9594" size="30px" />
          <SiNextdotjs color={isDarkMode ? 'white' : 'white'} size="30px" />
          <SiBlender color={isDarkMode ? 'white' : 'white'} size="30px" />
          <SiAdobeillustrator color="#ecc649" size="30px" />
          <a href="https://www.instagram.com/meutidoes3d/" target="_blank">
            <AiOutlineInstagram color="white" size="35px" />
          </a>
        </Flex>
      </Flex>
      {/* <div className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div> */}
    </>
  )
}
