"use client";
import "./motion.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { zoomIn, zoomInRotate } from "./testing-variants";

//Variants:

function Page() {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<main className="mc">
			{/* Primer Div */}
			<motion.div
				className="padre"
				variants={zoomIn}
				initial="initial"
				whileInView="animate"
				// animate="animate"
				transition={zoomIn.transition}
			>
				<motion.div
					className="hijo"
					variants={zoomInRotate}
					transition={zoomInRotate.transition}
					exit="exit"
				></motion.div>
			</motion.div>

			<motion.div
				className="padre2"
				variants={zoomIn}
				initial="initial"
				animate="animate"
				whileInView="animate"
				transition={zoomIn.transition}
			>
				<motion.div
					className="hijo"
					variants={zoomInRotate}
					// animate="animate"
					transition={zoomInRotate.transition}
					// whileInView="animate"
				></motion.div>
			</motion.div>
		</main>
	);
}

export default Page;
