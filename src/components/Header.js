import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faGooglePlay, faApple, } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faCartShopping, faCamera, faAngleDown, faMobileScreen, faDesktop, faRing, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';


function Header (){
    return (
        <header className="App-header">
            <div className='above-header'>
            <div className='download-app'>
                <p>Download App</p>
                <div>
                    <FontAwesomeIcon icon={faWindows}/>
                    <FontAwesomeIcon icon={faGooglePlay}/>
                    <FontAwesomeIcon icon={faApple}/>    
                </div>
                
            </div>
            <p>Cupons de desconto de até <b>90% de desconto</b> na primeira compra</p>
            <div className='sub-setup'>
                <div className='dark-clear-mode'>
                <p>Modo Escuro</p>
                <FontAwesomeIcon icon={faMoon}/>
                </div>
                <div className='language-choice'>
                <p>PT-BR</p>
                </div>
            </div>
            </div>
            <div className='main-tool-bar'>
                <div className='logo'>
                    <b>Store</b>Way
                </div>
                <input></input>
                <div className='menu-icons'>
                    <FontAwesomeIcon icon={faHeart}/>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <FontAwesomeIcon icon={faUser}/>            
                </div>
                
            </div>
            <div className='sub-links'>
            <a href='#'><FontAwesomeIcon icon={faCamera}/>Câmeras e Acessórios<FontAwesomeIcon icon={faAngleDown}/></a>
            <a href='#'><FontAwesomeIcon icon={faMobileScreen}/>Celulares e Telefones<FontAwesomeIcon icon={faAngleDown}/></a>
            <a href='#'><FontAwesomeIcon icon={faDesktop}/>Eltrônicos<FontAwesomeIcon icon={faAngleDown}/></a>
            <a href='#'><FontAwesomeIcon icon={faRing}/>Jóias e Relógios<FontAwesomeIcon icon={faAngleDown}/></a>
            <a href='#'><FontAwesomeIcon icon={faDumbbell}/>Saúde<FontAwesomeIcon icon={faAngleDown}/></a>
            </div>
      </header>
    );
}

export default Header;