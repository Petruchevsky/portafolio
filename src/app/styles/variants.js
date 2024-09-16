//Variants
export const container1 = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.5,
			type: "tween",
			duration: 0.1,
		},
	},
};

export const container2 = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
	},
	transition: {
		when: "beforeChildren",
		staggerChildren: 0.3,
		type: "tween",
		duration: 0.3,
	},
};

export const container3 = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.5,
			type: "tween",
			duration: 1,
		},
	},
};

export const container4 = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.3,
			type: "tween",
			duration: 1,
		},
	},
};

export const hover = {
	cursor: "pointer",
	boxShadow: "inset 0px 0px 15px 3px rgba(255, 255, 255, 1)",
	background: "rgba(0,0,0,0.8)",
	transition: {
		duration: 0.2,
		ease: "easeInOut",
	},
};

export const hoverLink = {
	cursor: "pointer",
	scale: 1.1,
	color: "rgba(255, 255, 255, 1)",
	transition: {
		duration: 0.2,
		ease: "easeInOut",
	},
};

export const hoverWaterBtn = {
	cursor: "pointer",
	boxShadow: "inset 0 0 10px rgba(255, 255, 255, 1)",
	transition: {
		duration: 0.2,
		ease: "easeInOut",
	}
}

export const hoverContact = {
	cursor: "pointer",
	boxShadow: "0 0 15px 3px rgba(255, 255, 255, 1)",
	transition: {
		duration: 0.2,
		ease: "easeInOut",
	}
}

export const fadeIn = {
	hidden: { opacity: 0 },
	show: { 
		opacity: 1, 
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.3,
			duration: 1,
			ease: "easeInOut",
		},
	},
};

export const fadeInRotate = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		rotate: [0, 720],
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2,
			rotate: { duration: 2, ease: "backInOut" },
			opacity: { duration: 1, ease: "easeInOut" },
		},
	},
};

export const fadeInWithGlow = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		textShadow: [
			"0px 0px 10px rgba(255, 255, 255, 1)",
			"0px 0px 40px rgba(255, 255, 255, 1)",
			"0px 0px 0px rgba(255, 255, 255, 1)",
		],
		transition: {
			opacity: { duration: 2, ease: "circIn" },
			textShadow: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	},
};

export const fadeInAndChangeBgColor = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		backgroundImage: [
			"var(--gradientYellow)",
			"var(--gradientRed)",
			"var(--gradientGreen)",
			"var(--gradientPurple)",
			"var(--gradientPink)",
			"var(--gradientBlue)",
			"var(--gradientOrange)",
			"var(--gradientCyan)",
			"var(--gradientGray)",
		],
		transition: {
			delayChildren: 1,
			staggerChildren: 0.5,
			opacity: { duration: 2, ease: "easeInOut" },
			backgroundImage: {
				type: "tween",
				duration: 9,
				ease: "easeInOut",
				repeat: Infinity,
				repeatType: "loop",
			},
		},
	},
};

export const fadeInAndChangeBgColor2 = {
	hidden: { opacity: 0, backgroundImage: "var(--gradientCyan180)" },
	show: {
		opacity: 1,
		backgroundImage: [
			"var(--gradientCyan183)",
			"var(--gradientCyan177)",
		],
		transition: {
			delayChildren: 1,
			staggerChildren: 0.3,
			opacity: { duration: 2, ease: "easeInOut" },
			backgroundImage: {
				type: "tween",
				duration: 1,
				ease: "easeInOut",
				repeat: Infinity,
				repeatType: "reverse",
			},
		},
	},
};

export const contactBtnAnimation = {
	hidden: { scale: 0, backgroundImage: "var(--gradientCyan180)" },
	show: {
		scale: 1,
		backgroundImage: [
			"var(--gradientCyan183)",
			"var(--gradientCyan177)",
		],
		transition: {
			scale: { type: "spring", stiffness: 250, damping: 12, delay: 1 },
			backgroundImage: {
				type: "tween",
				duration: 0.7,
				ease: "easeInOut",
				repeat: Infinity,
				repeatType: "reverse",
			},
		},
	},
	exit: {
		scale: 0,
		transition: {
			type: "tween", duration: 0.5, ease: "backIn"
		}
	}
};

export const contactBtnZoomIn = {
	hidden: { scale: 0 },
	show: {
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 250,
			damping: 12,
			delay: 1,
		},
	},
	exit: {
		scale: 0,
		transition: {
			duration: 0.5,
			ease: "backIn",
		},
	}
};

export const fadeInAndChangeBgColor3 = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		backgroundImage: [
			"var(--gradientCyan360)",
			"var(--gradientCyan315)",
			"var(--gradientCyan270)",
			"var(--gradientCyan225)",
			"var(--gradientCyan180)",
			"var(--gradientCyan135)",
			"var(--gradientCyan90)",
			"var(--gradientCyan45)",
			"var(--gradientCyan0)",
		],
		transition: {
			delayChildren: 1,
			staggerChildren: 0.5,
			opacity: { duration: 2, ease: "easeInOut" },
			backgroundImage: {
				type: "tween",
				duration: 27,
				ease: "easeInOut",
				repeat: Infinity,
				repeatType: "loop",
			},
		},
	},
};

export const genkidama = {
	hidden: { opacity: 0, scale: 1 },
	show: {
		opacity: 1,
		scale: [1, 1.1, 1],
		y: [0, -50, 0],
		boxShadow: [
			"0 0 20px 15px rgba(255, 255, 255, 1)",
			"0 0 50px 30px rgba(255, 255, 255, 1)",
		],
		transition: {
			opacity: { duration: 1, ease: "easeInOut" },
			default: {
				duration: 8,
				ease: "easeInOut",
				repeat: Infinity,
				repeatType: "reverse",
			},
		},
	},
	
};

export const firefly = {
	hidden: { opacity: 0, scale: 1 },
	show: {
		opacity: 1,
		scale: [1, 1.1, 1],
		y: [0, -50, 0],
		boxShadow: [
			"0 0 10px 5px rgba(255, 255, 255, 1)",
			"0 0 25px 10px rgba(255, 255, 255, 1)",
		],
		transition: {
			opacity: { duration: 1, ease: "easeInOut" },
			default: {
				duration: 7,
				ease: "easeInOut",
				repeat: Infinity,
				repeatType: "reverse",
			},
		},
	},
	
};

export const bounce = {
	hidden: { scale: 0 },
	show: {
		scale: [0, 2, 1],
		transition: {
			type: "spring",
			stiffness: 150,
			damping: 5,
			mass: 1.5

		}
	}
}

export const zoomIn = {
	hidden: { scale: 0 },
	show: {
		scale: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.3,
			type: "tween",
			duration: 0.5,
			ease: "circIn",
		},
	},
	exit: {
		scale: 0,
		transition: {
			duration: 0.5,
			ease: "backIn",
		},
	}
};

export const zoomInRotate = {
	hidden: { scale: 0 },
	show: {
		scale: [0, 1.3, 1],
		rotate: [0, 360],
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2,
			type: "spring",
			damping: 10,
			stiffness: 200,
		},
	},
};

export const zoomInRotateY = {
	hidden: { scale: 0 },
	show: {
		scale: [0, 1.3, 1],
		rotateY: [0, 360],
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2,
			scale: { 
				type: "tween",
				damping: 10,
				stiffness: 200 
			},
			rotateY: { 
				type: "tween",
				damping: 10,
				stiffness: 200,
				delay: 1
			},
			
		},
	},
};

export const slideFromDownRotateY = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		y: [200, -100, 0],
		rotateY: [0, 360],
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2,
			y: {
				// type: "spring",
				// duration: 0.5,
				// mass: 2.5,
				// stiffness: 800,
				// damping: 30,
				type: "tween",
				duration: 0.5,
				ease: "backOut",
			},
			rotateY: {
				// type: "spring",
				// duration: 0.5,
				// mass: 2.5,
				// stiffness: 100,
				// damping: 30,
				type: "tween",
				duration: 0.5,
				ease: "easeInOut",
				delay: 0.5,
			},
		},
	},
	exit: {
		rotateY: [0, -360],
		y: [0, -50, 200],
		opacity: 0,
		transition: {
			rotateY: {
				type: "spring",
				duration: 0.75,
				mass: 2.5,
				stiffness: 100,
				damping: 20,
			},
			y: {
				type: "tween",
				duration: 0.75,
				ease: "anticipate",
				delay: 0.7,
			},
			opacity: { delay: 1.3, duration: 0.3 },
		},
	},
};

export const slideFromLeft = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		x: [-600, 100, 0],
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.5,
			opacity: { duration: 0.5, ease: "easeInOut" },
			x: {
				type: "tween",
				duration: 1,
				ease: "circOut",
			},
		},
	},
};

export const slideFromRight = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		x: [600, -100, 0],
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.5,
			opacity: { duration: 0.5, ease: "easeInOut" },
			x: {
				type: "tween",
				duration: 1,
				ease: "circOut",
			},
		},
	},
};

export const fallingDownRotateX = {
	hidden: { opacity: 0 },
	show: {
		opacity: [0, 1],
		y: [-150, 60, 0],
		rotateX: 720,
		textShadow: [
			"0px 0px 10px rgba(255, 255, 255, 1)",
			"0px 0px 40px rgba(255, 255, 255, 1)",
		],
		transition: {
			y: {
				type: "spring",
				mass: 1,
				stiffness: 300,
				damping: 20,
				duration: 1,
			},
			opacity: { duration: 0.5 },
			rotateX: {
				delay: 0.7,
				duration: 1,
				type: "spring",
				stiffness: 200,
				bounce: 0.5,
				mass: 1,
			},
			textShadow: {
				delay: 1,
				duration: 2,
				repeat: Infinity,
				repeatType: "reverse",
				ease: "easeInOut",
			},
		},
		exit: {
			x: [0, -150, 200],
			opacity: 0,
			transition: {
				x: { type: "tween", duration: 1, ease: "easeInOut" },
				opacity: { delay: 0.7, duration: 0.5 },
			},
		},
	},
};

export const slideUpRotateY = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		y: [200, -100, 0],
		backgroundImage: [
			"linear-gradient(45deg, rgba(243, 236, 120, 0), rgba(175, 66, 97, 0))",
			"linear-gradient(0deg, #000000,#ffffff)",
			"linear-gradient(45deg, #343434,#ffffff)",
			"linear-gradient(90deg, #840000,#ffffff)",
			"linear-gradient(135deg, #574601,#ffffff)",
			"linear-gradient(180deg, #000000,#ffffff)",
			"linear-gradient(225deg, #004111,#ffffff)",
			"linear-gradient(270deg, #01004F,#ffffff)",
			"linear-gradient(315deg, #350046,#ffffff)",
			"linear-gradient(360deg, #00263F, #FFFFFF)",
		],
		rotateY: [0, 360],
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.3,
			y: {
				type: "spring",
				duration: 0.75,
				mass: 2.5,
				stiffness: 800,
				damping: 23,
			},
			rotateY: {
				type: "spring",
				delay: 0.75,
				duration: 0.75,
				mass: 2.5,
				stiffness: 200,
				damping: 30,
			},
			backgroundImage: {
				duration: 0.75,
				repeat: 1,
				repeatType: "reverse",
				ease: "easeInOut",
			},
		},
	},
	exit: {
		rotateY: [0, -360],
		y: [0, -50, 200],
		opacity: 0,
		transition: {
			rotateY: {
				type: "spring",
				duration: 0.75,
				mass: 2.5,
				stiffness: 100,
				damping: 20,
			},
			y: {
				type: "tween",
				duration: 0.75,
				ease: "anticipate",
				delay: 0.7,
			},
			opacity: { delay: 1.3, duration: 0.3 },
		},
	},
};

export const icon = {
	hidden: {
		pathLength: 0,
		fill: "rgba(255, 255, 255, 0)",
	},
	visible: {
		pathLength: 1,
		fill: "rgba(255, 255, 255, 1)",
	},
	transition: {
		pathLength: { duration: 3, ease: "easeInOut" },
		fill: { duration: 1, delay: 3 },
	},
};

export const iconWithShadow = {
	hidden: {
		pathLength: 0,
		fill: "rgba(255, 255, 255, 0)",
		filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
	},
	visible: {
		pathLength: [0, 1, 0],
		fill: [
			"rgba(255, 255, 255, 0)",
			"rgba(255, 247, 0, 1)",
			"rgba(0, 255, 255, 1)",
			"rgba(255, 0, 0, 1)",
			"rgba(155, 0, 155, 1)",
			"rgba(0, 0, 0)",
			"rgba(255, 255, 255, 1)",
		],
		filter: [
			"drop-shadow(0px 0px 1px rgba(255, 255, 255, 1))",
			"drop-shadow(0px 0px 70px rgba(255, 255, 255, 1))",
		],
	},
	transition: {
		pathLength: { duration: 4, ease: "easeInOut", delay: 0.1 },
		fill: {
			duration: 1,
			delay: 4,
			ease: "easeInOut",
			repeat: 2,
			repeatType: "loop",
		},
		filter: {
			duration: 5,
			delay: 5,
			ease: "circInOut",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
};

export const iconOnlyPath = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
	},
	transition: {
		pathLength: { duration: 5, ease: "backInOut" },
		opacity: { duration: 2, delay: 0, ease: "easeInOut" },
	},
};

export const fadeInOutEthereal = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		backgroundImage: [
			"linear-gradient(45deg, rgba(243, 236, 120, 0), rgba(175, 66, 97, 0))",
			"linear-gradient(0deg, #000000,#ffffff)",
			"linear-gradient(45deg, #343434,#ffffff)",
			"linear-gradient(90deg, #840000,#ffffff)",
			"linear-gradient(135deg, #574601,#ffffff)",
			"linear-gradient(180deg, #000000,#ffffff)",
			"linear-gradient(225deg, #004111,#ffffff)",
			"linear-gradient(270deg, #01004F,#ffffff)",
			"linear-gradient(315deg, #350046,#ffffff)",
			"linear-gradient(360deg, #00263F, #FFFFFF)",
			"linear-gradient(45deg, rgba(243, 236, 120, 0), rgba(175, 66, 97, 0))",
		],
		boxShadow: [
			"0px 0px 15px 3px rgba(0, 0, 0, 1)",
			"0px 0px 25px 20px rgba(50, 50, 50, 1)",
			"0px 0px 30px 25px rgba(100, 100, 100, 1)",
			"0px 0px 35px 30px rgba(150, 150, 150, 1)",
			"0px 0px 45px 40px rgba(200, 200, 200, 1)",
			"0px 0px 55px 50px rgba(255, 255, 255, 1)",
		],
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.3,
			opacity: { type: "tween", duration: 1, ease: "circOut" },
			backgroundImage: {
				duration: 2,
				ease: "easeInOut",
			},
			boxShadow: {
				duration: 1,
				repeat: 1,
				repeatType: "reverse",
				repeatDelay: 0,
				ease: "easeInOut",
			},
		},
	},
	exit: {
		opacity: 0,
		scale: [1, 1.5],
		backgroundImage: [
			"linear-gradient(45deg, rgba(243, 236, 120, 0), rgba(175, 66, 97, 0))",
			"linear-gradient(0deg, #000000,#ffffff)",
			"linear-gradient(45deg, #343434,#ffffff)",
			"linear-gradient(90deg, #840000,#ffffff)",
			"linear-gradient(135deg, #574601,#ffffff)",
			"linear-gradient(180deg, #000000,#ffffff)",
			"linear-gradient(225deg, #004111,#ffffff)",
			"linear-gradient(270deg, #01004F,#ffffff)",
			"linear-gradient(315deg, #350046,#ffffff)",
			"linear-gradient(360deg, #00263F, #FFFFFF)",
			"linear-gradient(45deg, rgba(243, 236, 120, 0), rgba(175, 66, 97, 0))",
		],
		boxShadow: [
			"0px 0px 15px 10px rgba(0, 0, 0, 1)",
			"0px 0px 25px 20px rgba(50, 50, 50, 1)",
			"0px 0px 30px 25px rgba(100, 100, 100, 1)",
			"0px 0px 35px 30px rgba(150, 150, 150, 1)",
			"0px 0px 45px 40px rgba(200, 200, 200, 1)",
			"0px 0px 55px 50px rgba(255, 255, 255, 1)",
		],
		transition: {
			default: { duration: 1, ease: "anticipate" },
			boxShadow: {
				duration: 0.5,
				repeat: 1,
				repeatType: "reverse",
				repeatDelay: 0,
				ease: "easeInOut",
			},
		},
	},
};