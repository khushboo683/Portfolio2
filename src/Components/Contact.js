import React,{useState} from 'react'
import axios from 'axios'
// import { IoIosMail } from "react-icons/io"
// import Layout from '../Components/Layout'
export default function Contact(props)
{
    // const FORM_ENDPOINT = `${process.env.END_POINT}`;

    const [submitted, setSubmitted] = useState(false);
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState('');

    const formSubmit=(e)=>{
e.preventDefault();

let data={
  name:name,
  email:email,
  message:message
}
console.log(data);
axios.post('https://portfoliobackkhushboo.herokuapp.com/sendmail',data)
.then(res=>{
  setSubmitted(true);
},resetForm())
.catch(()=>{
  console.log('message not sent')
})
    }
    const resetForm=()=>{
      setName('')
      setEmail('')
      setMessage('')
      setTimeout(()=>{
        setSubmitted(false)
      },10000)
    }

return(
    
   
   <div id="contactId" className={`bg-${props.mode==='dark'?'blue':'white'}  text-${props.mode==='dark'?'white':'blue'} `} >
   
  
   <div className="text-6xl md:text-4xl font-pat  "><div className="flex md:translate-y-6 mx-8 "><h1 className='my-12 text-center'>Contact me</h1><div className="h-40 -translate-y-20 my-12"><lottie-player src="https://assets4.lottiefiles.com/packages/lf20_sxk2ofvv.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player></div></div>
   <p className=" mb-0  mx-8 -translate-y-6 text-xl">In case you want to have a conversation with me about anything, feel free to contact me!</p>
   {submitted===true && <div className='text-xl mx-8 border-2 border-white p-2 rounded-lg bg-f-blue text-blue font-bold'><h3>Thank you! I will try to contact you back as soon as possible! 😄</h3></div>}
   <form className="md:mt-4 mx-8 "  onSubmit={formSubmit} method="POST" >
   
   <div className="mb-3 pt-0">
   <input
   onChange={(e)=>setName(e.target.value)}
     type="text"
     placeholder="Your name"
     name="name"
     value={name}
     className={`px-3 py-3 placeholder-${props.mode==='dark'?'gray':'blue'}-400 text-white relative ${props.mode==='dark'?'bg-h-blue':'bg-white'}  rounded text-sm border-${props.mode==='dark'?'0':'2'}  shadow outline-none focus:outline-none focus:ring w-full`}
     required
   />
 </div>
 <div className="md:mb-3 mb-9 pt-0">
   <input
   onChange={(e)=>setEmail(e.target.value)}
     type="email"
     placeholder="Your email"
     name="email"
     value={email}
     className={`px-3 py-3 placeholder-${props.mode==='dark'?'gray':'blue'}-400 text-white relative ${props.mode==='dark'?'bg-h-blue':'bg-white'}  rounded text-sm border-${props.mode==='dark'?'0':'2'} shadow outline-none focus:outline-none focus:ring w-full`}
     required
   />
 </div>
 <div className="mb-3 pt-0">
        <textarea
        onChange={(e)=>setMessage(e.target.value)}
          placeholder="Your message"
          name="message"
          value={message}
          className={`px-3 py-3  text-${props.mode==='dark'?'white':'blue'}  relative bg-${props.mode==='dark'?'h-blue':'white'} rounded text-sm border-${props.mode==='dark'?'0':'2'} shadow outline-none focus:outline-none focus:ring w-full`}
          required
        />
      </div>
      <div className="mb-0 md:mt-6  -translate-y-2 pt-0 ">
      <button
        className={`bg-${props.mode==='dark'?'h-blue':'white'} hover:border-solid hover:border-2 hover:-translate-y-1 hover:border-${props.mode==='dark'?'white':'silver'} text-${props.mode==='dark'?'white':'blue'}  border-${props.mode==='dark'?'0':'2'} font-bold text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none`}
        type="submit"
      >
        Send a message
      </button>
    </div>
   </form>
   </div>
   
   </div>
   
   
)
}