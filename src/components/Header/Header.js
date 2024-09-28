import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows, faGooglePlay, faApple, } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faCartShopping, faCamera, faAngleDown, faMobileScreen, faDesktop, faRing, faDumbbell, faMagnifyingGlass, faFilter, faBars } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import React, {useState } from 'react';


function Header (){
    const [isFavoritesVisible, setIsFavoritesVisible] = useState(false);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [isUserVisible, setIsUserVisible] = useState(false);
    
    return (        
        <header className="App-header">
            {/* Início Above Header */}
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
            {/* Fim Above Header */}
            {/* Início Tool-Bar  */}
            <div className='main-tool-bar'>
                <div className='logo'>            
                    <FontAwesomeIcon icon={faBars}/>                 
                    <b>Store</b>Way            
                </div>            
                <div className='search-bar'>              
                    <input type='text' id="searchInput" />                
                    
                    <label htmlFor="searchInput">                      
                        <a href='#'>                           
                            <FontAwesomeIcon icon={faFilter} className='search-icon'/>                     
                        </a>                      
                        <a href='#'>                        
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>                   
                        </a>                  
                    </label>
                </div>        
                <div className='menu-icons'>
                    <div className='menu-container'
                         onMouseEnter={() => setIsFavoritesVisible(true)}
                         onMouseLeave={() => setIsFavoritesVisible(false)}
                         >
                        <Link for="/error-page">
                            <FontAwesomeIcon icon={faHeart}/>
                        </Link>
                        {isFavoritesVisible &&(
                            <div className='menu'>
                                <ul>
                                    <li>Item favorito 1</li>
                                    <li>Item favorito 2</li>
                                    <li>Item favorito 3</li>
                                </ul>
                            </div>
                        )}    
                    
                    </div>
                    
                    <div className='menu-container'
                         onMouseEnter={() => setIsCartVisible(true)}
                         onMouseLeave={() => setIsCartVisible(false)}
                         >
                        <Link to="/error-page">
                            <FontAwesomeIcon icon={faCartShopping}/>                            
                        </Link>
                        {isCartVisible &&(
                            <div className='menu'>
                                <ul>
                                    <li>Item no carrinho 1</li>
                                    <li>Item no carrinho 2</li>
                                    <li>Item no carrinho 3</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='menu-container'
                         onMouseEnter={()=>setIsUserVisible(true)}
                         onMouseLeave={()=> setIsUserVisible(false)}
                         >
                        <Link to="/login">
                            <FontAwesomeIcon icon={faUser}/>
                        </Link>
                        {isUserVisible &&(
                            <div className='menu'>
                                <ul>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Registro</Link></li>
                                    <li><Link to="/error-page">Configurações</Link></li>
                                    <li><Link to="/error-page">Sair</Link></li>
                                </ul>
                            </div>
                        )}

                    </div> 
                                        
                </div>     
            </div>
            {/* Fim Tool-Bar */}
            {/* Inicío Sub-Links */}
            <div className='sub-links'>
                <a href='#'><FontAwesomeIcon icon={faCamera}/>Câmeras e Acessórios<FontAwesomeIcon icon={faAngleDown}/></a>
                <a href='#'><FontAwesomeIcon icon={faMobileScreen}/>Celulares e Telefones<FontAwesomeIcon icon={faAngleDown}/></a>
                <a href='#'><FontAwesomeIcon icon={faDesktop}/>Eltrônicos<FontAwesomeIcon icon={faAngleDown}/></a>
                <a href='#'><FontAwesomeIcon icon={faRing}/>Jóias e Relógios<FontAwesomeIcon icon={faAngleDown}/></a>
                <a href='#'><FontAwesomeIcon icon={faDumbbell}/>Saúde<FontAwesomeIcon icon={faAngleDown}/></a>
            </div>
            {/* Fim Sub-Links */}
      </header>
    );
}

export default Header;