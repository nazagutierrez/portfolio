import "../src/styles/App.scss";

import AboutMe from "./components/pages/aboutMe";
import Cards, { Title } from "./components/pages/projects/cards";
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
      <div className="contain">
        <section id="Home">
          <div className="d-flex justify-content-between flex-column">
            <Nav />
            <Box page={<Me />} />
            <Description />
          </div>
        </section>
        <img src={waveYellowSvg} alt="wave" style={{width: "100%", marginBlock: "-1px"}} />
        <section id="Projects">
          <Box page={<Title />} initialX={-100} finalX={0} />
          <Box page={<Cards />} initialX={-100} finalX={0} delay={0.3}/>
          <img src={waveBlackSvg} alt="wave" style={{width: "100%", marginBlock: "-1px"}} />
        </section>
        <section id="About">
          <Box page={<AboutMe />} initialX={-100} finalX={0} />
        </section>
        <img src={waveYellowSvg} alt="wave" style={{width: "100%", marginBlock: "-1px"}} />
        <section id="Skills">
          <Box page={ <SkillsTitle /> } initialX={-100} finalX={0} />
          <Box page={<Skills />} initialX={-100} finalX={0} delay={0.3}/>
        </section>
        <img src={waveBlackSvg} alt="wave" style={{width: "100%", marginBlock: "-1px"}} />
        <section id="Contact">
          <div className="w-100">
            <Box page={<Contact />} initialX={-100} finalX={0} />
          </div>
        </section>
        <section id="Footer">
          <Footer />
        </section>
        <div>
          <FixedButtons />
        </div>
      </div>
    </div>
  );
}

export default App;
