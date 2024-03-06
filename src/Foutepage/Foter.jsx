import React from 'react'
import { Link } from 'react-scroll'

export default function 
() {
  return (
    <div id='about' className='bg-gray-800'>
               <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">About Us</h3>
            <p className="text-white mb-4">
                Best Overall: Zillow.<br></br>
Most Accurate:
 Realtor.com.<br></br>
Best Mobile App:
 Trulia.<br></br>
Best for Foreclosures: Foreclosure.com.</p>
          
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Services</h3>
            <ul className="text-white">
              <li className="mb-2">Residential Real Estate</li>
              <li className="mb-2">Commercial Real Estate</li>
              <li className="mb-2">Property Management</li>
              <li className="mb-2">Real Estate Investing</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Social links</h3>
            <ul className="text-white">
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Instagram</li>
              <li className="mb-2">LinkedIn</li>
            
            </ul>
          </div>
          </div>
        {/* <div className="mt-8 flex justify-center">
          <p className="text-base text-white">&copy; {new Date().getFullYear()} Real Estate Company. All rights reserved.</p>
        </div> */}
      </div>
    </div>
  )
}
