
const HomePage = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center relative">
      <div className="absolute inset-0">
        <video
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          className="object-cover h-full w-full"
          src="assets/videos/network_1080p.mp4">
        </video>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent z-5"/>
      </div>
      <img src="assets/images/Logo_RP_transparent.png" alt="logo" className="h-20 z-10 absolute" />
    </div>
  )
}

export default HomePage