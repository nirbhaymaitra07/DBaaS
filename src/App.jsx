import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Structure from './structure/Structure'
import ScheduleCasting from './components/Schedule_Casting/ScheduleCasting'

function App() {

  return (
    <>
    <BrowserRouter>
      <Structure/>
    </BrowserRouter>
    </>
  )
}

export default App
