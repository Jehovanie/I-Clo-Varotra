import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './@shared/components/Navbar'

function App() {


  return (

    <div>
      <Outlet />
    </div>
  )
}

export default App
