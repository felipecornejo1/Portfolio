import React from 'react'
import {
  Header,
  Footer,
  Portfolio,
  Skills,
  Contact,
} from '../../containers/index'

function Home() {
  return (
    <div className='home'>
      <Header />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
