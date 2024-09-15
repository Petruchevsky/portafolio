import HomeComp from "./components/HomeComp";
import Navbar from "./components/Navbar";
import "./page.css";

export const metadata = {
	title: "Moisés Web",
	description: "Bienvenido a mi sitio web.",
};

export default function About() {
	return (
		<main>
			<HomeComp />
			<div className="navbar-container-home">
				<Navbar />
			</div>
		</main>
	);
}
