import React, { useState } from 'react'
import '../Styles/Global.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';


function UsersPost() {
    const {id} = useParams() //Obtenemos el id del Usuario atraves de la URL ;
    const [posts, setPost] = useState([]);
    const [londig, setLoding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //Se utiliza el metodo fetch para hacerle solicitudes a la API
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json()) 
        .then(data => {
            console.log(data); // Con este console.log podemos ver los resultados que nos arroja la API
            setPost(data);
            setLoding(false); 
        })
        .catch(error => 
            console.log('Error al cargar las publicaciones de los usuarios:', error), // Con este console.log podemos ver el posible error que nos arroje la API
            setError('Error al cargar las publicaciones de los usuarios'))
            setLoding(false);

    }, [id])

    if (londig) {
        return <p className='Estilos-error'>Cargando publicaciones...</p>;
      }
    
    return (
    <>
    <nav>
            <Navbar/>
    </nav>
        <main>
            <section className='Conteiner-Users'>
            <h2 className='Estilo-Titulo'>Publicaciones de uno de nuestros usuarios {id}</h2>
                    <ul>
                        {posts.map((post) => (
                            <li key = {post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ul>
            </section>
        </main>
    </>
    )
}

export default UsersPost
