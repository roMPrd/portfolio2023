
const HomePage = () => {
  return (
    <div id="home" className="h-[100vh] w-[100%] flex justify-center items-center relative">
      <div className="absolute inset-0">
        <video
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          className="object-cover h-full w-full"
          src="network_1080p.mp4">
        </video>
        <div className="z-5 absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent"/>
      </div>
      <img src="Logo_RP_transparent.png" alt="logo" className="z-10 h-20 absolute" />
    </div>
  )
}

export default HomePage
