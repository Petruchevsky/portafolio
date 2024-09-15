import { Inter, Exo } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/globals.css";
import "./styles/fonts-and-icons.css";
import "./styles/containers-and-imgs.css";

const inter = Inter({ subsets: ["latin"] });
const exo = Exo({ subsets: ["latin"] });

export const metadata = {
	openGraph: {
		title: "Mi Portafolio",
		description: "Bienvenido a mi portafolio!",
		images: {
			url: "https://res.cloudinary.com/dkkvoyfqz/image/upload/v1719591924/logo-blanco_epeurp.png",
		},
		locale: "es_CL",
		type: "website",
	},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>{children}</body>
    </html>
  );
}
