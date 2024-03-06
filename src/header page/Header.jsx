import React, { useState } from 'react'
import { FaBuffer, FaEquals, FaHome, FaTimes } from 'react-icons/fa';

import { Outlet} from 'react-router-dom'
import Homelist from '../home page/Homelist';
import Fouter from '../home page/Fouter';
import Pagelines from '../home page/Pagelines';
import { Typedanimations } from './Types';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Foter from '../Foutepage/Foter';
export default function   Headers(){
  const[menu,setmenu]=useState()
  const[mobilebuton,setismobilebut]=useState(false)
  const[primisions,setprimitons]=useState(true)
  const[click,setclick]=useState(false)
  const handleclickmenu=()=>setclick(!click)
  const [showmenu,setshowmenu]=useState(false)
  const closemenu=()=>setclick(false)
  
  return (

    <>

    {primisions && <div className='bg-blue-400 text-white py-1 text-center flex justify-center gap-20'>
{/* <span>Quickly bring your app to life with less code, using a modern declarative approach to UI</span> */}
<div>

      <Typedanimations/>
    </div>
<FaTimes onClick={()=>setprimitons(false)}/>
    </div>}
    <div>
      
    <div className='flex justify-between mx-10  md:flex-row '>
    <div className='text-6xl flex gap-4  '>
  {/* logo icon /> */}
<FaHome className='text-pink-800  text-4xl'/>
    <span className='text-pink-800 text-4xl md:text-3xl font-semibold'>BetaLogo</span>
  </div>
  <button> <FaEquals onClick={()=>setismobilebut(!mobilebuton)} className='text-3xl block md:hidden' /> </button>
 
  <div className= 'hidden items-center gap-4  md:block  '>
      <div className='flex flex-row gap-2 mt-2'>
      <ul className= ' font-serif  md:flex gap-5 mt-1'>
       
       <Link to={"home"} spy={true} smooth={true} offset={50} duration={500}  onClick={closemenu} >home</Link>
       <Link to={"clients"} spy={true} smooth={true} offset={50} duration={500}  onClick={closemenu} >clents</Link>
       <Link to={"gellary"} spy={true} smooth={true} offset={50} duration={500}  onClick={closemenu} >gellary</Link>
       <Link to={"about"} spy={true} smooth={true} offset={50} duration={500}  onClick={closemenu} >about</Link>
       {/* <Link to={"service"} spy={true} smooth={true} offset={50} duration={500}  onClick={closemenu} >service</Link> */}
       <Link to={"contact"} spy={true} smooth={true} offset={50} duration={500} onClick={closemenu} >contacts</Link>
      </ul>
      <button className='px-8 p-1.5 bg-white border-2 rounded-2xl border-blue-400
     hover:text-white hover:bg-red-600 md:border-b-2 text-sm md:font-semibold  hidden  md:block'>login
 </button>
 
      </div>

 
  
 

     </div>
    </div>
  
      {/* {sidebar sections} */}
  
   
<div className={` ${mobilebuton ? 'block' : "hidden"} w-[100%] h-screen md:hidden  relative center top-10  `}>
<div className=''>
     <button className='bg-black text-white  rounded-lg w-[100%] p-2'>Login in</button>
    </div>
    <div className='mt-2'>
     <button className='bg-blue-800 text-white px-10 py-2 rounded-lg  w-[100%]'>sign up </button>
    </div>
  
  <div className='border-t-2 border-l-2  mt-1 '>
    
        <ul className=' text-blue-700 font-serif mx-4  md:flex gap-2 flex flex-col'>
          {/* {menu.map((items,index)=>{
            return  <Link key={index} to={items.path}>  <li className='hover:text-blue-600  hover:border-b py-2'>home</li> </Link>
            
          })} */}
        <Link to={'/home'} ><li className='hover:text-red-500  hover:border-b py-2'>Home</li>
        </Link> 
     <Link to={'guryaha'} ><li className='hover:text-red-500  hover:border-b py-2'>Guryaha</li></Link> 
         <Link to={'gellary'}>   <li className='hover:text-red-500  hover:border-b py-2'> gellary</li></Link>
         <Link to={'about'} onClick={()=>{
                            this.hide();
           }}>  <li className='hover:text-pink-800  hover:border-b py-2'>about</li></Link>
         <Link to={'service'}>  <li className='hover:text-blue-900  hover:border-b py-2'>service</li></Link>
         <Link to={'contact'}> <li className='hover:text-blue-700 hover:border-b py-2'>contact</li></Link>
        </ul>
      

     </div>
</div>

  
    {/* <end sidebarmenu></end> */}
    
<div className='bg-white py-1 px-4 h-full md:px-2  '>


      {/* <! header mennu> */}
     <div className='flex justify-between  px-0 p-2'>
     {/* <//logo sections //> */}
 
    {/* <// end logo //> */}
      {/* <> meshan waxbo kuma qorna haku wareerin</> */}
 
    
     {/* </// menu end/ */}


  

     </div>
     {/* <///end menu> */}
  
<Homelist/>
<Fouter/>
<Pagelines/>
<Foter/>
     </div>
    {/* <div className='p-2'>
     
    </div> */}
  
   
  </div>

   
    </>
   
  )
}
