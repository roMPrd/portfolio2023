
const HomePage = () => {
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center relative">
      <video
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        className="bg-cover object-cover absolute top-0 left-0 w-full h-full z-0"
        src="assets/videos/network_1080p.mp4">
      </video>
      <img src="assets/images/Logo_RP_transparent.png" alt="logo" className="h-20 z-10" />
    </div>
  )
}

export default HomePage
