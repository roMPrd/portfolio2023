import HomeStart from '@components/HomeStart'
import HomePage from '@components/HomePage'
import Navbar from '@components/Navbar'
import About from '@components/About'
import Projects from '@components/Projects'
import Contact from '@components/Contact'

const Home = () => {
  return (
    <div className="bg-black">
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
