import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Structure from './structure/Structure'
import ScheduleCasting from './components/Schedule_Casting/ScheduleCasting'
import Custom from './components/Schedule_Casting/Custom'
function App() {

  return (
    <>
    {/* <BrowserRouter>
      <Structure/>
    </BrowserRouter> */}
   
    <ScheduleCasting />
    <Custom/>
    </>
    
  )
}

export default App
