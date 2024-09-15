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

function SelectedProjectLeonor({ toggleSelectedProject }) {

	const MotionLink = motion(Link);

	return (
		<div>
			<motion.main
				key="leonor"
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
					<motion.h3 variants={fadeIn}>Leonor Berdichevsky</motion.h3>
					<motion.h4 variants={fadeIn}>Terapeuta Homeopático Online</motion.h4>
				</motion.div>
				<motion.p
					variants={slideFromLeft}
					className="selected-project-description"
				>
					Leonor Berdichevsky es una terapeuta homeopática que ofrece sus
					servicios online. La página web fue diseñada con un estilo
					minimalista, colores suaves y carente de animaciones para transmitir
					tranquilidad y confianza. La página web incluye información sobre la
					terapeuta, sus servicios, un formulario de contacto, agenda médica y
					más.
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

					<MotionLink href="https://github.com/Petruchevsky/leonor-frontend-cl" target="_blank"
						className="selected-project-item-div"
						variants={slideFromLeft}
						whileHover={hover}>
						<motion.div variants={fadeInRotate}>
							<GrGithub className="selected-project-icon" />
						</motion.div>
						<motion.p variants={zoomIn}>Github</motion.p>
					</MotionLink>

					<MotionLink href="/readme-proyecto-leonor"
						className="selected-project-item-div"
						variants={slideFromLeft}
						whileHover={hover}>
						<motion.div variants={fadeInRotate}>
							<BsFiletypeMd className="selected-project-icon" />
						</motion.div>
						<motion.p variants={zoomIn}>ReadMe</motion.p>
					</MotionLink>

					<MotionLink href="https://www.leonorb-homeopata.com/" target="_blank"
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

export default SelectedProjectLeonor;
