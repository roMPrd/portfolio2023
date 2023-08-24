import '@styles/globals.css'

export const metadata ={
  title: "Portofolio",
  description: "Portofolio 2023 of Romain DELIMAL",
}
const Rootlayout = ({children}) => {
  return (
    <html lang="en">
      <body className='no-scrollbar'>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

export default Rootlayout
