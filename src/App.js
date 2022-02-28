import React,{useState} from 'react'
// import Layout from './Components/Layout'


import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About';
import Project from './Components/Project'
import Contact from './Components/Contact'
// import Resume from './Components/Resume'

export default function App()
{
  const[mode,setMode]=useState('dark');
  
return(
  
  
  <div className={`bg-${mode==='dark'?'blue':'white'}`}>
  <Header setMode={setMode} mode={mode}/>
  <Home mode={mode}/>
  <About mode={mode}/>
  <Project mode={mode}/>
  <Contact mode={mode}/>
   <Footer mode={mode}/>
 
   
  
   </div>
   
  
    


    
 
  
)
}