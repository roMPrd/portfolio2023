import HomeStart from './sections/HomeStart'
import HomePage from './sections/HomePage'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Blur from '@components/utilities/Blur'

const Home = () => {
  return (
    <div className="pb-[25dvh] flex flex-col items-center justify-center bg-black">
      <Navbar />
      <Blur />
      <HomeStart />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
