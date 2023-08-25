import '@styles/globals.css'
import {spaceGrotesk} from './fonts/spaceGrotesk'

export const metadata ={
  title: "Portofolio",
  description: "Portofolio 2023 of Romain DELIMAL",
}
const Rootlayout = ({children}) => {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} no-scrollbar`}>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

export default Rootlayout
