import React from 'react'
import HomeHero from '../Components/Heroes/HomeHero';

const Home = () => {
  return (
    <>
        <HomeHero />
        <h1 className="text-3xl font-bold underline text-red-400">
          Hello world!
        </h1>
    </>
  )
}

export default Home