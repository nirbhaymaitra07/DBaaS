import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Structure from './structure/Structure'
import ScheduleCasting from './components/Schedule_Casting/ScheduleCasting'
import Custom from './components/Schedule_Casting/Custom'
import Newlayout from './components/Layouts/NewLayout/Newlayout'
import NewAppConfig from './pages/Cast/New_App_Config/NewAppConfig'
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
