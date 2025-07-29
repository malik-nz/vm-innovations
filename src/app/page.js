import { AboutUs, Banner, Projects, Services } from '@/components'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs/>
      <Services />
      <Projects />
    </div>
  )
}

export default Home