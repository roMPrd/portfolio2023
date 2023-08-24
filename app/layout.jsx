import '@styles/globals.css'
import {Space_Grotesk} from 'next/font/google'

export const metadata ={
  title: "Portofolio",
  description: "Portofolio 2023 of Romain DELIMAL",
}
const Rootlayout = ({children}) => {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className='no-scrollbar'>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

export default Rootlayout
