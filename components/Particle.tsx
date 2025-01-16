// import React from "react";
// import { useEffect, useMemo, useState } from "react";
// import { loadSlim } from "@tsparticles/slim";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import {
//   type Container,
//   type ISourceOptions,
//   MoveDirection,
//   OutMode,
// } from "@tsparticles/engine";

// const particle = () => {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = async (container?: Container): Promise<void> => {
//     console.log(container);
//   };

//   const options: ISourceOptions = useMemo(
//     () => ({
//       background: {
//         color: {
//           value: "",
//         },
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: true,
//             mode: "push",
//           },
//           onHover: {
//             enable: true,
//             mode: "repulse",
//           },
//         },
//         modes: {
//           push: {
//             quantity: 4,
//           },
//           repulse: {
//             distance: 200,
//             duration: 0.4,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "#ffffff",
//         },
//         links: {
//           color: "#ffffff",
//           distance: 150,
//           enable: true,
//           opacity: 0.5,
//           width: 1,
//         },
//         move: {
//           direction: MoveDirection.none,
//           enable: true,
//           outModes: {
//             default: OutMode.out,
//           },
//           random: false,
//           speed: 6,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//           },
//           value: 80,
//         },
//         opacity: {
//           value: 0.5,
//         },
//         shape: {
//           type: "circle",
//         },
//         size: {
//           value: { min: 1, max: 5 },
//         },
//       },
//       detectRetina: true,
//     }),
//     []
//   );

//   if (init) {
//     return (
//       <Particles
//         id="tsparticles"
//         particlesLoaded={particlesLoaded}
//         options={options}
//       />
//     );
//   }

//   return <></>;
// };

// export default particle;


import React from "react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  // const options: ISourceOptions = useMemo(
  //   () => ({
  //     background: {
  //       color: {
  //         value: "#000000", // Black background for a "starry night" effect
  //       },
  //     },
  //     fpsLimit: 120,
  //     interactivity: {
  //       events: {
  //         onClick: {
  //           enable: true,
  //           mode: "push",
  //         },
  //         onHover: {
  //           enable: true,
  //           mode: "repulse",
  //         },
  //       },
  //       modes: {
  //         push: {
  //           quantity: 4,
  //         },
  //         repulse: {
  //           distance: 100,
  //           duration: 0.5,
  //         },
  //       },
  //     },
  //     particles: {
  //       color: {
  //         value: "#FFD700", // Gold color for stars
  //       },
  //       links: {
  //         enable: false, // No links between particles for a cleaner look
  //       },
  //       move: {
  //         direction: MoveDirection.none,
  //         enable: true,
  //         outModes: {
  //           default: OutMode.bounce,
  //         },
  //         random: true,
  //         speed: 0.5, // Slow movement for a calm twinkle effect
  //         straight: false,
  //       },
  //       number: {
  //         density: {
  //           enable: true,
  //           area: 800, // Adjust density area
  //         },
  //         value: 100, // Number of particles (stars)
  //       },
  //       opacity: {
  //         value: { min: 0.3, max: 1 }, // Twinkle effect with varying opacity
  //         random: true,
  //         animation: {
  //           enable: true,
  //           speed: 1,
  //           minimumValue: 0.3,
  //           sync: false,
  //         },
  //       },
  //       shape: {
  //         type: "star", // Star-shaped particles
  //       },
  //       size: {
  //         value: { min: 1, max: 4 }, // Varying sizes for the stars
  //         random: true,
  //       },
  //     },
  //     detectRetina: true,
  //   }),
  //   []
  // );


  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "" } }, // Dark portfolio background
      particles: {
        color: { value: "#E31B6D" }, // Vibrant pink for connection lines
        links: {
          enable: true,
          color: "#E31B6D",
          distance: 150,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
        },
        number: {
          value: 70,
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: 3,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: {
            distance: 200,
            links: { opacity: 1 },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );
  
  
  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default Particle;
