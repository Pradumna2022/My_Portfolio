
import './App.css'

import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Experience from './Pages/Experience'
import Info from './Pages/Info'
import Skills from './Pages/Skills'
import FloatingResumeDownload from './Componenets/FloatingResumeDownload'
import Loader from './Componenets/Loader'
import Project from './Pages/Project'

function App() {

  return (
    <>
      <Loader />
      <Header />
      {/* <FloatingResumeDownload /> */}
      <Info />
      <Skills />
      <Experience />
      <Project/>
      <Footer />
    </>
  )
}

export default App
