import React from 'react'
import Header from '../../components/Header'
import Hero from './Hero'
import Technology from './Technology'
import Projects from './Projects'
import Footer from './Footer'

const ClientPage = () => {
  return (
    <>
      <Header left='&copy; 2024' right='LOGIN'/>
      <Hero />
      <Technology />
      <Projects />
      <hr />
      <Footer />
    </>
  )
}

export default ClientPage
