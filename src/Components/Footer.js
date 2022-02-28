import React from 'react'
// import Mailto from 'react-mailto'
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs"

export default function Footer(props)
{
    // var Mailto = require('react-mailto');
return(
    
    <div className={`bg-${props.mode==='dark'?'blue':'white'}  mt-20 flex justify-center  text-center text-${props.mode==='dark'?'white':'blue'} 
    inset-x-0
    bottom-0
    p-4 `}>
   
   

    
    <div onClick={()=>window.open('https://github.com/khushboo683')} className='mx-4 hover:cursor-pointer'><BsGithub size={20} color={`${props.mode==='dark'?'white':'#10122e'}`}/></div>
    <div onClick={()=>window.open('https://www.linkedin.com/in/khushboo-dev-98ab941b5/')} className='mx-4 hover:cursor-pointer'><BsLinkedin size={20} color={`${props.mode==='dark'?'white':'#10122e'}`}/></div>
    <div onClick={()=>window.open('https://www.instagram.com/true_fragrance/')} className='mx-4 hover:cursor-pointer'><BsInstagram size={20} color={`${props.mode==='dark'?'white':'#10122e'}`}/></div>
    <div onClick={()=>window.open('https://www.facebook.com/profile.php?id=100004997767998')} className='mx-4 hover:cursor-pointer'> <BsFacebook size={20} color={`${props.mode==='dark'?'white':'#10122e'}`}/></div>
    
    </div>
   
)
}