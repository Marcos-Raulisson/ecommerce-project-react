import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faGooglePlay, faApple, } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faCartShopping, faCamera, faAngleDown, faMobileScreen, faDesktop, faRing, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';


function Header (){
    return (
        <header className="App-header">
        <div className='above-header'>
          <div className='donwload-app'>
            <p>Download App</p>
            <FontAwesomeIcon icon={faWindows}/>
            <FontAwesomeIcon icon={faGooglePlay}/>
            <FontAwesomeIcon icon={faApple}/>
          </div>
          <p>Cupons de desconto de até <bold>90% de desconto</bold> na primeira compra</p>
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
            StoreWay
          </div>
          <input></input>
          <FontAwesomeIcon icon={faHeart}/>
          <FontAwesomeIcon icon={faCartShopping}/>
          <FontAwesomeIcon icon={faUser}/>
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