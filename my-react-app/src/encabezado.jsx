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
            <div className='logodiv'>
                <Logo />
            </div>
            <div className='menudiv'>
                <Menu/>
            </div>
            <div className='redesdiv'>
                <Redes/>
            </div>
        </div>
    );
    
}

function Logo(){
    return (
        <img src={miLogo} alt="React Logo" />
    );
}

function Menu(){
    return(
        <div>
            <ul>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Acerca de</a></li>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Contacto</a></li>
                <li><a href='#'>Sucursales</a></li>
            </ul>
        </div>
    )
}

function Redes(){
    return(
        <div className='redes'>
           
        <div>
            <ul>
                <li><a href='#'><img src={facebook} alt="Facebook" /></a></li>
                <li><a href='#'><img src={x} alt="X" /></a></li>
                <li><a href='#'><img src={tikTok} alt="TikTok" /></a></li>
                <li><a href='#'><img src={whatsapp} alt="WhatsApp" /></a></li>
                <li><a href='#'><img src={youtube} alt="Youtube" /></a></li>
            </ul>
        </div>
         </div>
    )
}
export default Encabezado