import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Structure from './structure/Structure'
import ScheduleCasting from './components/Schedule_Casting/ScheduleCasting'

function App() {

  return (
    <>

    {/* Browser Routers */}
    <BrowserRouter>
      <Structure/>
    </BrowserRouter>
    {/* Browser Routers */}

    {/* <BrowserRouter>
      <Structure/>
    </BrowserRouter> */}
    <ScheduleCasting />

    </>
  )
}

export default App
