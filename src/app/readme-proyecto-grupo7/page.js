import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ReadMeGrupo7 from "../components/ReadMeGrupo7";

export const metadata = {
   title: "Proyecto Grupo7 ",
   description: "Toda la magia del comercio electrónico en un solo lugar..."
}

function ReadMeProyectoGrupo7 () {
	return (
   <main>
      <Header />
      <Navbar />
      <ReadMeGrupo7 />
   </main>
   );
}

export default ReadMeProyectoGrupo7;
