import '@styles/globals.css'
// import {spaceGrotesk} from './fonts/spaceGrotesk'
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata ={
  title: "Portofolio",
  description: "Portofolio 2023 of Romain DELIMAL",
}
const Rootlayout = ({children}) => {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={`${syne.className} no-scrollbar`}>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

export default Rootlayout
