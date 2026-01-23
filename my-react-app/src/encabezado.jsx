import miLogo from './assets/IG.png';
import facebook from './assets/facebook.png';
import x from './assets/x.png';
import tikTok from './assets/tik-tok.png';
import whatsapp from './assets/whatsapp.png';
import youtube from './assets/youtube.png';
import './encabezado.css';
function Encabezado(){
    return(
        <div className='encabezado'>
                <Logo />
                <Menu/>
                <Redes/>
                <h2>Bienvenido a mi Sitio </h2>
        </div>
    );
    
}

function Logo(){
    return(
    <div className='Logo'>
                <img src={miLogo} alt ="React Logo" />
            </div>
            );
}

function Menu(){
    return(
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </nav>
    )
}

function Redes(){
    return(
        <div className='redes'>
           
        <nav>
            <ul>
                <li><img src={facebook} alt="Facebook" /></li>
                <li><img src={x} alt="X" /></li>
                <li><img src={tikTok} alt="TikTok" /></li>
                <li><img src={whatsapp} alt="WhatsApp" /></li>
                <li><img src={youtube} alt="Youtube" /></li>

            </ul>
        </nav>
         </div>
    )
}
export default Encabezado