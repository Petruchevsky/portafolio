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
import { SiPrisma } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { Fade, Bounce, Zoom, Slide } from "react-awesome-reveal";
import { icon } from "../styles/variants";
import "./HomeComp.css";
import TypedText from "../helpers/TypedText";

function HomeComp() {
	return (
		<main>
			<section className="banner-about">
				<div className="title-and-logo-banner-about">
					<LogoMoisesWEBAnimatedSVG className="logo-banner-about" />
					<div className="title-div-banner-about">
						<Slide  direction="right" cascade damping={0.3}>
							<h1>
								Bienvenidos a mi <strong>Portafolio</strong>
							</h1>
							<h2>
								<strong>Moisés</strong> Elías <strong>Berdichevsky</strong>{" "}
								Argandoña
							</h2>
							<h2>
								Desarrollador Web React / Nextjs
							</h2>
							<h2>
								<strong>JavaScript</strong> FullStack
							</h2>
						</Slide>
					</div>
				</div>
				<Bounce className="intro-container-about">
					<p className="intro-about">
						Soy un apasionado de la programación, la tecnología, la música y las
						plantas. A pesar de ser Ingeniero Agrónomo de profesión, he
						recorrido un camino autodidacta para aprender a desarrollar sitios
						en React / Nextjs. Disfruto especialmente cuando tengo la oportunidad de
						trabajar en equipo en proyectos nuevos, ya que considero que es una
						excelente manera de aprender de otros al mismo tiempo que cultivas
						amistad. Ahora, estoy listo para formar parte de un equipo de
						trabajo, donde pueda seguir desarrollándome como profesional,
						contribuir al éxito de proyectos más grandes y especializarme en un
						área específica si el puesto lo requiere.
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
				</div>
			</section>
		</main>
	);
}

export default HomeComp;
