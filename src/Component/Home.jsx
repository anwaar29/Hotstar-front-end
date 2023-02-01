import React from 'react'
import Bottomcontainer from './Bottomcontainer'
import Footer from './Footer'
import Navbar from './Navbar'
import Slider from './Slider'

const Home = () => {
  return ( <>
  <Navbar/>
  <Slider/>
  <h1>Latest & Trending</h1>
  <Bottomcontainer/>
  <h1>Programs & Shows </h1>
  <Bottomcontainer/>
  <h1>Marvel Movies </h1>
  <Bottomcontainer/>
  <h1>DC Movies </h1>
  <Bottomcontainer/>
 <Footer/>
  </>
  )
}

export default Home