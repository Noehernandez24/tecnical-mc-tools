import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import TravelPortals from './components/TravelPortals'
import ItemsToStacks from './components/ItemsToStacks'


function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/travel-portals' element={<TravelPortals/>}/>
        <Route path='/items-calculator' element={<ItemsToStacks/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
