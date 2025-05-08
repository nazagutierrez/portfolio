import "../src/styles/App.css";

import AboutMe from "./components/pages/aboutMe";
import Cards, { Title } from "./components/pages/experience/cards";
import { motion, useAnimation } from "framer-motion";
import Contact from "./components/pages/contact";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import FixedButtons from "./components/fixedButtons";
import Nav, { Description, Me } from "./components/pages/home";
import Footer from "./components/pages/footer";
import Skills, { SkillsTitle } from "./components/pages/skills/skills";
import waveYellowSvg from "./images/wave-yellow.svg";
import waveBlackSvg from "./images/wave-black.svg";

function Box({ page, delay, finalX, initialX }) {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: finalX,
        transition: { duration: 0.8, delay: delay },
      });
    }
  }, [animation, inView, delay, finalX]);

  return (
    <motion.div
      ref={ref}
      animate={animation}
      initial={{ opacity: 0, x: initialX }}
    >
      {page}
    </motion.div>
  );
}

function App() {
  return (
    <div className="App">
      <section id="Home">
        <Nav />
        <Box page={<Me />} />
        <Description />
      </section>

      <img src={waveYellowSvg} alt="wave" className="w-[100dvw] -my-px" />

      <section id="Projects">
        <Box page={<Title />} initialX={-100} finalX={0} />
        <Box page={<Cards />} initialX={-100} finalX={0} delay={0.3} />

        <img src={waveBlackSvg} alt="wave" className="w-[100dvw] -my-px" />
      </section>

      <section id="About">
        <Box page={<AboutMe />} initialX={-100} finalX={0} />
      </section>

      <img src={waveYellowSvg} alt="wave" className="w-[100dvw] -my-px" />

      <section id="Skills">
        <Box page={<SkillsTitle />} initialX={-100} finalX={0} />
        <Box page={<Skills />} initialX={-100} finalX={0} delay={0.3} />
      </section>

      <img src={waveBlackSvg} alt="wave" className="w-[100dvw] -my-px" />

      <section className="relative z-0" id="Contact">
        <Box page={<Contact />} initialX={-100} finalX={0} />
        <Footer />
      </section>

      <FixedButtons />
    </div>
  );
}

export default App;
