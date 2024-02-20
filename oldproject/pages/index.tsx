import { useState, useEffect, useRef } from "react";
import type { NextPage } from 'next';
import Head              from 'next/head';
import Container         from '../src/components/Container';
import ReactGA from "react-ga4";

const Home: NextPage = () => {
  ReactGA.initialize("G-5KJ7EED2DQ");

  const [pathname, setPathName] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    // esto sólo se ejecuta en cliente
    const pathname = window.location.pathname
    const search = window.location.search
    setPathName(pathname)
    setSearch(search)
  }, []) // dejamos las dependencias vacías para que sólo se ejecute la primera vez



  ReactGA.send({ hitType: "pageview", page: pathname + search});


  return (
    <div className="w-full">
      <Head>
        <title>Aitor Solana</title>
        <meta name="description" content="Aitor Solana - Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container />
    </div>
  )
}

export default Home;
