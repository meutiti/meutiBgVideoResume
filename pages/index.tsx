import Head from 'next/head'
import { useState, Fragment } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Switch from 'react-switch'
import { Flex, Tooltip } from '@chakra-ui/react'
import { MdDarkMode } from 'react-icons/md'
import { BiSun } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import useMountedBreakpoints from '../hooks/useMountedBreakpoints'

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
      <section className="showcase">
        <header>
          <h2 className="logo">
            <img
              src="./logo.png"
              alt="logo"
              width={isMobile ? '60px' : '120px'}
              height={isMobile ? '60px' : '120px'}
            />
          </h2>
          {/* <div className="toggle"></div> */}
          <Flex align="center" as="label" htmlFor="switch-dark-mode">
            <BiSun color="white" size="30px" />
            <Flex mx="2">
              <Switch
                id="switch-dark-mode"
                onChange={handleDarkMode}
                checked={isDarkMode}
                uncheckedIcon={false}
                onColor="#9fc332"
                offColor="#303030"
                checkedIcon={false}
              />
            </Flex>
            <MdDarkMode color="white" size="30px" />
          </Flex>
        </header>
        <video src={videoSrc} muted loop autoPlay></video>

        {/* <div className="overlay"></div> */}
        <div className="text">
          <h2>Timothée</h2>
          <h3>Front-End Developer</h3>
          <h4>React & React Native</h4>
          <div className="intro">
            <p>
              Touche à tout et féru de design avec une grosse passion pour la
              modélisation 3D, j'aime voir les features prendre vie et faire
              naître de nouvelles choses grâce au code. <br /> <br /> Mon
              parcours est orienté SASS web & mobile, mais je suis toujours
              curieux de voir et d'apprendre sur des sujets différents.
              <br /> <br />
              J'ai un coup de ❤️ pour les boites early stage car il y a tout à
              construire avec l'envie de bien faire.
            </p>
          </div>
        </div>
        <Flex align="center" className="social">
          <a href="https://www.instagram.com/meutidoes3d/" target="_blank">
            <AiOutlineInstagram color="white" size="30px" />
          </a>
        </Flex>
      </section>
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
