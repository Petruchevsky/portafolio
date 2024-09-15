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

function SelectedProjectGrupo7({ toggleSelectedProject }) {

	const MotionLink = motion(Link);

   return (
      <div>
         <motion.main
            key="grupo7"
            className="main-selected-project"
            variants={slideUpRotateY}
            initial="hidden"
            whileInView="show"
            viewport={1}
            exit="exit"
         >
            <motion.div
               className="selected-project-title-container"
               variants={slideFromLeft}
            >
               <motion.h3 variants={fadeIn}>Grupo 7</motion.h3>
               <motion.h4 variants={fadeIn}>Tienda de Productos de Limpieza</motion.h4>
            </motion.div>
            <motion.p
               variants={slideFromLeft}
               className="selected-project-description"
            >
               Grupo 7 es una tienda electrónica de productos de limpieza. La página web fue diseñada con un estilo minimalista, colores suaves y carente de animaciones para transmitir tranquilidad y confianza. La página web incluye información sobre la empresa, sus productos, un formulario de contacto, agenda de eventos y más.
               con una paleta de colores claros y azulados, mezclado con un diseño moderno.
               La autoadministración de este sitio permite cambiar textos, imagenes de cada ruta creada.
               Y el CSS fue hecho a la medida de las necesidades del cliente.
            </motion.p>

            <motion.div variants={zoomIn} className="selected-project-items">
               <motion.div
                  className="selected-project-item-div"
                  variants={slideFromLeft}
                  onClick={() => toggleSelectedProject(null)}
                  whileHover={hover}>
                  <motion.div variants={fadeInRotate}>
                     <IoArrowBackCircle className="animated-icon" />
                  </motion.div>
                  <motion.p variants={zoomIn}>Volver</motion.p>
               </motion.div>

               <MotionLink href="https://github.com/Petruchevsky/grupo7-frontend" target="_blank"
                  className="selected-project-item-div"
                  variants={slideFromLeft}
                  whileHover={hover}>
                  <motion.div variants={fadeInRotate}>
                     <GrGithub className="animated-icon" />
                  </motion.div>
                  <motion.p variants={zoomIn}>Github</motion.p>
               </MotionLink>

               <MotionLink href="/readme-proyecto-grupo7"
                  className="selected-project-item-div"
                  variants={slideFromLeft}
                  whileHover={hover}>
                  <motion.div variants={fadeInRotate}>
                     <BsFiletypeMd className="animated-icon" />
                  </motion.div>
                  <motion.p variants={zoomIn}>ReadMe</motion.p>
               </MotionLink>

               <MotionLink href="https://www.ecommerce.moises-web.cl/" target="_blank"
                  className="selected-project-item-div"
                  variants={slideFromLeft}
                  whileHover={hover}>
                  <motion.div variants={fadeInRotate}>
                     <TbWorldWww className="animated-icon" />
                  </motion.div>
                  <motion.p variants={zoomIn}>Website</motion.p>
               </MotionLink>
            </motion.div>
         </motion.main>
      </div>
   );
}

export default SelectedProjectGrupo7;
