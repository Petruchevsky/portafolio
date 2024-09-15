import ContactComp from "../components/ContactComp";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export const metadata = {
	title: "Contacto",
	description: "¡Mantengámonos en contacto!",
};

function Contacto() {
	return (
		<main>
			<ContactComp />
		</main>
	);
}

export default Contacto;
