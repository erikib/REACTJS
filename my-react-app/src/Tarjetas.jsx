import './contenedorTargetas.css';
import paisaje from './assets/paisaje.jpg';

function Tarjetas() {
  return (
    <div className="contenedor-tarjetas">
      <div className="tarjeta">
        <img src={paisaje} alt="Paisaje" />
        <h3>Tarjeta 1</h3>
        <p>Contenido de la primera tarjeta.</p>
      </div>
      <div className="tarjeta">
        <img src={paisaje} alt="Paisaje" />
        <h3>Tarjeta 2</h3>
        <p>Contenido de la segunda tarjeta.</p>
      </div>
      <div className="tarjeta">
        <img src={paisaje} alt="Paisaje" />
        <h3>Tarjeta 3</h3>
        <p>Contenido de la tercera tarjeta.</p>
      </div>
      <div className="tarjeta">
        <img src={paisaje} alt="Paisaje" />
        <h3>Tarjeta 4</h3>
        <p>Contenido de la cuarta tarjeta.</p>
      </div>
    </div>
  );
}

export default Tarjetas;