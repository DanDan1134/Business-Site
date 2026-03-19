import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Audience from './components/Audience'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Divider from './components/Divider'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <Audience />
      <Divider />
      <Portfolio />
      <Divider />
      <Services />
      <Divider />
      <TechStack />
      <Divider />
      <Contact />
      <Footer />
    </>
  )
}

export default App
