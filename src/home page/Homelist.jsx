import React, { useState } from 'react'
import { FaAirbnb, FaArrowRight, FaFacebookSquare, FaHandHoldingMedical, FaLandmark, FaLongArrowAltLeft, FaMapMarkerAlt, FaTwitter, FaUserFriends } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import 'swiper/css';

import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
export default function Homelist() {

   return (
      <div>

         {/* <star section></star> */}
         <div className=''>
            {/* <gri section></gri> */}
            {/* bg-white  grid grid-cols-1 md:grid-cols-2 py-6 p-4 lg:4 */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
               <SwiperSlide>
                  <div className='hidden md:block  h-96 w-full bg-cover bg-center relative'>
                     <img className='hidden md:block w-full h-full object-cover absolute mix-blend-overlay'
                        src='https://media.istockphoto.com/id/577303692/photo/house-exterior-view-of-entrance-porch-with-walkway.jpg?s=612x612&w=0&k=20&c=LGeUtsVea8B5ju30gpFWbGI9xkrMauO_kEsjEgEz1WQ='></img>
                     <div className='leading-6  flex items-center flex-col justify-center gap-8 mt-6 text-center'>
                        <div className='px-2 py-3 font-semibold'>
                           <span className='text-6xl text-white'>Betahoous Real Estate Website </span>
                        </div>
                        <div className='md:text-2xl mt-1 px-3 text-white'>
                           Lorem ipsum dolor sit amet conseomnis animi! Excepturi, repellat neque?
                           <div className='md:mt-2 mb-3'>
                              <Link to={'about'}><button className='bg-white border border-white text-blue-800 rounded px-6 p-2'>semore</button></Link>
                           </div>
                        </div>

                     </div>

                     {/* imge */}
                     {/* <div className='justify-between items-center py-4 px-10'>
    <img  className='md:block rounded-full   sm:rounded-full h-[400px] w-[400px]' src='https://images.unsplash.com/photo-1600563440091-ab11f30e01d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' ></img>
 </div> */}
                  </div>
               </SwiperSlide>
               <SwiperSlide> 
                  <div className='hidden md:block bg-gradient-to-t from-purple-900 h-96 w-full bg-cover bg-center relative'>
                  <img className='hidden md:block w-full h-full object-cover absolute mix-blend-overlay' src='https://images.unsplash.com/photo-1628624747271-4df6ca1e1ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'></img>
                  <div className='leading-6  flex items-center flex-col justify-center gap-8 mt-6 text-center'>
                     <div className='text-4xl px-2 py-3 font-semibold'>
                        <span className='text-6xl text-white'>Betahoous Real Estate Website </span>
                     </div>
                     <div className='md:text-2xl mt-1 px-3 text-white'>
                        Lorem ipsum dolor sit amet conseomnis animi! Excepturi, repellat neque?
                        <div className='md:mt-2 mb-3'>
                           <Link to={'about'}><button className='bg-white border border-white text-blue-800 rounded px-6 p-2'>semore</button></Link>
                        </div>
                     </div>

                  </div>

                  {/* imge */}
                  {/* <div className='justify-between items-center py-4 px-10'>
    <img  className='md:block rounded-full   sm:rounded-full h-[400px] w-[400px]' src='https://images.unsplash.com/photo-1600563440091-ab11f30e01d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' ></img>
 </div> */}
               </div>
               </SwiperSlide>
               <SwiperSlide> <div className='hidden md:block  h-96 w-full bg-cover bg-center relative'>
                  <img className='hidden md:block w-full h-full object-cover absolute mix-blend-overlay' src='https://media.istockphoto.com/id/172147689/photo/suburban-street.jpg?s=612x612&w=0&k=20&c=4TPWykFJzxNuPvm1P0X41dZyZKm1ngQoRJ4b1mCIu2g='></img>
                  <div className='leading-6  flex items-center flex-col justify-center gap-8 mt-6 text-center'>
                     <div className='text-4xl px-2 py-3 font-semibold'>
                        <span className='text-6xl text-white'>Betahoous Real Estate Website </span>
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
            {/* <gri section end></gri> */}










            <div id='clients' className='flex justify-center mt-6'>
               <div className=''>
                  <div className='text-center '>
                     <span className='font-medium text-2xl '>Our Clients</span>
                  </div>
                  <div className='text-2xl grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mb-20 md:grid-cols-2 lg:grid-cols-3   px-6 py-4 gap-4'>

                     <div className='shadow-md shadow-[#486381] hover:scale-110 duration-500 gap-2 box-border h-[200px] border-t'>
                        {/* <FaUserFriends/> */}
                        {/* <h5>2363</h5> */}
                        <div className='text-gray-500 Prompt  px-24 '>
                           <img className='rounded-full h-[60px] w-[60px] px-2 py-2' src='https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xpZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
                        </div>
                       <div className='mx-4'>
                       <span className='font-mono text-gray-500 '>
                           Lorem ipsum dolor sit<br></br>
                            amet consectetur<br></br>
                           Incidunt recusandae
                        </span>
                       </div>
                     </div>

                     <div className='shadow-md shadow-[#486381] hover:scale-110 duration-500 gap-2 box-border h-[200px] border-t'>
                        {/* <FaUserFriends/> */}
                        {/* <h5>2363</h5> */}
                        <div className='text-gray-500 Prompt  px-24 '>
                           <img className='rounded-full h-[60px] w-[60px] px-2 py-2' src='https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xpZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
                        </div>
                       <div className='mx-4'>
                       <span className='font-mono text-gray-500 '>
                           Lorem ipsum dolor sit<br></br>
                            amet consectetur<br></br>
                           Incidunt recusandae
                        </span>
                       </div>
                     </div>

                     <div className='shadow-md shadow-[#486381] hover:scale-110 duration-500 gap-2 box-border h-[200px] border-t'>
                        {/* <FaUserFriends/> */}
                        {/* <h5>2363</h5> */}
                        <div className='text-gray-500 Prompt  px-24 '>
                           <img className='rounded-full h-[60px] w-[60px] px-2 py-2' src='https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xpZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
                        </div>
                       <div className='mx-4'>
                       <span className='font-mono text-gray-500 '>
                           Lorem ipsum dolor sit<br></br>
                            amet consectetur<br></br>
                           Incidunt recusandae
                        </span>
                       </div>
                     </div>


                  


                  </div>
               </div>
            </div>



         </div>
         {/* <end section></end> */}

         {/* <midle sections></midle> */}
         <div id='guryaha' className='flex justify-center'>
            <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-16 sm:gap-2 '>
               <div className='bg-white shadow-md rounded h-[400px] w-[300px] py-2 mb-3 px-4  grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  <div className=''>
                     <div className=' shadow-md  rounded h-[150px] px-2 py-2 w-[210px]'>
                        <img className='h-[140px] px-2 py-2 ' src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'>
                        </img>
                     </div>
                     <div className='mt-2'>

                        {/* <FaMapMarkerAlt/> */}
                        <span className='text-blue-800 font-mono'>deynile,gubta</span><br></br>
                        <span className='text-gray-800 text-2xl'>$450</span>


                     </div>
                     <div className='mt-2 border-t p-2 flex justify-between'>
                        <div className='flex gap-2'>
                           <FaTwitter className='mt-1' />
                           <span>100k flowers</span>
                        </div>
                        <div className='flex gap-1'>
                           <FaFacebookSquare className='mt-1' />
                           <span>100k flowers</span>
                        </div>
                        <div className='flex gap-2'>
                           <FaTwitter className='mt-1' />
                           <span>100k flowers</span>
                        </div>
                     </div>
                  </div>
                  {/* <ridsgd */}

               </div>
               <div className='bg-white shadow-md rounded h-[400px] w-[300px] py-2 mb-3 px-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                  <div className=''>
                     <div className=' shadow-md   rounded h-[170px] px-2 py-2 mb-2 w-[225px] border-b-2'>
                        <img className='h-[160px] px-2 py-2 w-[210px]' src='https://media.istockphoto.com/id/1160876581/photo/3d-render-of-living-and-dining-room.jpg?s=612x612&w=0&k=20&c=PI5vsOgr9dur1etU8TWWU4H0FKWgESnr_xvEpHeWDAI='></img>
                     </div>
                     <div className='mt-2'>

                        {/* <FaMapMarkerAlt/> */}
                        <span className='text-blue-800 font-mono'>deynile,gubta</span><br></br>
                        <span className='text-gray-800 text-2xl'>$300</span>


                     </div>
                     <div className='mt-2 border-t p-2 flex justify-between'>
                        <div className='flex gap-2'>
                           <FaTwitter className='mt-1' />
                           <span>100k flowers</span>
                        </div>
                        <div className='flex gap-1'>
                           <FaFacebookSquare className='mt-1' />
                           <span>100k flowers</span>
                        </div>
                        <div className='flex gap-2'>
                           <FaTwitter className='mt-1' />
                           <span>100k flowers</span>
                        </div>
                     </div>
                  </div>
                  {/* <ridsgd */}

               </div>
               <div className=' bg-white shadow-md rounded h-[400px] w-[300px] py-2 mb-3 px-4  grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                  <div className=''>
                     <div className='shadow-md  rounded h-[160px] px-2 py-2 w-[225px]'>
                        <img className='h-[150px] px-2 py-2 w-[210px]' src='https://images.unsplash.com/photo-1560184897-502a475f7a0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'>
                        </img>
                     </div>
                     <div className='mt-2'>

                        {/* <FaMapMarkerAlt/> */}
                        <span className='text-blue-800 font-mono'>deynile,gubta</span><br></br>
                        <span className='text-gray-800 text-2xl'>$250</span>


                     </div>

                     <div className='mt-2 border-t p-2 flex justify-between'>
                        <div className='flex gap-2'>
                           <FaTwitter className='mt-1' />
                           <span>10,000k flowers</span>
                        </div>
                        <div className='flex gap-1'>
                           <FaFacebookSquare className='mt-1' />
                           <span>100k flowers</span>
                        </div>
                        <div className='flex gap-2'>
                           <FaTwitter className='mt-1' />
                           <span>100k flowers</span>
                        </div>
                     </div>
                  </div>
                  {/* <ridsgd */}

               </div>
               <div className='bg-white shadow-md rounded h-[400px] w-[300px] py-2 mb-3 px-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                  <div className=''>
                     <div className=' shadow-md rounded h-[170px] px-2 py-2 mb-2 w-[225px] border-b-2'>
                        <img className='h-[160px] px-2 py-2 w-[210px]' src='https://media.istockphoto.com/id/1160876581/photo/3d-render-of-living-and-dining-room.jpg?s=612x612&w=0&k=20&c=PI5vsOgr9dur1etU8TWWU4H0FKWgESnr_xvEpHeWDAI='></img>
                     </div>
                     <div className='mt-2'>

                        {/* <FaMapMarkerAlt/> */}
                        <span className='text-blue-800 font-mono'>deynile,gubta</span><br></br>
                        <span className='text-gray-800 text-2xl'>$300</span>


                     </div>
                     <div className='mt-2 border-t p-2 flex justify-between'>
                        <div className='flex gap-2'>
                           <FaTwitter className='mt-1' />
                           <span>100k flowers</span>
                        </div>
                        <div className='flex gap-1'>
                           <FaFacebookSquare className='mt-1' />
                           <span>100k flowers</span>
                        </div>
                        <div className='flex gap-2'>
                           <FaTwitter className='mt-1' />
                           <span>100k flowers</span>
                        </div>
                     </div>
                  </div>
                  {/* <ridsgd */}

               </div>
            </div>
         </div>









      </div>
   )
}
