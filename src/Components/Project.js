import React from 'react'
// import Layout from '../Components/Layout'
// import {Link} from 'react-router-dom'
// import { GiNotebook} from "react-icons/gi"
import {FaReact, FaNode,  FaHtml5, FaCss3} from 'react-icons/fa'
// import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs"
import {SiMongodb,SiExpress, SiMaterialui, SiJavascript} from 'react-icons/si'
import {BsFillBootstrapFill} from 'react-icons/bs'
// import './Project.css'
// import Header from '../Components/Header'
export default function Project(props)
{
    return(
        <div id="projectsId" className={`bg-${props.mode==='dark'?'blue':'white'} mt-10 mb-10`}>
        <div className={`grid md:grid-cols-1 sm:grid-cols-1 grid-cols-3 gap-4  text-center font-pat items-center  text-${props.mode==='dark'?'white':'blue'}`}>
   <div className="h-1/2"></div>
   <div className="h-1/2 flex md:ml-6 ml-12 text-center  flex-row"><div className="text-xs "><lottie-player src="https://assets8.lottiefiles.com/packages/lf20_w8z8ph5m.json"  background="transparent"  speed="1" loop autoplay></lottie-player></div><div className='xl:text-6xl 2xl:text-6xl lg:text-4xl md:text-4xl sm:text-4xl  2xl:translate-y-10 xl:translate-y-10'><h1>Projects</h1></div></div>
   <div className="h-1/2"></div>
   <div className={` grid  grid-cols-2 h-32 ml-4  md:mr-4 bg-${props.mode==='dark'?'h-blue':'light-silver'} border-solid border-2 py-4 rounded-lg border-${props.mode==='dark'?'h-blue':'silver'}  hover:shadow-lg ${props.mode==='dark'?'hover:shadow-#00FFFF':'hover:shadow-silver-shadow'}-500/50 hover:-translate-y-1 hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-1 border-${props.mode==='dark'?'hover:f-blue':'hover:silver-shadow'}`}>
   <div className='h-1/2 text-xl  font-acme p-2'><h1>Dev Homoeo Hall</h1></div>
   <div className='h-1/2 flex p-2'><SiMongodb size={30} color="#05a300" className="w-full text-center"/><SiExpress size={30} color="#7f8280" className="w-full text-center"/><FaReact size={30} color="cyan" className="w-full text-center"/><FaNode size={30} color="#66ff61" className="w-full text-center"/><SiMaterialui size={30} color="#04abd9" className="w-full text-center"/></div>
   <div className={`bg-${props.mode==='dark'?'h-blue':'light-silver'}  text-${props.mode==='dark'?'white':'blue'} hover:cursor-pointer mt-2.5 text-xl  ${props.mode==='dark'?'hover:text-f-blue':'hover:text-silver-shadow'}`}  onClick={()=>window.open('https://devhomoeohall.netlify.app/')}><h2>View Live</h2></div>
   <div className={`bg-${props.mode==='dark'?'h-blue':'light-silver'}  text-${props.mode==='dark'?'white':'blue'} hover:cursor-pointer mt-2.5 text-xl  ${props.mode==='dark'?'hover:text-f-blue':'hover:text-silver-shadow'}`} onClick={()=>window.open("https://github.com/khushboo683/Dev-Homoeo-Hall")}><h2>View Repo</h2></div>
   
   </div>
   <div className={` grid  grid-cols-2 h-32 ml-4  md:mr-4 bg-${props.mode==='dark'?'h-blue':'light-silver'} border-solid border-2 py-4 rounded-lg border-${props.mode==='dark'?'h-blue':'silver'}  hover:shadow-lg hover:shadow-${props.mode==='dark'?'cyan':'silver-shadow'}-500/50 hover:-translate-y-1 hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-1 hover:border-${props.mode==='dark'?'f-blue':'silver-shadow'}`}>
   
   <div className='h-1/2 text-xl font-acme p-2'><h1>Foodie</h1></div>
   <div className='h-1/2 flex p-2'><SiMongodb size={30} color="#05a300" className="w-full text-center"/><SiExpress size={30} color="#7f8280" className="w-full text-center"/><FaNode size={30} color="#66ff61" className="w-full text-center"/><BsFillBootstrapFill size={30} color="#7b02ab" className="w-full text-center"/></div>
   <div className={`bg-${props.mode==='dark'?'h-blue':'light-silver'}  text-${props.mode==='dark'?'white':'blue'} hover:cursor-pointer mt-2.5 text-xl  ${props.mode==='dark'?'hover:text-f-blue':'hover:text-silver-shadow'}`}  onClick={()=>window.open('https://foodiepana.herokuapp.com/')}><h2>View Live</h2></div>
   <div className={`bg-${props.mode==='dark'?'h-blue':'light-silver'}  text-${props.mode==='dark'?'white':'blue'} hover:cursor-pointer mt-2.5 text-xl  ${props.mode==='dark'?'hover:text-f-blue':'hover:text-silver-shadow'}`}  onClick={()=>  window.open("https://github.com/khushboo683/Foodie")}><h2>View Repo</h2></div>
   </div>
   <div className={` grid  grid-cols-2 h-32 ml-4  md:mr-4 bg-${props.mode==='dark'?'h-blue':'light-silver'} border-solid border-2 py-4 rounded-lg border-${props.mode==='dark'?'h-blue':'silver'}  hover:shadow-lg hover:shadow-${props.mode==='dark'?'cyan':'silver-shadow'}-500/50 hover:-translate-y-1 hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-1 hover:border-${props.mode==='dark'?'f-blue':'silver-shadow'}`}>
   
   <div className='h-1/2 text-xl font-acme p-2'><h1>Rainbow</h1></div>
   <div className='h-1/2 flex p-2'><FaReact size={30} color="cyan" className="w-full text-center"/><FaCss3 size={30} color="#04abd9" className="w-full text-center"/><BsFillBootstrapFill size={30} color="#7b02ab" className="w-full text-center"/></div>
   <div className={`bg-${props.mode==='dark'?'h-blue':'light-silver'}  text-${props.mode==='dark'?'white':'blue'} hover:cursor-pointer mt-2.5 text-xl  ${props.mode==='dark'?'hover:text-f-blue':'hover:text-silver-shadow'}`} onClick={()=> window.open("https://rainbowapp.netlify.app")}><h2>View Live</h2></div>
   <div className={`bg-${props.mode==='dark'?'h-blue':'light-silver'}  text-${props.mode==='dark'?'white':'blue'} hover:cursor-pointer mt-2.5 text-xl  ${props.mode==='dark'?'hover:text-f-blue':'hover:text-silver-shadow'}`} onClick={()=> window.open("https://github.com/khushboo683/Rainbow")}><h2>View Repo</h2></div>
   
   </div>
   <div className={` grid  grid-cols-2 h-32 ml-4  md:mr-4 bg-${props.mode==='dark'?'h-blue':'light-silver'} border-solid border-2 py-4 rounded-lg border-${props.mode==='dark'?'h-blue':'silver'}  hover:shadow-lg hover:shadow-${props.mode==='dark'?'cyan':'silver-shadow'}-500/50 hover:-translate-y-1 hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-1 hover:border-${props.mode==='dark'?'f-blue':'silver-shadow'}`}>
   
   <div className='h-1/2 text-xl font-acme p-2'><h1>Covid+</h1></div>
   <div className='h-1/2 flex p-2'><FaReact size={30} color="cyan" className="w-full text-center"/><FaCss3 size={30} color="#04abd9" className="w-full text-center"/><BsFillBootstrapFill size={30} color="#7b02ab" className="w-full text-center"/></div>
   <div className={`bg-${props.mode==='dark'?'h-blue':'light-silver'}  text-${props.mode==='dark'?'white':'blue'} hover:cursor-pointer mt-2.5 text-xl  ${props.mode==='dark'?'hover:text-f-blue':'hover:text-silver-shadow'}`} onClick={()=> window.open("https://covidplus.netlify.app")}><h2>View Live</h2></div>
   <div className={`bg-${props.mode==='dark'?'h-blue':'light-silver'}  text-${props.mode==='dark'?'white':'blue'} hover:cursor-pointer mt-2.5 text-xl  ${props.mode==='dark'?'hover:text-f-blue':'hover:text-silver-shadow'}`} onClick={()=> window.open("https://github.com/khushboo683/Covid-")}><h2>View Repo</h2></div>
   
   </div>
   <div className={` grid  grid-cols-2 h-32 ml-4  md:mr-4 bg-${props.mode==='dark'?'h-blue':'light-silver'} border-solid border-2 py-4 rounded-lg border-${props.mode==='dark'?'h-blue':'silver'}  hover:shadow-lg hover:shadow-${props.mode==='dark'?'cyan':'silver-shadow'}-500/50 hover:-translate-y-1 hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-1 hover:border-${props.mode==='dark'?'f-blue':'silver-shadow'}`}>
   <div className='h-1/2 text-xl font-acme p-2'><h1>Candy Crush</h1></div>
   <div className='h-1/2 flex p-2'><SiJavascript size={30} color="#fce808" className="w-full text-center"/><FaHtml5 size={30} color="#f24d3a" className="w-full text-center"/>

   <FaCss3 size={30} color="#04abd9" className="w-full text-center"/></div>
   <div className={`bg-${props.mode==='dark'?'h-blue':'light-silver'}  text-${props.mode==='dark'?'white':'blue'} hover:cursor-pointer mt-2.5 text-xl  ${props.mode==='dark'?'hover:text-f-blue':'hover:text-silver-shadow'}`} onClick={()=> window.open("https://stealyourcandies.netlify.app")}><h2>View Live</h2></div>
   <div className={`bg-${props.mode==='dark'?'h-blue':'light-silver'}  text-${props.mode==='dark'?'white':'blue'} hover:cursor-pointer mt-2.5 text-xl  ${props.mode==='dark'?'hover:text-f-blue':'hover:text-silver-shadow'}`} onClick={()=> window.open("https://github.com/khushboo683/CandyCrush")}><h2>View Repo</h2></div>
   
   
   </div>
   <div className={` grid  grid-cols-2 h-32 ml-4  md:mr-4 bg-${props.mode==='dark'?'h-blue':'light-silver'} border-solid border-2 py-4 rounded-lg border-${props.mode==='dark'?'h-blue':'silver'}  hover:shadow-lg hover:shadow-${props.mode==='dark'?'cyan':'silver-shadow'}-500/50 hover:-translate-y-1 hover:ease-linear hover:transition-all hover:duration-150 hover:-translate-y-1 hover:border-${props.mode==='dark'?'f-blue':'silver-shadow'}`}>
   <div className='h-1/2 text-xl font-acme p-2'><h1>Text Utils</h1></div>
   <div className='h-1/2 flex p-2'><FaReact size={30} color="cyan" className="w-full text-center"/><FaCss3 size={30} color="#04abd9" className="w-full text-center"/><BsFillBootstrapFill size={30} color="#7b02ab" className="w-full text-center"/></div>
   <div className={`bg-${props.mode==='dark'?'h-blue':'light-silver'}  text-${props.mode==='dark'?'white':'blue'} hover:cursor-pointer mt-2.5 text-xl  ${props.mode==='dark'?'hover:text-f-blue':'hover:text-silver-shadow'}`} onClick={()=> window.open("https://justtext.netlify.app")}><h2>View Live</h2></div>
   <div className={`bg-${props.mode==='dark'?'h-blue':'light-silver'}  text-${props.mode==='dark'?'white':'blue'} hover:cursor-pointer mt-2.5 text-xl  ${props.mode==='dark'?'hover:text-f-blue':'hover:text-silver-shadow'}`} onClick={()=> window.open("https://github.com/khushboo683/Text-Utils")}><h2>View Repo</h2></div>
   
   
   </div>
   </div>
        </div>
    )
}