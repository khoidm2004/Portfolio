import './App.css'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Home from './Component/Home/Home'
import NavBar from './Component/NavBar/NavBar'
import Projects from './Component/Projects/Projects'
import Resume from './Component/Resume/Resume'

function App() {

  return (
    <>
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
    </div>
    </>
  )
}

export default App
