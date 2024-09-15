import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ReadMeOrlando from "../components/ReadMeOrlando";

export const metadata = {
   title: "Proyecto Orlando Rojas",
   description: "Con ReactJS y React Awesome Reveal todo es posible..."
}

function ReadMeProyectoOrlando() {
	return (
   <main>
      <Header />
      <Navbar />
      <ReadMeOrlando />
   </main>
   );
}

export default ReadMeProyectoOrlando;
