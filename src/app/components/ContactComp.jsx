"use client";
import "./ContactComp.css";
import Header from "./Header";
import Navbar from "./Navbar";
import TypedWithBack from "../helpers/TypedWithBack";
import TypedTextFaster from "../helpers/TypedTextFaster";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LiaTelegramPlane } from "react-icons/lia";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbFaceIdError } from "react-icons/tb";
import { IoMdMailUnread, IoIosRefresh, IoMdDownload  } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { LogoMoisesWEBAnimatedSVG } from "./AnimatedIconsSVG";
import { Spinner } from "react-bootstrap";
import {
	contactBtnZoomIn,
	container4,
	fadeInAndChangeBgColor2,
	fadeInAndChangeBgColor3,
	fadeInWithGlow,
	hoverContact,
	hoverLink2,
	zoomIn,
} from "../styles/variants";

const contactStrings = [
	"Mantener el contacto siempre es importante...",
	"Podríamos trabajar juntos en un proyecto entretenido...",
	"Talvez contactarnos para darnos datos de ofertas laborales...",
	"O simplemente para prender el carbón y charlar un rato...",
];

function ContactComp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [btnText, setBtnText] = useState("Enviar Mensaje");
	const [btnIcon, setBtnIcon] = useState(<LiaTelegramPlane />);
	const [className, setClassName] = useState("btn-contacto");

	const MotionLink = motion(Link);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = { name, email, subject, message };

		if (!name || !email || !subject || !message) {
			setClassName("btn-contacto-error");
			setBtnText(<TypedTextFaster strings={["Por favor, completa todos los campos"]} />);
			setBtnIcon(<TbFaceIdError className="svg" />);
			console.log("bloque if ejecutado");

			setTimeout(() => {
				setClassName("btn-contacto");
				setBtnText(<TypedTextFaster strings={["Enviar Mensaje"]} />);
				setBtnIcon(<LiaTelegramPlane className="svg" />);
			}, 2500);
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			 setClassName("btn-contacto-error");
			 setBtnText(<TypedTextFaster strings={["Por favor, ingresa un correo electrónico válido."]} />);
			 setBtnIcon(<TbFaceIdError className="svg" />);

			 setTimeout(() => {
				setClassName("btn-contacto");
				setBtnText(<TypedTextFaster strings={["Enviar Mensaje"]} />);
				setBtnIcon(<LiaTelegramPlane className="svg" />);
			}, 2500);
			return;
		}

		setClassName("btn-contacto-success");
		setBtnText(<TypedTextFaster strings={["Estamos enviando tu mensaje..."]} />);
		setBtnIcon(<Spinner animation="grow" className="spinner-grow-size" />);

		try {
			const res = await fetch(`/api/mailer`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				setClassName("btn-contacto-error");
				setBtnText(<TypedTextFaster strings={["Lo sentimos...","Algo salió Mal con tu Email"]} />);
				setBtnIcon(<TbFaceIdError className="svg" />);
				throw new Error("Algo salió Mal con tu Email");
			}

			setClassName("btn-contacto-success");
			setBtnText(<TypedTextFaster strings={["Mensaje Enviado Exitosamente!"]} />);
			setBtnIcon(<GrStatusGood className="svg" />);

			setTimeout(() => {
				setBtnText(<TypedTextFaster strings={["Te responderé lo antes posible!"]} />);
				setBtnIcon(<GrStatusGood className="svg" />);
			}, 2500);

			setTimeout(() => {
				setName("");
				setEmail("");
				setSubject("");
				setMessage("");
				setClassName("btn-contacto");
				setBtnText(<TypedTextFaster strings={["Enviar Nuevo Mensaje"]} />);
				setBtnIcon(<LiaTelegramPlane className="svg" />);
			}, 8000);

		} catch (error) {
			setClassName("btn-contacto-error");
			setBtnText(<TypedTextFaster strings={["Lo sentimos...","Algo salió Mal con tu Email"]} />);
			setBtnIcon(<TbFaceIdError className="svg" />);

			setTimeout(() => {
				setName("");
				setEmail("");
				setSubject("");
				setMessage("");
				setBtnText(<TypedTextFaster strings={["Inténtalo de nuevo...", "O por favor refresca la página"]} />);
				setBtnIcon(<IoIosRefresh className="svg" />);
			}, 3500);

			setTimeout(() => {
				setClassName("btn-contacto");
				setBtnText(<TypedTextFaster strings={["Enviar Mensaje"]} />);
				setBtnIcon(<LiaTelegramPlane className="svg" />);
			}, 9000);
		}
	};


	return (
		<motion.main
			className="page-container-contact"
			variants={fadeInAndChangeBgColor3}
			initial="hidden"
			whileInView="show"
		>
			<Header />
			<Navbar />
			<motion.h1 className="typed-h1-contact">
				<TypedWithBack strings={contactStrings} />
			</motion.h1>
			<main className="main-container-contact">
				<setcion className="form-container">
					<motion.form
						onSubmit={handleSubmit}
						initial="hidden"
						whileInView="show"
						variants={container4}
					>
						{" "}
						<motion.input
							variants={zoomIn}
							type="text"
							value={name}
							placeholder="Ingresa tu Nombre"
							onChange={(e) => setName(e.target.value)}
							required
						/>
						<motion.input
							variants={zoomIn}
							type="email"
							value={email}
							placeholder="Ingresa tu Email"
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<motion.input
							variants={zoomIn}
							type="text"
							value={subject}
							placeholder="Asunto"
							onChange={(e) => setSubject(e.target.value)}
							required
						/>
						<motion.textarea
							variants={zoomIn}
							value={message}
							placeholder="Escribe tu Mensaje..."
							onChange={(e) => setMessage(e.target.value)}
							required
						/>
						<motion.button
							variants={contactBtnZoomIn}
							initial="hidden"
							whileInView="show"
							exit="exit"
							whileHover={hoverContact}
							onClick={handleSubmit}
							className={className}
							type="submit"
							key="not-submiting"
						>
							{btnText}
							{btnIcon}
						</motion.button>
					</motion.form>
				</setcion>

				<section className="section-datos-contacto">
					<motion.div variants={container4} className="title-logo-div">
						<motion.h1 variants={fadeInWithGlow} className="h1-contacto">Contacto</motion.h1>
						<LogoMoisesWEBAnimatedSVG className="logo-contacto" />
					</motion.div>

					<motion.div variants={fadeInAndChangeBgColor2} initial="hidden" whileInView="show" className="div-datos">
							<MotionLink variants={zoomIn}
								className="link item-div-datos"
								href="tel:+56961964148"
								target="_blank"
							>
							<motion.div variants={zoomIn} style={{ display: "flex", gap: "1rem" }}>
								<BsFillTelephoneInboundFill className="svg-contacto" />
							</motion.div>
								<h4>+56 9 6196 4148</h4>
							</MotionLink>

							<MotionLink variants={zoomIn}
								className="link item-div-datos"
								href="https://wa.me/56961964148?text=Hola Moisés,%20estuve%20viendo%20tu%20portafolio%20y%20quisiera%20saber%20si%20podemos%20conversar%20un%20momento..."
								target="_blank"
							>
							<motion.div variants={zoomIn} style={{ display: "flex", gap: "1rem" }}>
							<FaWhatsapp className="svg-contacto" />
							</motion.div>
								<h4>Enviar Whatsapp</h4>
							</MotionLink>

							<MotionLink variants={zoomIn}
								className="link item-div-datos"
								href="mailto:hola@moises-web.cl?subject=Hola Moisés!"
								target="_blank"
							>
							<motion.div variants={zoomIn} style={{ display: "flex", gap: "1rem" }}>
							<IoMdMailUnread className="svg-contacto" />
							</motion.div>
							<h4>hola@moises-web.cl</h4>
							</MotionLink>

							<MotionLink variants={zoomIn}
								className="link item-div-datos"
								href="https://maps.app.goo.gl/JLQPSpCtvKWiP9xg8"
								target="_blank"
							>
							<motion.div variants={zoomIn} style={{ display: "flex", gap: "1rem" }}>
							<FaMapLocationDot className="svg-contacto" />
							</motion.div>
							<h4>Viña del Mar, Chile.</h4>
							</MotionLink>

							<MotionLink variants={zoomIn}
								className="link item-div-datos"
								href="/mi-cv.pdf"
								target="_blank"
								download="Moisés_Berdichevsky_Fullstack_Developer_CV.pdf"

							>
							<motion.div variants={zoomIn} style={{ display: "flex", gap: "1rem" }}>
							<IoMdDownload  className="svg-contacto" />
							</motion.div>
							<h4>Descargar CV Versión PDF.</h4>
							</MotionLink>
					</motion.div>
				</section>
			</main>
		</motion.main>
	);
}

export default ContactComp;
