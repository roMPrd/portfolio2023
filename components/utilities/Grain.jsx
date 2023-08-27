
const Grain = (
  props
  // baseFrequency = "9",
  // numOctaves = 5,
  // w = "100%",
  // h = "100%",
) => {

  const viewBox = "0 0 300 300";

  return (

    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.w}
      height={props.h}
      viewBox={viewBox}
      preserveAspectRatio="none"
    >
      <filter id='grain'>
        <feTurbulence
          type='fractalNoise'
          baseFrequency={props.baseFrequency}
          numOctaves={props.numOctaves}
        />
      </filter>
      <rect width="100%" height="100%" filter='url(#grain)' />
    </svg>
  );
  };

export default Grain;
