import React,{useState} from 'react'
import Header from "../component/Header";
import Layout from "../component/Layout";
import Statistics from './Statistics';
import About from './About';
function Crowdfund() {
 
  return (
    <>
      <Header />
      <main>
        <Layout/>
        <Statistics />
        <About />
      </main>
    </>
  )
}

export default Crowdfund