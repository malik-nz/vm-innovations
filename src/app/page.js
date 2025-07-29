import { AboutUs, Banner, ContactUs, Projects, Services } from '@/components'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs/>
      <Services />
      <Projects />
      <ContactUs />
    </div>
  )
}

export default Home