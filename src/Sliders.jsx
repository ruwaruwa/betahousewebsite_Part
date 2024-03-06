import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-scroll';
export default function Sliders() {
  return (
    <div>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
         <SwiperSlide> <div className='hidden md:block bg-gradient-to-t from-purple-900 h-96 w-full bg-cover bg-center relative'>
   <img className='hidden md:block w-full h-full object-cover absolute mix-blend-overlay' src='https://images.unsplash.com/photo-1628624747271-4df6ca1e1ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'></img>
 <div className='leading-6  flex items-center flex-col justify-center gap-8 mt-6 text-center'>
 <div className='text-4xl px-2 py-3 font-semibold'>
<span>Betahoous Real Estate Website </span>
 </div>
 <div className='md:text-2xl mt-1 px-3 text-white'>
    Lorem ipsum dolor sit amet conseomnis animi! Excepturi, repellat neque?
    <div className='md:mt-2 mb-3'>
    <Link to={'/about'}><button className='bg-white border border-white text-blue-800 rounded px-6 p-2'>semore</button></Link>   
 </div>
 </div>

 </div>

 {/* imge */}
 {/* <div className='justify-between items-center py-4 px-10'>
    <img  className='md:block rounded-full   sm:rounded-full h-[400px] w-[400px]' src='https://images.unsplash.com/photo-1600563440091-ab11f30e01d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' ></img>
 </div> */}
</div>
     </SwiperSlide>
     <SwiperSlide> <div className='hidden md:block bg-gradient-to-t from-purple-900 h-96 w-full bg-cover bg-center relative'>
   <img className='hidden md:block w-full h-full object-cover absolute mix-blend-overlay' src='https://images.unsplash.com/photo-1628624747271-4df6ca1e1ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'></img>
 <div className='leading-6  flex items-center flex-col justify-center gap-8 mt-6 text-center'>
 <div className='text-4xl px-2 py-3 font-semibold'>
<span>Betahoous Real Estate Website </span>
 </div>
 <div className='md:text-2xl mt-1 px-3 text-white'>
    Lorem ipsum dolor sit amet conseomnis animi! Excepturi, repellat neque?
    <div className='md:mt-2 mb-3'>
    <Link to={'/about'}><button className='bg-white border border-white text-blue-800 rounded px-6 p-2'>semore</button></Link>   
 </div>
 </div>

 </div>

 {/* imge */}
 {/* <div className='justify-between items-center py-4 px-10'>
    <img  className='md:block rounded-full   sm:rounded-full h-[400px] w-[400px]' src='https://images.unsplash.com/photo-1600563440091-ab11f30e01d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' ></img>
 </div> */}
</div>
     </SwiperSlide>
         </Swiper>
        
    </div>
  )
}
