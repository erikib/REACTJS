import ',/contenedorTarjeta.css';
function Contenedor () {
    return (
        <div className="contenedor-tarjeta">
            <h2>Contedor de Tarjetas</h2>
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
        </div>
    );
}

export default Contenedor;

function Tarjeta () {
    return (
        <div className="tarjeta">
            <img src={imgtargeta} alt="Imagen de la Tarjeta" />
            <h3>Esta es una Tarjeta</h3>
            <p>Descripción de la Tarjeta</p>
            <a href='#'>Ver más</a>
        </div>
    );
}