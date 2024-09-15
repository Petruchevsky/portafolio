"use client";
import "./AboutComp.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { fadeInAndChangeBgColor2, fadeInWithGlow } from "../styles/variants";
import { useRouter } from "next/navigation";

function AboutComp() {
	const router = useRouter();

	const goToProyectos = () => {
		router.push("/proyectos");
	};

	const goToContacto = () => {
		router.push("/contacto");
	};

	return (
		<main className="main-container-about-me">
			<div className="header-container-about">
				<Header />
			</div>
			<div className="navbar-container-about">
				<Navbar />
			</div>

			<Fade duration={3000}>
				<section className="stars-container">
					<Slide
						className="left-side"
						childClassName="left-content"
						direction="left"
						duration={1000}
					>
						<div>
							<div className="edad-titulo">
								<p>Desarrollador Web FullStack (JavaScript)</p>
								<p>Ingeniero Agrónomo Universidad Santo Tomás</p>
								<p>Abierto a especialización según puesto</p>
							</div>
							<Image
								src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1719437674/yo-dev-left_f1axue.png"
								alt="Moisés Berdichevsky"
								width={1000}
								height={1000}
								quality={100}
								className="img-me"
							/>
						</div>
					</Slide>

					<Zoom
						className="center-side"
						childClassName="center-content"
						duration={1000}
					>
						<div>
							<div className="imgs">
								<Image
									src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1721769706/mw-logo4_l4hmix.jpg"
									width={700}
									height={700}
									quality={100}
									alt="Imagen de Moisés Berdichevsky"
								/>
								<Image
									src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1721769706/gpt_b60w9d.jpg"
									width={700}
									height={700}
									quality={100}
									alt="Imagen de Moisés Berdichevsky"
								/>
								<Image
									src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1721769706/web_design_sjcbfp.jpg"
									width={700}
									height={700}
									quality={100}
									alt="Imagen de Moisés Berdichevsky"
								/>
								<Image
									src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1721769706/apreton_manos_bc4jec.jpg"
									width={700}
									height={700}
									quality={100}
									alt="Imagen de Moisés Berdichevsky"
								/>
							</div>
							<h3>Trayectoria</h3>
							<p>
								Desde que decidí convertirme en desarrollador web, escogí
								construir proyectos como método de interiorización de
								conocimientos. Esto me ha permitido aprender de mis errores,
								lidiar con bugs y ganar experiencia como desarrollador.
							</p>
							<p>
								A la fecha he contruído más de 14 proyectos, pero he decidido
								exponer sólo los tres más importantes, ya que estos destacan mis habilidades actuales como desarrollador,
								mi capacidad para comunicarme con clientes, satisfacer necesidades
								reales, atendiendo aspectos de diseño, funcionalidad y
								usabilidad.
							</p>
						</div>
					</Zoom>

					<Slide
						direction="right"
						className="right-side"
						childClassName="right-content"
						duration={1000}
					>
						<div>
							<div className="imgs">
								<Image
									src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1721767921/moises_berdi_sm9pzx.jpg"
									width={700}
									height={700}
									quality={100}
									alt="Imagen de Moisés Berdichevsky"
								/>
								<Image
									src="https://res.cloudinary.com/dkkvoyfqz/image/upload/c_thumb,w_200,g_face/v1721767935/strat_vddr3i.jpg"
									width={700}
									height={700}
									quality={100}
									alt="Imagen de Moisés Berdichevsky"
								/>
								<Image
									src="https://res.cloudinary.com/dkkvoyfqz/image/upload/v1721767920/moises_berdi_2_wcrumw.jpg"
									width={700}
									height={700}
									quality={100}
									alt="Imagen de Moisés Berdichevsky"
								/>
								<Image
									src="https://res.cloudinary.com/dkkvoyfqz/image/upload/c_thumb,w_200,g_face/v1721767926/homestudio_iiu3ua.jpg"
									width={700}
									height={700}
									quality={100}
									alt="Imagen de Moisés Berdichevsky"
								/>
							</div>
							<h3>Hobbies y Pasatiempos</h3>
							<p>
								Algunos de mis pasatiempos favoritos son descubrir nuevos
								patrones de diseño web, ver shorts de YouTube que enseñan las
								últimas tendencias en desarrollo web, además suelo utilizar
								mucho ChatGPT para aprender conceptos clave dentro del mundo de
								la tecnología y la programación.
							</p>
							<p>
								En mis tiempos libres suelo explorar nuevas librerías para
								potenciar aún más las virtudes de React JS, y para relajarme
								nada mejor que sumergirme en la música, la composición y
								grabación de mis propias canciones.
							</p>
						</div>
					</Slide>
				</section>
			</Fade>
			<section className="more-about-me-section">
				<motion.div
					variants={fadeInAndChangeBgColor2}
					initial="hidden"
					whileInView="show"
					className="more-about-me"
				>
					<motion.h4 variants={fadeInWithGlow}>
						Si deseas saber más sobre lo que sé hacer, te invito a ver mis{" "}
						<span className="link" style={{ fontWeight:"600" }} onClick={goToProyectos}>
							proyectos.
						</span>
					</motion.h4>
				</motion.div>
				<motion.div
					variants={fadeInAndChangeBgColor2}
					initial="hidden"
					whileInView="show"
					className="more-about-me"
				>
					<motion.h4 variants={fadeInWithGlow}>
						Hay más de una manera de encontrarme.{" "}
						<span className="link" style={{ fontWeight:"600" }} onClick={goToContacto}>
							¡Mantengamos el contacto!
						</span>
						.
					</motion.h4>
				</motion.div>
				<motion.div
					variants={fadeInAndChangeBgColor2}
					initial="hidden"
					whileInView="show"
					className="more-about-me"
				>
					<motion.h4 variants={fadeInWithGlow}>
						Si te ha interesado mi perfil, también puedes descargar mi CV
						completo{" "}
						<span style={{ fontWeight:"600" }}>
							<Link href="/mi-cv.pdf" download="Moisés_Berdichevsky_Fullstack_Developer_CV.pdf" target="_blank" className="link">aquí.</Link>
						</span>
					</motion.h4>
				</motion.div>
			</section>
		</main>
	);
}

export default AboutComp;
