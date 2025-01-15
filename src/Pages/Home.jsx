import React from 'react'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'

 export function Home() {
  return (
    <>
      <main className='Conteiner'>
        <section className='Conteiner-Principal'>
          <h1 className='titulo-principal'>Bienvenidos Api-Application</h1>
          <p className='Estilos-Parrafos'>Explora a los usuarios y sus publicaciones realizadas, esta aplicacion te permitira visitar 
            los perfiles de nuestros usuarios, para que tu estes al tanto de lo que ellos realizan y publican, disfruta tu recorrido.
          </p>
          <Link to={'/usuarios'} className='navigate-home'>Ver Perfiles de usuarios</Link>
        </section>
      </main>
    </>
  )
}

export default Home
