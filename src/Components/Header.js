import React,{useState} from 'react'
import {Link} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import { BsMoonFill, BsFillSunFill } from "react-icons/bs"

export default function Header(props)
{
    const[menu,setMenu]=useState('md:hidden');

    const handleClick=()=>{
if(menu==='md:hidden')
setMenu('');
else setMenu('md:hidden')
    }
    // const pathname=window.location.pathname;
    return(

        <div className={`${props.mode==='dark'?'bg-blue':'bg-white'}  z-50 opacity-75 fixed w-full  text-${props.mode==='dark'?'white':'black'} text-lg `}>
        <div className={`flex justify-between items-center p-2 font-pat ${menu!=='md:hidden' && 'flex-col'}`}>
        <div className='flex text-2xl ml-2 justify-between w-full'><Link to='homeId'  spy={true} 
        smooth={true} 
        duration={800}><h1 className='hover:cursor-pointer'><strong>K D</strong></h1></Link><FaBars className={`lg:hidden xl:hidden 2xl:hidden md:flex sm:flex  hover:cursor-pointer ${menu}`} onClick={handleClick}/></div>
        
        <div>
        
        <ul className='flex md:hidden sm:hidden'>
        {props.mode==='light' && <li onClick={()=>props.setMode('dark')} className='hover:cursor-pointer mx-2 p-2 mt-1'><BsMoonFill size={20}/></li>}
       {props.mode==='dark' && <li onClick={()=>props.setMode('light')}  className='hover:cursor-pointer mx-2 p-2 mt-1'><BsFillSunFill size={20}/></li>} 
        <li className={`mx-2 ${props.mode==='dark'?'hover:bg-h-blue':'hover:bg-silver'} hover:cursor-pointer rounded-md p-2`} ><Link to="aboutId" spy={true} 
        smooth={true} 
        duration={800}>About</Link></li>
        <li className={`mx-2 hover:bg-${props.mode==='dark'?'h-blue':'silver'} hover:cursor-pointer rounded-md p-2`}><Link to="projectsId" spy={true} 
        smooth={true} 
        duration={800}>Projects</Link></li>
        <li className={`mx-2 hover:bg-${props.mode==='dark'?'h-blue':'silver'} hover:cursor-pointer rounded-md p-2`}><Link to="contactId" spy={true} 
        smooth={true} 
        duration={800}>Contact</Link></li>
        <li className={`mx-2 hover:bg-${props.mode==='dark'?'h-blue':'silver'} hover:cursor-pointer rounded-md p-2`} onClick={()=>window.open('https://www.dropbox.com/s/d07mylb9a7lf77p/KhushbooDevCVResume.pdf?dl=0')}><a href="#">Resume</a></li>
        </ul>
        </div>
        </div>
        <div className={`lg:hidden xl:hidden 2xl:hidden md:flex items-start flex-col font-pat ${menu}`}>
        <ul>
        {props.mode==='light' && <li onClick={()=>props.setMode('dark')} className='hover:cursor-pointer mx-2 p-2 mt-1'><BsMoonFill size={20}/></li>}
       {props.mode==='dark' && <li onClick={()=>props.setMode('light')}  className='hover:cursor-pointer mx-2 p-2 mt-1'><BsFillSunFill size={20}/></li>} 
        <li className='mx-2 hover:bg-h-blue rounded-md p-2' ><Link to="aboutId" spy={true} 
        smooth={true} 
        duration={800}>About</Link></li>
        <li className='mx-2 hover:bg-h-blue rounded-md p-2'><Link to="projectsId" spy={true} 
        smooth={true} 
        duration={800}>Projects</Link></li>
        <li className='mx-2 hover:bg-h-blue rounded-md p-2'><Link to="contactId" spy={true} 
        smooth={true} 
        duration={800}>Contact</Link></li>
        <li className='mx-2 hover:bg-h-blue rounded-md p-2' onClick={()=>window.open('https://www.dropbox.com/s/d07mylb9a7lf77p/KhushbooDevCVResume.pdf?dl=0')}><a href="#">Resume</a></li>
        </ul>
        </div>
        
        </div>
    )
}