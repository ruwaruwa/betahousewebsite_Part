import React from 'react'
import {FaBuffer, FaFacebookF, FaFacebookMessenger, FaFacebookSquare, FaHireAHelper} from 'react-icons/fa'
export default function Fouter() {
  return (
    <div className='py-10 px-16'>
    <div id='gellary' className='bg-gray-800  py-16 px-16 flex flex-col md:flex-row lg:flex-row justify-around text-white items-center rounded-lg'>
{/* <foter section></foter> */}
<div>
        <div className='p-6 '>
       <div className=' shadow-md shadow-[#486381] hover:scale-110 duration-500 bg-blue-700 w-[200px] h-[150px] items-center px-4 py-4 rounded-lg  '>
         <div className=''>
         <FaBuffer className='bg-white text-green-600 text-2xl rounded'/>
         </div>
        
          <div className=''>
          <span className='text-white'>trusted agence</span><br></br>
          <span className='text-gray-400'>Lorem ipsum dolor Inventore</span>
          </div>
          </div>
         
       </div>
       <div className=' p-6'>
       <div className='shadow-md shadow-[#486381] hover:scale-110 duration-500   bg-gray-700 w-[200px] h-[150px] items-center px-4 py-4 rounded-lg  '>
         <div className=''>
         <FaBuffer className='bg-white text-green-600 text-2xl rounded'/>
         </div>
        
          <div className=''>
          <span className='text-white'>24 consule</span><br></br>
          <span className='text-gray-400'>Lorem ipsum dolor Inventore</span>
          </div>
          </div>
         
       </div>
        </div>

          {/* //// */}
        <div className='shadow-md shadow-[#486381] hover:scale-110 duration-500   bg-white border rounded p-4 h-[350px] w-[310px]'>
<img className='rounded-lg h-[220px] w-[390px] shadow-sm' src='https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'></img>
<div>
  <div className='text-2xl text-black'>warta nabada</div>
  <div><spa className='text-2xl text-blue-800'>$250/USD</spa></div>
</div>
<div className='flex gap-2'>
  <div className='flex gap-2'><FaFacebookSquare className='mt-1 text-blue-800'/>
  <span className='text-gray-500'>bedrom1</span>
  </div>
  <div className='flex gap-2'>
    <FaFacebookMessenger className='mt-1 text-blue-800'/>
  <span className='text-gray-500 #bf3773'>bedrom2</span>
  </div>
  <div className='flex gap-2'><FaHireAHelper className='mt-1 text-blue-800'/>
  <span className='text-gray-500'>3bedrom</span>
  </div>
</div>
        </div>
        <div>
        <div className='p-6'>
       <div className='shadow-md shadow-[#486381] hover:scale-110 duration-500   bg-blue-700 w-[200px] h-[150px] items-center px-4 py-4 rounded-lg  '>
         <div className=''>
         <FaBuffer className='bg-white text-green-600 text-2xl rounded'/>
         </div>
        
          <div className=''>
          <span className='text-white'>itseveryware</span><br></br>
          <span className='text-gray-400'>Lorem ipsum dolor Inventore</span>
          </div>
          </div>
         
       </div>
       <div className=' p-6'>
       <div className='shadow-md shadow-[#486381] hover:scale-110 duration-500   bg-gray-700 w-[200px] h-[150px] items-center px-4 py-4 rounded-lg  '>
         <div className=''>
         <FaBuffer className='bg-white text-green-600 text-2xl rounded'/>
         </div>
        
          <div className=''>
          <span className='text-white'>easy peyment</span><br></br>
          <span className='text-gray-400'>Lorem ipsum dolor Inventore</span>
          </div>
          </div>
         
       </div>
        </div>
      
      
    {/* <end foter section></foter> */}
    </div>
   
    </div>
  )
}
