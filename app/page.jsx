import HomeStart from '@components/sections/HomeStart'
import HomePage from '@components/sections/HomePage'
import Navbar from '@components/sections/Navbar'
import About from '@components/sections/About'
import Projects from '@components/sections/Projects'
import Contact from '@components/sections/Contact'
import Blur from '@components/utilities/Blur'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <Blur />
      <Navbar />
      <HomeStart />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
