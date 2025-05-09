import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ScrollLink from "../../utils/ScrollLink";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const Navbar = () => {
  const [t] = useTranslation("global");
  return (
    <div className="relative w-auto h-full">
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="fixed top-0 left-0 right-0 hidden sm:block backdrop-blur bg-black/10 h-12 z-10"
      >
        <div className="flex justify-center w-full h-full">
          <ul className="flex navbar-nav items-center space-x-6 text-white-main text-sm">
            <li className="nav-item">
              <ScrollLink to="#Home" className="nav-link">
                {t("home.nav-link-1")}
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="#Experience" className="nav-link">
                {t("home.nav-link-2")}
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink center={true} to="#About" className="nav-link">
                {t("home.nav-link-3")}
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink center={true} to="#Skills" className="nav-link">
                {t("home.nav-link-4")}
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink to="#Contact" className="nav-link">
                {t("home.nav-link-5")}
              </ScrollLink>
            </li>
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};