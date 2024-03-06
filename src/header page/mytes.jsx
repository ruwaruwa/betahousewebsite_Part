<div className='flex justify-between  border-b bg-white shadow-lg px-0 p-2'>
     {/* <//logo sections //> */}
  <div className='text-6xl flex gap-4  '>
  {/* logo icon /> */}
<FaHome className='text-pink-800  text-4xl'/>
    <span className='text-pink-800 text-4xl md:text-3xl font-semibold'>BetaLogo</span>
  </div>
    {/* <// end logo //> */}
      
  <div className= 'flex justify-between items-center gap-4 '>
        <ul className= ' font-serif hidden  md:flex gap-5'>
          {/* {menu.map((items,index)=>{
            return  <Link key={index} to={items.path}>  <li className='hover:text-blue-600  hover:border-b py-2'>home</li> </Link>
            
          })} */}
        {/* <Link to={'/home'}><li className='hover:text-red-500  hover:border-b py-2'>Home</li></Link> 
     <Link to={'/guryaha'}><li className='hover:text-red-500  hover:border-b py-2'>Guryaha</li></Link> 
         <Link to={'/gellary'}>   <li className='hover:text-red-500  hover:border-b py-2'> gellary</li></Link>
         <Link to={'/about'}>  <li className='hover:text-pink-800  hover:border-b py-2'>about</li></Link>
         <Link to={'/service'}>  <li className='hover:text-blue-900  hover:border-b py-2'>service</li></Link> */}
         {/* <li className='hover:text-blue-700 hover:border-b py-2'>contact</li> */}
         <Link to={"/contact"} spy={true} smooth={true} offset={50} duration={500} delay={1000} onClick={closemenu} >contacts</Link>
        </ul>

  {/* <div> */}
  <button className='px-8 p-1.5 bg-white border-2 rounded-2xl border-blue-400
     hover:text-white hover:bg-red-600 md:border-b-2 text-sm md:font-semibold  hidden  md:block'>login
   {/* <FaEquals className='text-3xl block md:hidden' /> */}
     </button>
     <button> <FaEquals onClick={()=>setismobilebut(!mobilebuton)} className='text-3xl block md:hidden' /> </button>
  {/* </div> */}
     </div>
    
     {/* </// menu end/ */}


  

     </div>