import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ReadMeLeonor from "../components/ReadMeLeonor";

export const metadata = {
   title: "Proyecto Leonor berdichevsky",
   description: "Un buen Stack de Tecnologías, hacen un buen sitio web..."
}

function ReadMeProyectoLeonor() {
	return (
   <main>
      <Header />
      <Navbar />
      <ReadMeLeonor />
   </main>
   );
}

export default ReadMeProyectoLeonor;
