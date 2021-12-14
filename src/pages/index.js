import Footer from './../components/Footer'
import Nav from '../components/Nav'
import React, {useState} from 'react';
import MyHometown from './MyHometown';
import AboutMe from './AboutMe';
import { Button, Link } from '@mui/material';

export default function Home() {

  const [nav, setNav] = useState('aboutMe');
  let value;
  if(nav =='aboutMe') value = <AboutMe/>
  else value=<MyHometown /> 

  return (
    
    <div>

<main className="items-center justify-center w-full flex-1 mt-10 text-center">
      <Button className="menu-item" onClick={() => setNav('aboutMe')}>About</Button>  |  
        <Button className="menu-item" onClick={() => setNav('somthing')}> My Hometown</Button>
      </main>
        {value}
    </div>
  )
}
