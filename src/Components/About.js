import React,{useState} from 'react'
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs"
import {FaReact, FaHtml5, FaCss3, FaNode} from 'react-icons/fa'
import {SiMongodb,SiExpress, SiCplusplus, SiJavascript, SiTailwindcss } from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
// import {SiMongodb} from 'react-icons/Si'
export default function About(props)
{
    const[size,setSize]=useState(120)
    return(
        <section id="aboutId" className={`h-full bg-${props.mode==='dark'?'blue':'white'}`}>
        <h1 className={`text-${props.mode==='dark'?'white':'blue'} font-pat font-bold text-6xl md:text-4xl text-center`}>Technologies I use</h1>
  <div className=' grid md:grid-cols-2 grid-cols-3  text-center  my-10 md:my-0 gap-4'>
  <div onClick={()=>window.open('https://docs.mongodb.com/')} className='py-10 md:px-10 hover:cursor-pointer hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-2'><SiMongodb size={size} color="#05a300" className="w-full text-center"/></div>
  <div onClick={()=>window.open('https://expressjs.com/')} className='py-10 md:px-10 hover:cursor-pointer hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-2' ><SiExpress size={size} color="#7f8280" className="w-full text-center"/></div>
  <div onClick={()=>window.open('https://reactjs.org/')} className='py-10 md:px-10 hover:cursor-pointer hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-2' ><FaReact size={size} color="cyan" className="w-full text-center"/></div>
  <div onClick={()=>window.open('https://nodejs.org/en/about/')} className='py-10 md:px-10 hover:cursor-pointer hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-2'><FaNode size={size} color="#66ff61" className="w-full text-center"/></div>
  <div onClick={()=>window.open('https://www.geeksforgeeks.org/c-plus-plus/?ref=shm')} className='py-10 md:px-10 hover:cursor-pointer hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-2'><SiCplusplus size={size} color="#3b86ff" className="w-full text-center"/></div>
  <div onClick={()=>window.open('https://www.javascript.com/')} className='py-10 md:px-10 hover:cursor-pointer hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-2'><SiJavascript size={size} color="#fce808" className="w-full text-center"/></div>
  <div onClick={()=>window.open('https://developer.mozilla.org/en-US/docs/Web/HTML')} className='py-10 md:px-10 hover:cursor-pointer hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-2'><FaHtml5 size={size} color="#f24d3a" className="w-full text-center"/></div>
 
  <div  onClick={()=>window.open('https://developer.mozilla.org/en-US/docs/Web/CSS')} className='lg:hidden py-10 md:px-10 xl:hidden 2xl:hidden md:flex hover:cursor-pointer hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-2' ><FaCss3 size={size} color="#04abd9" className="w-full text-center"/></div>
  <div onClick={()=>window.open('https://tailwindcss.com/')} className='py-10 md:px-10 hover:cursor-pointer  hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-2'><SiTailwindcss  size={size} color="cyan" className="w-full text-center"/></div>
  <div onClick={()=>window.open('https://getbootstrap.com/docs/5.0/getting-started/introduction/')} className='py-10 md:px-10 hover:cursor-pointer hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-2'><BsFillBootstrapFill size={size} color="#7b02ab" className="w-full text-center"/></div>
        
        </div>
        </section>
    )
}