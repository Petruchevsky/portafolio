"use client";
import { useRouter } from "next/navigation";
import styles from "./ReadMeGrupo7.module.css";
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

function ReadMeGrupo7() {
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
				src="https://res.cloudinary.com/dkkvoyfqz/video/upload/v1725479872/soft-colors-video2_foyiex.mp4"
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
					variants={slideFromDownRotateY}
					className={styles["div-transparent-readme"]}
				>
					<motion.h1 variants={fallingDownRotateX}>
						Grupo 7
					</motion.h1>
					<motion.h3 variants={zoomIn}>
						Tienda Electrónica de Productos de Limpieza
					</motion.h3>
					<MotionImage
						variants={zoomIn}
						width={300}
						height={300}
						alt="logo grupo 7"
						src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1723595425/logo-redondo-grupo7_zqbubo.png"
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
							Grupo 7 es una tienda que fabrica sus propios productos de limpieza. Los requerimientos técnicos eran preliminarmente un Ecommerce con carrito de compras e integración con la API de Transbank. Finalmente no se quiso la integración de Transbank por lo cual el canal principal de ventas es Email y Whatsapp.
							El cliente solicitó colores claros y suaves para transmitir la limpieza que ellos venden.
						</motion.p>
					</motion.div>
				</motion.div>
			</motion.section>

			<motion.section
				key="section3"
				className={styles["content-readme"]}
				variants={container2}
				initial="hidden"
				whileInView="show"
				viewport={{ amount: 0.3 }}
			>

				<motion.div
					key="div5"
					variants={slideFromDownRotateY}
					className={styles["div-credentials"]}
				>
					<motion.h2 variants={fallingDownRotateX}>
						Credenciales de Acceso como Administrador
					</motion.h2>
					<motion.div variants={container2} className={styles["text-flex-div"]}>
						<motion.p variants={zoomIn}>
						Para poder ver la UI que construí para la administración del contenido del sitio, puedes ingresar con las siguientes credenciales:
						</motion.p>
						<motion.h4 variants={zoomIn}>User: admin@moises-web.cl</motion.h4>
						<motion.h4 variants={zoomIn}>Password: password</motion.h4>
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
						<motion.h3 variants={zoomIn}>Animaciones</motion.h3>
						<motion.p variants={zoomIn}>
							React Awesome Reveal.
						</motion.p>
					</motion.div>
					<motion.div variants={container2} className={styles["text-flex-div"]}>
						<motion.h3 variants={zoomIn}>Backend</motion.h3>
						<motion.p variants={zoomIn}>
							NextJS, PostgreSQL, Envío de correos
							electrónicos con NodeMailer, Administración de Correo Corporativo
							con cPanel.
						</motion.p>
					</motion.div>
					<motion.div variants={container2} className={styles["text-flex-div"]}>
						<motion.h3 variants={zoomIn}>
							Completamente Autoadministrable
						</motion.h3>
						<motion.p variants={zoomIn}>
							Para una mayor autonomía y flexibilidad de uso, decidí crear UI's amigables para la administración del contenido del sitio.
						</motion.p>
					</motion.div>
					<motion.div variants={container2} className={styles["text-flex-div"]}>
						<motion.h3 variants={zoomIn}>APIs Utilizadas</motion.h3>
						<motion.p variants={zoomIn}>
							No fue necesario el uso de APIs externas.
						</motion.p>
					</motion.div>
					<motion.div variants={container2} className={styles["text-flex-div"]}>
						<motion.h3 variants={zoomIn}>Deploy</motion.h3>
						<motion.p variants={zoomIn}>
							Frontend y Backend ambos construídos por separado con NextJS y alojados en Vercel.
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
							Español.
						</motion.p>
					</motion.div>
				</motion.div>

				<motion.div
					className={styles["div4"]}
					key="div4"
					variants={slideFromDownRotateY}
				>
					<motion.h2 variants={fallingDownRotateX}>
						¿Le echas un vistazo al sitio en producción...?
					</motion.h2>
					{/* <motion.h3 variants={zoomIn}> */}
						<MotionLink
							href="https://www.ecommerce.moises-web.cl"
							target="_blank"
							className={styles["link-readme"]}
							whileHover={hoverLink}
						>
							<motion.h4 whileHover={hoverLink} variants={zoomIn}>
                        ¡Pues Vamos!
                     </motion.h4>
							<MotionImage
								variants={fadeInRotate}
								width={300}
								height={300}
								whileHover={hoverLink}
								alt="logo grupo 7"
								src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1723595425/logo-redondo-grupo7_zqbubo.png"
							/>
						</MotionLink>
					{/* </motion.h3> */}
					<motion.h2 variants={fallingDownRotateX}>
						¡Volvamos a ver otros Proyectos!
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

export default ReadMeGrupo7;
