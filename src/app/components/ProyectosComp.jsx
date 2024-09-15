"use client";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import { useState } from "react";
import "./ProyectosComp.css";
import { AnimatePresence, motion } from "framer-motion";
import { Zoom } from "react-awesome-reveal";
import {
	hover,
	zoomIn,
	fadeIn,
	container2,
	fallingDownRotateX,
	zoomInRotate,
	fadeInShadowBg,
	fadeInOutEthereal,
	slideFromDownRotateY,
} from "../styles/variants";
import Image from "next/image";
import SelectedProjectLeonor from "./SelectedProjectLeonor";
import SelectedProjectOrlando from "./SelectedProjectOrlando";
import SelectedProjectGrupo7 from "./SelectedProjectGrupo7";
import TypedWithBack from "../helpers/TypedWithBack";

export default function ProyectosComp() {
	const [selectedProject, setSelectedProject] = useState(null);
	const [openMistery, setOpenMistery] = useState(false);
	const router = useRouter();

	const toggleSelectedProject = (projectName) => {
		setTimeout(() => {
			setSelectedProject(projectName);
		}, 200);
	};

	const renderProject = (selectedProject) => {
		switch (selectedProject) {
			case "leonor":
				return (
					<SelectedProjectLeonor
						toggleSelectedProject={toggleSelectedProject}
					/>
				);
			case "orlando":
				return (
					<SelectedProjectOrlando
						toggleSelectedProject={toggleSelectedProject}
					/>
				);
			case "grupo7":
				return (
					<SelectedProjectGrupo7
						toggleSelectedProject={toggleSelectedProject}
					/>
				);
			default:
				return null;
		}
	};

	const conditionedStrings = () => {
		return selectedProject === "leonor"
			? leonorStrings
			: selectedProject === "orlando"
			? orlandoStrings
			: selectedProject === "grupo7"
			? grupo7Strings
			: projectsStrings;
	};

	const toggleMistery = () => {
		setOpenMistery(!openMistery);
	}

	const goToPortafolio = () => {
		setOpenMistery(false);
		setTimeout(() => {
			router.push("/sobre-este-portafolio");
		}, 1000);
	}

	return (
		<main className="main-container-projects">
			<Zoom duration={2000}>
				<div className="h1-intro">
					<h1>Mis Proyectos</h1>
					<p>
						Desde que decidí empezar a desarrollar proyectos como método de
						aprendizaje, de inmediato me puse como meta hacerlo de manera
						Fullstack, porque quería entender el flujo completo de construcción
						de una aplicación web, además de como se comunica frontend y backend
						por medio de solicitudes http.
					</p>
					<p>
						Esto no quiere decir que esté centrado en colaborar solo como
						desarrollador FullStack en mis futuros empleos, es más, prefiero que
						mis funciones de rutina sean un poco más acotadas para lograr
						especializarme y volverme el mejor en un área específica.
					</p>
				</div>
			</Zoom>

			<motion.section
				className="space-section"
				variants={zoomIn}
				initial="hidden"
				whileInView="show"
				layout
			>
				<video
					loop
					muted
					playsInline
					autoPlay
					src="https://res.cloudinary.com/dkkvoyfqz/video/upload/v1721843215/meteors-video_oaxgqf.mp4"
				/>
				<motion.h1 variants={fallingDownRotateX} className="h1-glass">
					PROYECTOS
				</motion.h1>
				<motion.p className="typed-phrases" variants={fallingDownRotateX}>
					<TypedWithBack strings={conditionedStrings()} />
				</motion.p>
				<AnimatePresence mode="wait">
					{selectedProject === null ? (
						<motion.div
							key="projects-container"
							className="projects-container"
							variants={fadeInOutEthereal}
							transition={fadeInOutEthereal.transition}
							initial="hidden"
							whileInView="show"
							exit="exit"
							layout
						>
							<motion.div
								className="project"
								variants={zoomInRotate}
								whileHover={hover}
								onClick={() => toggleSelectedProject("leonor")}
							>
								<motion.h2 className="project-title" variants={fadeIn}>
									LEONOR BERDICHEVSKY
								</motion.h2>
								<Image
									src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1723649537/logo-leonor-redondo-fondo-negro_hamqbz.png"
									alt="Logo de Leonor Berdichevsky Homeopathy"
									width={500}
									height={500}
								/>
								<motion.h3 className="project-title" variants={fadeIn}>
									Terapeuta Homeopática
								</motion.h3>
							</motion.div>

							<motion.div
								className="project"
								variants={zoomInRotate}
								whileHover={hover}
								onClick={() => toggleSelectedProject("orlando")}
							>
								<motion.h2 className="project-title" variants={fadeIn}>
									ORLANDO ROJAS
								</motion.h2>
								<Image
									src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1723644760/logo-orlando-png_tkpel3.png"
									alt="Logo de Orlando Rojas abogado"
									width={500}
									height={500}
								/>
								<motion.h3 className="project-title" variants={fadeIn}>
									Abogado de Familia
								</motion.h3>
							</motion.div>

							<motion.div
								className="project"
								variants={zoomInRotate}
								whileHover={hover}
								onClick={() => toggleSelectedProject("grupo7")}
							>
								<motion.h2 className="project-title" variants={fadeIn}>
									GRUPO 7
								</motion.h2>
								<Image
									src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1723645273/logo-grupo7-png_bvegwo.png"
									alt="Logo de Orlando Rojas abogado"
									width={500}
									height={500}
								/>
								<motion.h3 className="project-title" variants={fadeIn}>
									Tienda Electrónica
								</motion.h3>
							</motion.div>
						</motion.div>
					) : (
						<div>{renderProject(selectedProject)}</div>
					)}

				</AnimatePresence>{" "}
				<motion.div layout variants={container2} className="saber-mas-container">
					<motion.h1 layout whileHover={hover} className="mistery" variants={slideFromDownRotateY} onClick={toggleMistery}>?</motion.h1>
					<AnimatePresence mode="wait">
						{openMistery && (
							<motion.div layout variants={container2} initial="hidden" animate="show" exit="exit" className="mistery-content">
								<motion.h1 layout variants={slideFromDownRotateY} className="mistery-text">¿Quieres saber más sobre este portafolio?</motion.h1>
								<motion.h1 layout variants={slideFromDownRotateY} className="mistery" whileHover={hover} onClick={goToPortafolio}>sí</motion.h1>
								<motion.h1 layout variants={slideFromDownRotateY} className="mistery" whileHover={hover} onClick={toggleMistery}>no</motion.h1>
							</motion.div>

						)}
					</AnimatePresence>
				</motion.div>

			</motion.section>
			<Navbar />
		</main>
	);
}

const projectsStrings = [
	"Tres proyectos... ",
	"Tres personas diferentes... ",
	"Con necesidades diferentes... ",
	"Pincha un proyecto y veamos de qué se trata 😉",
];

const leonorStrings = [
	"Leonor Berdichevsky terapias homeopáticas online",
	"Frontend creado con NextJS y CSS Vanilla",
	"Backend creado con Strapi y PostgreSQL",
	"Diseño minimalista y colores suaves",
	"Mileisearch para búsqueda de entradas de blog",
	"Formulario de contacto con envío de email con NodeMailer",
	"Agenda médica con Google Calendar",
	"Optimizado para SEO",
	"Responsive design",
	"Y mucho más...",
];

const orlandoStrings = [
	"Orlando Rojas abogado de familia",
	"Frontend creado con NextJS y CSS Vanilla",
	"Animado con React Awesome Reveal",
	"Backend creado con Strapi y PostgreSQL",
	"Diseño minimalista y colores suaves",
	"Formulario de contacto con envío de email con NodeMailer",
	"Optimizado para SEO",
	"Responsive design",
	"Y mucho más...",
];

const grupo7Strings = [
	"Grupo 7 ya tiene su tienda electrónica",
	"Frontend creado con NextJS y CSS Vanilla",
	"Backend creado con NextJS y PostgreSQL",
	"Animaciones con React Awesome Reveal",
	"Colores claros y encendidos",
	"Formulario de contacto con envío de email con NodeMailer",
	"Optimizado para SEO",
	"Responsive design",
	"Y mucho más...",
];

const portafolioStrings = [
	"Te gustaría saber más sobre mi portafolio?",
	"Como lo ves, es un proyecto en sí mismo",
	"Pincha Saber Más y te cuento todo!",
];
