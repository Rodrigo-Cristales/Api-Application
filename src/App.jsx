import React from "react";
//Libreria para hacer enrrutamientos
import { BrowserRouter as Router, Routes ,Route,} from "react-router-dom";
//Importamos los componentes que vamos a utilizar y crearles las rutas
import  Home  from './Pages/Home.jsx';
import  Users  from './Pages/Users.jsx';
import  UsersPost  from './Pages/UsersPost.jsx';

function App() {

  return (
    <>
    <Router>
      <Routes>
        {/*Crear las rutas para navegar entre paginas*/}
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/usuarios/:id" element={<UsersPost />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
