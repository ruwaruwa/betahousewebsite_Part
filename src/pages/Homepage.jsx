import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getallpi } from '../shared/allpi'
import { FaFacebookMessenger, FaFacebookSquare, FaHireAHelper } from 'react-icons/fa'

export default function Homepage() {
  const [email,sethomelistimg]=useState('')
  const [her_title,sethomelisher_title]=useState([])

  useEffect(()=>{
const gethomelis=async()=>{
try {
  const {data}= await getallpi('/shirkada')
sethomelistimg(data[0]?.email),
sethomelisher_title(data[0]?.her_title)
console.log(data)
} catch (error) {
  console.log(error.message)
}
// const xogta=await axios.get('https://betahouseapi.vercel.app/shirkada')
// const mydata= await xogta.data
// sethomelisher_title(mydata.data)
//  console.log(mydata)
}
gethomelis()
  },[])
  return (
    <>
      <div className='px-16'>
        {/* {homelis?.map((sohelxogta,index)=>{
          return<div className=''index>
<img>{sohelxogta.hero_img}</img>
          </div>
        })} */}
      
       {/* <div className='shadow-sm rounded-lg'>
     <img src='https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'></img>
       </div> */}
       <div className=' text-lg grid grid-cols-1 md:grid-cols-2 '>
      <div className='px-20 py-4 mt-4'>
      <div className='flex gap-6  shadow-lg bg-white h-[210px] w-[220px] '>
          <div>
            <div className='px-10 '>
              <span className='font-medium  px-8'>title</span>
            </div>
           <div className='px-10'> {her_title}</div>
           <div className='px-10'>
              <span className='font-medium  px-8'>email</span>
            </div>
           <div className='px-6'> {email}</div>
          </div>
          </div>
      </div>
          <div className='shadow bg-white border rounded p-4 h-[360px] w-[400px] px-4'>
<img className='rounded-lg h-[240px] w-[400px] shadow-sm' src='https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'></img>
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
  <span className='text-gray-500'>bedrom2</span>
  </div>
  <div className='flex gap-2'><FaHireAHelper className='mt-1 text-blue-800'/>
  <span className='text-gray-500'>3bedrom</span>
  </div>
</div>
        </div>
       
       {/* {her_title?.map((mydata,index)=>{
            return(
<div key={index}>
        
          <div>{mydata.hero_img}</div>
        
          <div>{mydata.address}</div>
        </div>
            )
        })} */}
       </div>
      </div>
    </>
  )
}
