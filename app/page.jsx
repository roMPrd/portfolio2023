import HomeStart from './sections/HomeStart'
import HomePage from './sections/HomePage'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Blur from '@components/utilities/Blur'
import PreLoader from './sections/PreLoader'
import TechsUsed from './sections/TechsUsed'

const Home = () => {
  return (
    <>
      <PreLoader />
      {/* <HomeStart /> */}
      <Blur />
      <Navbar />
      <div className="containerScroll bg-black">
        <HomePage />
        <About />
        <Projects />
        <TechsUsed />
        <Contact />
      </div>
    </>
  )
}

export default Home
