import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './header page/Header'
import { Route, Router, Routes } from 'react-router-dom'
import Homelist from './home page/Homelist';
import Homepage from './pages/Homepage'
import Guryaha from './pages/Guryaha'
import Gellary from './pages/Gellary'
import About from './pages/About'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
//import Sliders from './Sliders'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
{/* <Sliders/> */}
<Routes>
  <Route path='*' element={<h6> web notfound</h6>}></Route>
  <Route  path='/' element={<Headers/>}> </Route>
     <Route path='home' element={<Homepage/>}></Route>
     <Route path='guryaha' element={<Guryaha/>}></Route>
  <Route path='gellary' element={<Gellary/>}></Route>
  <Route path='about' element={<About/>}></Route>
  <Route path='service' element={<Services/>}></Route>
  <Route path='contact' element={<Contacts/>}></Route>
 
 
</Routes>


  </div>
    </>
  )
}

export default App
