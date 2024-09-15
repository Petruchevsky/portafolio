import { Inter, Exo } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/globals.css";
import "./styles/fonts-and-icons.css";
import "./styles/containers-and-imgs.css";

const inter = Inter({ subsets: ["latin"] });
const exo = Exo({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Portafolio",
  description: "Bienvenido a mi portafolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>{children}</body>
    </html>
  );
}
