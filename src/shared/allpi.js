import React from 'react'
import { webapi } from '../Apiconfigrations/api'

export const  getallpi= async(enpoint,data)=> {
return await webapi.get(enpoint,data)
}
