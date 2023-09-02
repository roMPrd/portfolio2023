import AnimatedLogo from "@components/animations/animatedLogo"

const HomePage = () => {
  return (
    <div id="home" className="sectionScroll h-[100vh] w-[100%] flex justify-center items-center relative pointer-events-none">
      <div className="absolute inset-0">
        <video
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          className="object-cover h-full w-full"
          src="network_1080p.mp4"
          preload="auto">
        </video>
        <div className="z-5 absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent"/>
      </div>
      <AnimatedLogo
        className={"z-10 h-20 absolute"}
        src={"Logo_RP_transparent.png"}
        alt={"logo"}
      />
      {/* <AnimatedLogo
        className={"z-10 h-20 absolute"}
        children={
          <img src="Logo_RP_transparent.png" alt="logo" className="z-10 h-20 absolute" />
        }
      /> */}
      </div>
  )
}

export default HomePage
