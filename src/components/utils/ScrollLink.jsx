import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollLink = ({ to, children, center = false, ...props }) => {
  return (
    <a
      {...props}
      href={to}
      onClick={(e) => {
        e.preventDefault();
        const target = document.querySelector(to);
        if (target) {
          const offset = target.offsetTop - window.innerHeight / 2 + target.offsetHeight / 2;

          gsap.to(window, {
            scrollTo: center ? offset : to,
            duration: .4,
            ease: "power2.out",
          });
        }
      }}
    >
      {children}
    </a>
  );
};

export default ScrollLink;
