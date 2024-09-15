"use client";
import { useRouter } from "next/navigation";
import styles from "./ReadMeLeonor.module.css";
import { motion } from "framer-motion";
import {
	zoomIn,
	fadeInRotate,
	fadeIn,
	container2,
	hoverLink,
	slideFromDownRotateY,
	fallingDownRotateX,
} from "../styles/variants";
import { IoArrowBackCircle } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

function ReadMeLeonor() {
	const router = useRouter();
	const MotionImage = motion(Image);
	const MotionLink = motion(Link);

	return (
		<motion.main
			key="main"
			variants={fadeIn}
			className={styles["main-container-readme"]}
			initial="hidden"
			whileInView="show"
			viewport={{ amount: 0.1, threshold: 0.1, once: true }}
		>
			<video
				loop
				muted
				autoPlay
				src="https://res.cloudinary.com/dkkvoyfqz/video/upload/v1724949465/soft-colors-video_ov106z.mp4"
			/>

			<motion.section
				key="section1"
				className={styles["content-readme"]}
				variants={container2}
				initial="hidden"
				whileInView="show"
				viewport={{ amount: 0.3 }}
			>
				<motion.div
					key="div1"
					variants={container2}
					className={styles["div-transparent-readme"]}
				>
					<motion.h1 variants={fallingDownRotateX}>
						Leonor Berdichevsky
					</motion.h1>
					<motion.h3 variants={zoomIn}>
						Terapeuta Homeopático Online
					</motion.h3>
					<MotionImage
						variants={zoomIn}
						width={300}
						height={300}
						alt="logo leonor berdichevsky"
						src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1723649537/logo-leonor-redondo-fondo-negro_hamqbz.png"
					/>
				</motion.div>

				<motion.div
					key="div2"
					variants={slideFromDownRotateY}
					className={styles["div-readme"]}
				>
					<motion.h2 variants={fallingDownRotateX}>
						Descripción General y Objetivos del Proyecto
					</motion.h2>
					<motion.div variants={container2} className={styles["text-flex-div"]}>
						<motion.p variants={zoomIn}>
							La terapeuta homeopática Leonor Berdichevsky expresó claramente el
							deseo de tener una página autoadministrable con un diseño
							minimalista, colores suaves y carente de animaciones para
							transmitir tranquilidad, seriedad y confianza a sus pacientes. El
							objetivo general del sitio es dar a conocer a la gente
							terapias alternativas naturistas como lo es la homeopatía,
							su alcance medicinal y terapéutico, exponer
							testimonios de pacientes que han logrado la sanación sin haberlo
							logrado antes con medicina alópata convencional y el objetivo
							principal es agendar citas médicas virtuales de manera amigable y
							eficiente.
						</motion.p>
					</motion.div>
				</motion.div>
			</motion.section>

			<motion.section
				key="section2"
				className={styles["content-readme"]}
				variants={container2}
				initial="hidden"
				whileInView="show"
				viewport={{ amount: 0.3 }}
			>
				<motion.div
					key="div3"
					variants={slideFromDownRotateY}
					className={styles["div-readme"]}
				>
					<motion.h2 variants={fallingDownRotateX}>Tecnologías Utilizadas</motion.h2>
					<motion.div variants={container2} className={styles["text-flex-div"]}>
						<motion.h3 variants={zoomIn}>Frontend</motion.h3>
						<motion.p variants={zoomIn}>
							JavaScript, React, NextJS y CSS Vanilla.
						</motion.p>
					</motion.div>
					<motion.div variants={container2} className={styles["text-flex-div"]}>
						<motion.h3 variants={zoomIn}>Backend</motion.h3>
						<motion.p variants={zoomIn}>
							Strapi, PostgreSQL, Búsqueda con Mileisearch, Envío de correos
							electrónicos con NodeMailer, Administración de Correo Corporativo
							con CPanel.
						</motion.p>
					</motion.div>
					<motion.div variants={container2} className={styles["text-flex-div"]}>
						<motion.h3 variants={zoomIn}>
							Completamente Autoadministrable
						</motion.h3>
						<motion.p variants={zoomIn}>
							Para una flexibilidad máxima en la administración de la página,
							opté por crear un endpoint para cada ruta del sitio pudiendo así
							modificar cada texto e imagen. Y crear un WebHook que se dispara
							cada vez que el administrador realiza una operación CRUD fue una
							excelente solución para dejar de consumir datos cacheados y
							garantizar el renderizado de datos frescos.
						</motion.p>
					</motion.div>
					<motion.div variants={container2} className={styles["text-flex-div"]}>
						<motion.h3 variants={zoomIn}>APIs Utilizadas</motion.h3>
						<motion.p variants={zoomIn}>
							SetMore para la agenda médica y Google Calendar para la
							notificación de la proximidad de la cita, y la confirmación de la
							misma.
						</motion.p>
					</motion.div>
					<motion.div variants={container2} className={styles["text-flex-div"]}>
						<motion.h3 variants={zoomIn}>Deploy</motion.h3>
						<motion.p variants={zoomIn}>
							Frontend en Vercel y Backend en Railway.
						</motion.p>
					</motion.div>
					<motion.div variants={container2} className={styles["text-flex-div"]}>
						<motion.h3 variants={zoomIn}>Multimedia</motion.h3>
						<motion.p variants={zoomIn}>
							Imágenes servidas desde Cloudinary.
						</motion.p>
					</motion.div>
					<motion.div variants={container2} className={styles["text-flex-div"]}>
						<motion.h3 variants={zoomIn}>Lenguajes</motion.h3>
						<motion.p variants={zoomIn}>
							Español e Inglés (UK).
						</motion.p>
					</motion.div>
				</motion.div>

				<motion.div
					className={styles["div4"]}
					key="div4"
					variants={slideFromDownRotateY}
				>
					<motion.h2 variants={fallingDownRotateX}>
						Le echas un vistazo al sitio en producción...?
					</motion.h2>
					<motion.h3 variants={zoomIn}>
						<MotionLink
							href="https://leonorberdichevsky.com"
							target="_blank"
							className={styles["link-readme"] + " " + styles["text-flex-div"]}
							whileHover={hoverLink}
						>
					 <motion.h4 whileHover={hoverLink} variants={zoomIn}>
						¡Pues Vamos!
					 </motion.h4>
							<MotionImage
								className={styles["div4-img"]}
								variants={fadeInRotate}
								width={300}
								height={300}
								whileHover={hoverLink}
								alt="logo leonor berdichevsky"
								src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1723649537/logo-leonor-redondo-fondo-negro_hamqbz.png"
							/>
						</MotionLink>
					</motion.h3>
					<motion.h2 variants={fallingDownRotateX}>
						Volvamos a ver otros Proyectos!
					</motion.h2>
					<motion.div
						className={styles["div-back-btn"]}
						variants={zoomIn}
						whileHover={hoverLink}
						onClick={() => router.push("/proyectos")}
					>
						<motion.div
							variants={fadeInRotate}
						>
							<IoArrowBackCircle className={styles["back-btn"]} />
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.section>
		</motion.main>
	);
}

export default ReadMeLeonor;
