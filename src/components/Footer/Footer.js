// Estilização do componente
import './Footer.css'

// Importação de biblioteca de ícones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faCcVisa, faCcAmex, faCcPaypal, faCcMastercard, faPix } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';


function Footer () {
    return (
        <footer className='footer-container'>

        {/* Início Contato */}
        <div className='contact'>
            
            <h4><b>Atendimento Loja Virtual</b></h4>      
           <div className='contact-items'>
            <div>   
              <span>
                <FontAwesomeIcon icon={faClock}/>
              </span>
                  <p>Segunda a sexta <b>8h às 12h</b> e das <b>14h às 18h</b></p>  
                    
                </div>
                <div>
                  <span>
                    <FontAwesomeIcon icon={faPhone}/>
                  </span>
                    <p><b>+55 11 3331-2024</b></p>
                    
                </div>
                <div>
                  <span>
                    <FontAwesomeIcon icon={faEnvelope}/>
                  </span>
                    <p><b>contatosw@storeway.com.br</b></p>
                    
                </div>
           </div>
            
        </div>
        {/* Fim Contato */}
        
        {/* Início Anúcio */}
        <div className='ad-container'>
          Propaganda pra loja
        </div>
        {/* Fim Anúncio */}
        
        {/* Inicio Sobre */}
        <div className='footer-about'>
          <span className='about-title-container'>
            <h1>StoreWay</h1>
          </span>
          <div className='white-div'/>
          <span className='about-us-container'>
            <h3>Sobre nós?</h3>
            <p>Sua loja virtual de confiança! Oferecemos uma ampla variedade de produtos de alta qualidade, preços competitivos e um atendimento excepcional. Navegue com segurança e descubra ofertas incríveis todos os dias. Bem-vindo à Store Way, onde suas compras são sempre uma excelente experiência.</p>
            <br/>
            <p>CNPJ: 41.902.528/0001-06</p>
          </span>
          <span className='pay-social-container'>
            
            <div>
              <h3>
                <b>Siga nas redes sociais</b>
              </h3>
              <span>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faYoutube}/>
              </span>
            </div>
            <div>
              <h3>Pagamentos</h3>
              <span>
                <FontAwesomeIcon icon={faCcVisa}/>
                <FontAwesomeIcon icon={faCcAmex}/>
                <FontAwesomeIcon icon={faCcPaypal}/>
                <FontAwesomeIcon icon={faCcMastercard}/>
                <FontAwesomeIcon icon={faPix}/>
              </span>
            </div>
          </span>
          
        </div>
        {/* Fim Sobre */}
      </footer>
    );
}

export default Footer