import Encabezado from "./encabezado";
import Tarjetas from "./Tarjetas";
import './contenedorTargetas.css';

function App(){
  return (
  <div>
    <Encabezado/>
    <Tarjetas/>
    <h1>5A - EVND</h1>
        <h2>Alumno</h2>
        <h3>Erik Ibarra</h3>
        <UserComponent/>
        <ProfileComponent/>
        <FeedComponent/>
        </div>
  );
}

function UserComponent(){
  const nombre = 'Erik';
  const apellido = 'Ibarra Gonzalez';
  const nombreCompleto = <h3>El se llama: {nombre} y sus apellidos son {apellido}</h3>;
  return <h3>UserComponent {nombreCompleto}</h3>;
}

function ProfileComponent(){
   const users = [
    { id: 1, name: 'Erik', role: 'Web Developer' },
    { id: 2, name: 'Mike', role: 'Web Designer' },
    { id: 3, name: 'Yona', role: 'Team Leader' },
  ]
  return (
    <>
      <p>Lista de usuarios del Sistema</p>
      <ul>
        {
        users.map(function(user,index){
          return(
            <li key={index}>{user.name} Es un {user.role}</li>
          )
        })
      }
      </ul>
      </>
  );
}

function FeedComponent() {
  const materiales = [
    { id: 4, name: 'Cemento', tipo: 'Material Base' },
    { id: 5, name: 'Ladrillo', tipo: 'Bloque de Construcción' },
    { id: 6, name: 'Acero', tipo: 'Refuerzo' },
    { id: 7, name: 'Madera', tipo: 'Estructura' },
    { id: 8, name: 'Vidrio', tipo: 'Acabado' },
  ]
  return (
    <>
      <p><h2>Lista de Materiales de Construcción</h2></p>
      <ul>
        {
        materiales.map(function(material,index){
          return(
            <li key={index}>{material.name} Es un {material.tipo}</li>
          )
        })
      }
      </ul>
      </>
  );
}

export default App