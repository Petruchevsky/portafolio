"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
	JSAnimatedSVG,
	HTMLAnimatedSVG,
	CSSAnimatedSVG,
	ReactAnimatedSVG,
	NextJSAnimatedSVG,
	PrismaAnimatedSVG,
	VercelAnimatedSVG,
	PostgreSQLAnimatedSVG,
	GithubAnimatedSVG,
	LogoMoisesWEBAnimatedSVG,
	BackAnimatedSVG,
} from "./AnimatedIconsSVG";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiPrisma, SiJest, SiTestinglibrary, SiFigma, SiTypescript } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FiFramer } from "react-icons/fi";
import { Fade, Bounce, Zoom, Slide } from "react-awesome-reveal";
import {
	icon,
	fadeInAndChangeBgColor,
	zoomInRotateY,
	zoomInRotate,
	fadeInWithGlow,
	fadeInAndChangeBgColor3,
} from "../styles/variants";
import "./HomeComp.css";
import TypedText from "../helpers/TypedText";

function HomeComp() {
	return (
		<main>
			<section className="banner-about">
				<video
					loop
					muted
					playsInline
					autoPlay
					src="https://res.cloudinary.com/dkkvoyfqz/video/upload/v1730245611/black-homepage-bg_a6oe6d.mp4"
				/>
				<div className="title-and-logo-banner-about">
					<LogoMoisesWEBAnimatedSVG className="logo-banner-about" />
					<div className="title-div-banner-about">
						<Slide direction="right" cascade damping={0.3}>
							<h1>
								Bienvenidos a mi <strong>portafolio</strong>
							</h1>
							<h2>
								<strong>Moisés</strong> Elías <strong>Berdichevsky</strong>{" "}
								Argandoña
							</h2>
							<h2>
								Desarrollador Frontend <strong>React / Nextjs</strong>
							</h2>
							<h2>
								<strong>
									{`{`} JavaScript {`}`}
								</strong>
							</h2>
						</Slide>
					</div>
				</div>
				<Bounce className="intro-container-about">
					<p className="intro-about">
						Soy un apasionado de la programación, la tecnología, la música y las
						plantas. A pesar de ser Ingeniero Agrónomo de profesión, he seguido
						un camino autodidacta para convertirme en desarrollador. Empecé
						construyendo proyectos fullstack para entender bien el flujo
						completo de una aplicación web, pero con el tiempo descubrí que lo
						que realmente me apasiona es el frontend. Tengo 2 años de
						experiencia desarrollando proyectos en modalidad freelance, lo cual
						me ha permitido aprender y crecer de forma continua. Ahora busco una
						oportunidad laboral donde pueda formar parte de un equipo, colaborar
						en proyectos grandes y seguir estudiando y mejorando como
						desarrollador cada día.
					</p>
				</Bounce>
			</section>

			<section className="skills">
				<div className="mi-stack-container">
					<h2 className="mi-stack-h2">
						<TypedText strings={["Mi Stack de Tecnologías"]} />
					</h2>
					<div className="icons-div-stack">
						<div className="individual-icon-div-stack">
							<JSAnimatedSVG />
							<p>
								<TypedText strings={["JavaScript"]} />
							</p>
						</div>
						<div className="individual-icon-div-stack">
							<HTMLAnimatedSVG />
							<p>
								<TypedText strings={["HTML5"]} />
							</p>
						</div>
						<div className="individual-icon-div-stack">
							<CSSAnimatedSVG />
							<p>
								<TypedText strings={["CSS3"]} />
							</p>
						</div>
						<div className="individual-icon-div-stack">
							<ReactAnimatedSVG />
							<p>
								<TypedText strings={["ReactJS"]} />
							</p>
						</div>
						<div className="individual-icon-div-stack">
							<NextJSAnimatedSVG />
							<p>
								<TypedText strings={["NextJS"]} />
							</p>
						</div>
						<div className="individual-icon-div-stack">
							<PostgreSQLAnimatedSVG />
							<p>
								<TypedText strings={["PostgreSQL"]} />
							</p>
						</div>
						<div className="individual-icon-div-stack">
							<PrismaAnimatedSVG />
							<p>
								<TypedText strings={["PrismaORM"]} />
							</p>
						</div>
						<div className="individual-icon-div-stack">
							<VercelAnimatedSVG />
							<p>
								<TypedText strings={["Vercel"]} />
							</p>
						</div>
						<div className="individual-icon-div-stack">
							<GithubAnimatedSVG />
							<p>
								<TypedText strings={["Github"]} />
							</p>
						</div>
					</div>
					<motion.div
						variants={fadeInAndChangeBgColor3}
						initial="hidden"
						whileInView="show"
						className="animaciones-cont"
					>
						<h2>
							<TypedText strings={["Animaciones"]} />
						</h2>
						<motion.div
							variants={zoomInRotate}
							initial="hidden"
							animate="show"
							className="animaciones-el"
						>
							<FiFramer className="react-icon" />
							<motion.p
								variants={fadeInWithGlow}
								initial="hidden"
								animate="show"
							>
								Framer Motion
							</motion.p>
						</motion.div>
					</motion.div>

					<motion.div
						variants={fadeInAndChangeBgColor}
						initial="hidden"
						whileInView="show"
						className="actualmente-aprendiendo"
					>
						<h2>
							<TypedText strings={["Actualmente aprendiendo"]} />
						</h2>
						<motion.div
							variants={zoomInRotate}
							initial="hidden"
							animate="show"
						>
							<div className="animaciones-el">
								<SiJest className="react-icon" />
								<motion.p
									variants={fadeInWithGlow}
									initial="hidden"
									animate="show"
								>
									Jest
								</motion.p>
							</div>
							<div className="animaciones-el">
								<SiTypescript  className="react-icon" />
								<motion.p
									variants={fadeInWithGlow}
									initial="hidden"
									animate="show"
								>
									TypeScript
								</motion.p>
							</div>
							<div className="animaciones-el">
								<SiTestinglibrary className="react-icon" />
								<motion.p
									variants={fadeInWithGlow}
									initial="hidden"
									animate="show"
								>
									React Testing Library
								</motion.p>
							</div>
							<div className="animaciones-el">
								<SiFigma className="react-icon" />
								<motion.p
									variants={fadeInWithGlow}
									initial="hidden"
									animate="show"
								>
									Figma
								</motion.p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</main>
	);
}

export default HomeComp;
