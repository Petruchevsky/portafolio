"use client";
import "./Header.css";
import { Slide } from "react-awesome-reveal";
import { LogoMoisesWEBAnimatedSVG } from "./AnimatedIconsSVG";

function Header() {
	return (
		<header>
			<LogoMoisesWEBAnimatedSVG className="logo-header" />
			<Slide direction="right">
				<h2 className="header-h2">
					Moisés Berdichevsky Argandoña Desarrollador Web React/Nextjs
				</h2>
			</Slide>
		</header>
	);
}

export default Header;
