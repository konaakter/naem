import About from "./Componant/About/About"
import Contact from "./Componant/Contact/Contact"
import Hader from "./Componant/Hader/Hader"
import Project from "./Componant/Project/Project"
import Skill from "./Componant/Skill/Skill"
import './App.css'
import { ToastContainer } from 'react-toastify';
import Footer from "./Componant/Footer/Footer"
import Navber from "./Componant/Navber/Navber"

function App() {
  return (
    <>
      <div className=" font-extralight ">
        <Navber></Navber>
        <div className=" container  mx-auto md:px-20 lg:px-32 p-8">
        <Hader></Hader>
        <About></About>
        <Skill></Skill>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
        <ToastContainer />
        </div>
        
      </div>
    </>
  )
}

export default App
