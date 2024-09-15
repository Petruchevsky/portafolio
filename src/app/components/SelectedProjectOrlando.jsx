import "./SelectedProject.css";
import { GrGithub } from "react-icons/gr";
import { IoArrowBackCircle } from "react-icons/io5";
import { BsFiletypeMd } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import {
	slideFromLeft,
	zoomIn,
	fadeInRotate,
	slideUpRotateY,
	hover,
	fadeIn    
} from "../styles/variants";
import Link from "next/link";

function SelectedProjectOrlando({ toggleSelectedProject }) {

	const MotionLink = motion(Link);

   return (
      <div>
         <motion.main
            key="orlando"
            className="main-selected-project"
            variants={slideUpRotateY}
            initial="hidden"
            whileInView="show"
            viewport={1}
            exit="exit"
            layout
         >
            <motion.div
               className="selected-project-title-container"
               variants={slideFromLeft}
            >
               <motion.h3 variants={fadeIn}>Orlando Rojas</motion.h3>
               <motion.h4 variants={fadeIn}>Abogado de Familia, Civil y Sucesorio</motion.h4>
            </motion.div>
            <motion.p
               variants={slideFromLeft}
               className="selected-project-description"
            >
               Orlando Rojas es un abogado especializado en derecho de familia, civil y sucesorio. Su sitio web presenta un diseño con colores oscuros que transmiten seriedad y compromiso. El sitio es completamente autoadministrable, lo que permite a los usuarios actualizar y gestionar su contenido de manera fácil y rápida.
            </motion.p>

            <motion.div variants={zoomIn} className="selected-project-items">
               <motion.div
                  className="selected-project-item-div"
                  variants={slideFromLeft}
                  onClick={() => toggleSelectedProject(null)}
                  whileHover={hover}>
                  <motion.div variants={fadeInRotate}>
                     <IoArrowBackCircle className="selected-project-icon" />
                  </motion.div>
                  <motion.p variants={zoomIn}>Volver</motion.p>
               </motion.div>

               <MotionLink href="https://github.com/Petruchevsky/abogado" target="_blank"
                  className="selected-project-item-div"
                  variants={slideFromLeft}
                  whileHover={hover}>
                  <motion.div variants={fadeInRotate}>
                     <GrGithub className="selected-project-icon" />
                  </motion.div>
                  <motion.p variants={zoomIn}>Github</motion.p>
               </MotionLink>

               <MotionLink href="/readme-proyecto-orlando"
                  className="selected-project-item-div"
                  variants={slideFromLeft}
                  whileHover={hover}>
                  <motion.div variants={fadeInRotate}>
                     <BsFiletypeMd className="selected-project-icon" />
                  </motion.div>
                  <motion.p variants={zoomIn}>ReadMe</motion.p>
               </MotionLink>

               <MotionLink href="https://www.orlandorojas.cl/" target="_blank"
                  className="selected-project-item-div"
                  variants={slideFromLeft}
                  whileHover={hover}>
                  <motion.div variants={fadeInRotate}>
                     <TbWorldWww className="selected-project-icon" />
                  </motion.div>
                  <motion.p variants={zoomIn}>Website</motion.p>
               </MotionLink>
            </motion.div>
         </motion.main>
      </div>
   );
}

export default SelectedProjectOrlando;
