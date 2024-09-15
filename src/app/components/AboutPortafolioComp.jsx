"use client";
import Header from "./Header";
import Navbar from "./Navbar";
import "./AboutPortafolioComp.css";
import Lottie from "lottie-react";
import programing from "../styles/lottie/programing.json";
import heart from "../styles/lottie/heart.json";
import { motion } from "framer-motion";
import {
	fadeInAndChangeBgColor,
	container3,
	fadeInWithGlow,
	zoomIn,
	genkidama,
	firefly,
	bounce,
} from "../styles/variants";


function AboutPortafolioComp() {
	return (
		<motion.main
			variants={fadeInAndChangeBgColor}
			initial="hidden"
			animate="show"
			className="main-about-port"
		>
			<Header />
			<Navbar />
			<motion.div className="text-container" variants={container3}>
				<motion.h1 variants={fadeInWithGlow} className="big-h1">
					Mmm...
				</motion.h1>
				<motion.h1 className="normal-h1" variants={fadeInWithGlow}>
					Lo siento,
				</motion.h1>
				<motion.h2 variants={fadeInWithGlow}>
					Pero esta parte del sitio
				</motion.h2>
				<motion.h3 variants={fadeInWithGlow}>
					Aún la estoy programando.
				</motion.h3>
				<motion.h4 variants={fadeInWithGlow}>
					Prometo que la espera será recompensada...
				</motion.h4>
				<motion.div className="heart" variants={bounce}>
					<Lottie animationData={heart} loop={true} />
				</motion.div>
			</motion.div>
			<motion.div className="programing" variants={zoomIn}>
				<Lottie animationData={programing} loop={true} />
			</motion.div>
         {/* Ornamenntal Lights */}
			<motion.div className="genkidama" variants={genkidama} />
			<motion.div className="firefly firefly4" variants={firefly} />
			<motion.div className="firefly firefly1" variants={firefly} />
			<motion.div className="firefly firefly2" variants={firefly} />
			<motion.div className="firefly firefly3" variants={firefly} />
		</motion.main>
	);
}

export default AboutPortafolioComp;
