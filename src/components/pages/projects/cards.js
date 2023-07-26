import React from 'react'
import { useTranslation } from "react-i18next";

import Card from './card'
import image from "../../../images/imgExports";

let cards = [{
    id: 1,
    title: "Freelance work",
    description: "Maded with React, TailwindCSS, MUI, Framer Motion",
    url2: "https://cooktacookies.web.app/",
    url: "https://github.com/nazagutierrez/",
    image: image.cookta
},
{
    id: 2,
    title: "Freelance work",
    description: "Maded with React, Nextjs, Firebase and TailwindCSS",
    url2: "https://menshouse-barber.web.app/",
    url: "https://github.com/nazagutierrez/",
    image: image.mensHousePicture
},
{
    id: 3,
    title: "Coinbase's clon",
    description: "Static HTML styled by Sass",
    url2: "https://nazagutierrez.github.io/coinbase-clone/",
    url: "https://github.com/nazagutierrez/coinbase-clone",
    image: image.coinbase
}]

function Cards() {
  return (
    <div className="d-flex flex-column flex-xl-row justify-content-center">
        {
            cards.map( (card) => (
                <div className="card col-4 bg-dark text-white m-2 mt-4 p-0" key={card.id}>
                    <Card title={card.title} description={card.description} url={card.url} url2={card.url2} image={card.image} />
                </div>
            ))
        }
    </div>
  )
}

export function Title() {
    const [t] = useTranslation("global")
    return(
        <div>
            <h1 className="d-flex fs-2 mt-4 mt-0-md justify-content-center text-center">{t("projects.my-projects")}</h1>
        </div>
    )
}

export default Cards

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { AiOutlineClose } from "react-icons/ai";

// const buttonStyle = {
//   position: "absolute",
//   backgroundColor: "#e0a37f65",
//   top: "39%",
//   zIndex: 50,
//   height: "50px",
//   minWidth: "50px",
//   fontSize: "1.5rem",
//   borderRadius: 10,
//   "&:hover": {
//     backgroundColor: "#e0a37f99",
//   },
// };

// const variants = {
//   initial: (direction) => {
//     return {
//       x: direction > 0 ? 500 : -700,
//       opacity: 0,
//     };
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: "ease-in",
//   },
//   exit: (direction) => {
//     return {
//       x: direction > 0 ? -1000 : 1200,
//       opacity: 0,
//       transition: "ease-in",
//     };
//   },
// };

// const Carousel = ({ imgArray, handleClose }) => {
//   const [imgIndex, setImgIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   function nextStep(images) {
//     setDirection(1);
//     if (imgIndex === images.length - 1) {
//       setImgIndex(0);
//       return;
//     }
//     setImgIndex(imgIndex + 1);
//   }

//   function prevStep(images) {
//     setDirection(-1);
//     if (imgIndex === 0) {
//       setImgIndex(images.length - 1);
//       return;
//     }
//     setImgIndex(imgIndex - 1);
//   }
//   return (
//     <div className="flex items-center justify-center border-b pb-3 border-brown-dark-2">
//       <button
//         onClick={handleClose}
//         className="absolute top-2 right-3 hover:opacity-60 text-brown-dark-2 text-3xl transition-all"
//       >
//         <AiOutlineClose />
//       </button>
//         <button
//           onClick={() => prevStep(imgArray)}
//           color="darkBrown"
//           sx={buttonStyle}
//           className="left-1"
//         >
//           {"<"}
//         </button>
//         <div className="relative h-96 w-96 overflow-hidden">
//           <AnimatePresence initial={false} custom={direction}>
//             <motion.img
//               variants={variants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               src={imgArray[imgIndex]}
//               className="object-contain object-center absolute w-full h-full"
//               key={imgArray[imgIndex]}
//               custom={direction}
//             />
//           </AnimatePresence>
//         </div>
//         <button
//           onClick={() => nextStep(imgArray)}
//           color="darkBrown"
//           sx={buttonStyle}
//           className="right-1"
//         >
//           {">"}
//         </button>
//     </div>
//   );
// };

// export default Carousel;
