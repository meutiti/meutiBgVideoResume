import Head from 'next/head'
import { Fragment } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <section className="showcase">
        <header>
          <h2 className="logo">
            <img src="./logo.png" alt="logo" width="120px" height="120px" />
          </h2>
          {/* <div className="toggle"></div> */}
        </header>
        <video src="./meuti-qhd_encoded.webm" muted loop autoPlay></video>
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
        <ul className="social">
          <li>
            <a href="https://www.instagram.com/meutidoes3d/" target="_blank">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" />
            </a>
          </li>
        </ul>
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
