export const zoomIn = {
	initial: {
		scale: 0,
	},
	animate: {
		scale: 1,
	},
	transition: {
		when: "beforeChildren",
		staggerChildren: 0.5,
		duration: 2,
		ease: "circIn",
	},
   exit: {
      scale: 0,
      transition: {
         duration: 0.3,
      }
   }
};

export const zoomInRotate = {
	initial: {
		scale: 0,
		opacity: 0,
		rotate: 360,
	},
	animate: {
		scale: 1,
		opacity: 1,
		rotate: 0,
	},
	transition: {
		when: "beforeChildren",
		// duration: 5,
		type: "spring",
		stiffness: 50,
		damping: 8,
	},
};
