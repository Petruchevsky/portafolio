"use client";
import "./Navbar.css";
import Link from "next/link";
import { Bounce } from "react-awesome-reveal";
import { FaHome } from "react-icons/fa";
import { BsInfoSquareFill } from "react-icons/bs";
import { AiFillProduct, AiFillMessage } from "react-icons/ai";

function Navbar() {
	return (
		<nav>
			<div className="nav-item-div">
				<Bounce delay={400} className="reveal-box">
					<Link href="/" className="btn">
						<FaHome />
						Inicio
					</Link>
				</Bounce>
			</div>
			<div className="nav-item-div">
				<Bounce delay={700} className="reveal-box">
          <Link href="/sobre-mi" className="btn">
            <BsInfoSquareFill />
            Sobre Mí
          </Link>
        </Bounce>
			</div>
			<div className="nav-item-div">
				<Bounce delay={1000} className="reveal-box">
          <Link href="/proyectos" className="btn">
            <AiFillProduct />
            Proyectos
          </Link>
        </Bounce>
			</div>
			<div className="nav-item-div">
				<Bounce delay={1200} className="reveal-box">
          <Link href="/contacto" className="btn">
            <AiFillMessage />
            Contacto
          </Link>
        </Bounce>
			</div>
		</nav>
	);
}

export default Navbar;
