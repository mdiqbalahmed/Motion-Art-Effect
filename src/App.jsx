
import { useEffect, useRef } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Sections from './Components/Sections'
import Fluid from 'webgl-fluid'
import Card from './Components/Card'
import Footer from './Components/Footer'

function App() {
  const canvas = useRef(null)
  useEffect(function () {
    let c = canvas.current
    Fluid(c)
  }, [])

  return (
    <div>
    <canvas ref={canvas} >
    </canvas>
    <Navbar></Navbar>
    <Hero></Hero>
     <Sections></Sections>
     <Card></Card>
     <Footer></Footer>
    
    </div>
  )
}

export default App
