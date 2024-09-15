import Navbar from "../components/Navbar"
import Header from "../components/Header"
import ProyectosComp from "../components/ProyectosComp"
import "../components/ProyectosComp.css"

export const metadata = {
  title: "Proyectos",
  description: "Algunos de mis proyectos más importantes."
}

function Proyectos() {
  return (
    <main className="page-container-projects">
        <Header />
        <Navbar />
        <ProyectosComp />
    </main>
  )
}

export default Proyectos