import React, { useState, useEffect } from 'react'
import '../Styles/Users.css'
import { Link } from 'react-router-dom';


function Users() {

    const [usuarios, setUsuarios] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      //Se utiliza el metodo fetch para hacerle solicitudes a la API
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          console.log(data); // Con este console.log podemos ver los resultados que nos arroja la API
          setUsuarios(data);
        })
        //utilizamos catch para capturar posibles errror con la API
        .catch(error => {
          console.error('Error al cargar los usuarios:', error); // Con este console.log podemos ver el posible error que nos arroje la API
          setError('Hubo un error al cargar los usuarios.');
        });
    }, [])  

  return (
    <>
    <main>
        <section className='Contenido-Principal'>
        <h2 className='Estilos-Users'>Perfiles de nuestros usuarios</h2>
        <p className='Parrafos-users'>En esta sección podrás ver los perfiles de nuestros usuarios y ver mas acerca de ellos, disfruta tu recorrido</p>
        <a href="/" className='Navigate-users'>Regrasar a pagina principal</a>
        </section>
        <section className='Conteiner-Users'>
            {error && <p className='Estilos-error'>{error}</p>}
            <ul>
                {usuarios.length === 0?( 
                    <li>Cargando...</li>)
                : (
                    usuarios.map(usuario =>(
                        <li key={usuario.id}>
                            <h3>{usuario.name}</h3>
                            <p>{usuario.email}</p>
                            <Link to={`/usuarios/${usuario.id}`}>Ver publicaciones</Link>
                        </li>
                    )
                )
                )}
            </ul>
        </section>
    </main>
    </>
  )
}

export default Users
