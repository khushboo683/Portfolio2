import React from 'react'
import Typewriter from "typewriter-effect";
// // import Layout from '../Components/Layout'
// import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs"
// import {FaReact, FaHtml5, FaCss3, FaNode} from 'react-icons/fa'
// import {SiMongodb,SiExpress, SiCplusplus, SiJavascript, SiTailwindcss } from 'react-icons/si'
// import {BsFillBootstrapFill} from 'react-icons/bs'
// // import {SiMongodb} from 'react-icons/Si'
// import Footer from '../Components/Footer'
// import Layout from '../Components/Layout'
export default function Home(props)
{
    return(
        <div id="homeId" className={`bg-${props.mode==='dark'?'blue':'white'}`}>
        
        <div className='grid md:grid-cols-1 md:grid-cols-1 grid-cols-2 h-screen items-center '>
  <div className='h-1/2 '>
  <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_hucoqyyg.json"  background="transparent"  speed="1"   loop autoplay></lottie-player>
  </div>
  <div className={`text-${props.mode==='dark'?'white':'blue'} md:m-0 md:p-0 md:ml-4 md:px-3.5 my-4 md:p-5 md:-translate-y-12`}>
  <div>
  <h1 className='text-5xl md:text-2xl sm:text-2xl  text-center md:mx-4 md:p-0 font-acme'>Hii, I am Khushboo and I am a</h1>
  </div>
 
  <div className='text-5xl md:text-2xl md:text-center text-center font-acme text-b-blue my-8 font-bold'><Typewriter

  options={{
    strings: ['Developer','Programmer', 'Designer','Coder'],
    autoStart: true,
    loop: true,
  }}
  /></div>
 

  </div>
        </div>
        </div>
    )
}