import "../src/styles/App.css";

import AboutMe from "./components/pages/aboutMe";
import WorkExperience from "./components/pages/experience/WorkExperience";
import Contact from "./components/pages/contact";
import FixedButtons from "./components/fixedButtons";
import { Home } from "./components/pages/home/home";
import { Skills } from "./components/pages/skills/skills";
import waveYellowSvg from "./images/wave-yellow.svg";
import SmoothScrollWrapper from "./components/utils/SmoothScrollWrapper";
import { Navbar } from "./components/pages/home/Navbar";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
    const waveTopRef = useRef();
    const waveBottomRef = useRef();
  
    useEffect(() => {
      gsap.fromTo(
        waveTopRef.current,
        { y: 30 },
        {
          y: 0,
          duration: 1,
        }
      );
      gsap.fromTo(
        waveBottomRef.current,
        { y: -40 },
        {
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: waveBottomRef.current,
            start: "top 50%",
            end: "bottom top",
          },
        }
      );
    }, []);

  return (
    <>
      <Navbar />
      <FixedButtons />
      <SmoothScrollWrapper>
        <div className="App relative overflow-hidden">
          <Home />
          <img src={waveYellowSvg} ref={waveTopRef} alt="wave" className="wave-section" />

          <WorkExperience />
          <img src={waveYellowSvg} alt="wave" className="rotate-180 wave-section" />

          <AboutMe />
          <img src={waveYellowSvg} alt="wave" className="wave-section" />

          <Skills />
          <img ref={waveBottomRef} src={waveYellowSvg} alt="wave" className="rotate-180 drop-shadow wave-section" />

          <Contact />
        </div>
      </SmoothScrollWrapper>
    </>
  );
}

export default App;
