
import './App.css'

import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Experience from './Pages/Experience'
import Info from './Pages/Info'
import Skills from './Pages/Skills'
import FloatingResumeDownload from './Componenets/FloatingResumeDownload'
import Loader from './Componenets/Loader'
import Project from './Pages/Project'
import Resume from './Pages/Resume'
import PortfolioChatbot from './Componenets/PortfolioChatbot'
import DocumentGallery from './Componenets/DocumentGallery'

function App() {

  return (
    <>
      <Loader />
      <Header />
      <FloatingResumeDownload />
      <Info />
      <Skills />
      <Experience />
      <Project/>
      <DocumentGallery/>
      <Resume/>
      <Footer />
      <PortfolioChatbot/>
    </>
  )
}

export default App
