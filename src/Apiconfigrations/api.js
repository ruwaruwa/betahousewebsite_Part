import React from 'react'
import axios from 'axios'
export  const webapi= axios.create({
   // baseURL:import.meta.env.VITE_APP_API_URL,
    baseURL:'https://betahouseapi.vercel.app'
})