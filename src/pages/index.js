<<<<<<< HEAD
import Footer from './../components/Footer'
import Nav from '../components/Nav'
import React, {useState} from 'react';
import MyHometown from './MyHometown';
import AboutMe from './AboutMe';
import { Button, Link } from '@mui/material';
=======
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
>>>>>>> 46f34ee1bfb2128cc0633a4c40673de0d76fe2ac

export default function Home() {

  const [nav, setNav] = useState('aboutMe');
  let value;
  if(nav =='aboutMe') value = <AboutMe/>
  else value=<MyHometown /> 

  return (
<<<<<<< HEAD
    
    <div>

<main className="items-center justify-center w-full flex-1 mt-10 text-center">
      <Button className="menu-item" onClick={() => setNav('aboutMe')}>About</Button>  |  
        <Button className="menu-item" onClick={() => setNav('somthing')}> My Hometown</Button>
      </main>
        {value}
        <Footer />
=======
    <div className="flex flex-col w-full items-center ustify-center min-h-screen py-2">
      <Header />
      <main className="items-center justify-center w-full flex-1 mt-10 text-center">
        <Hero />
      </main>
      <Footer />
>>>>>>> 46f34ee1bfb2128cc0633a4c40673de0d76fe2ac
    </div>
  )
}
