import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faCcVisa, faCcAmex, faCcPaypal, faCcMastercard, faPix } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';


function Footer () {
    return (
        <footer className='footer-container'>
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
        <div className='ad-container'>
          Propaganda pra loja
        </div>
        <div>
          <span>
            <h1>StoreWay</h1>
          </span>
          <span>
            <h4>Sobre nós?</h4>
            <p>Sua loja virtual de confiança! Oferecemos uma ampla variedade de produtos de alta qualidade, preços competitivos e um atendimento excepcional. Navegue com segurança e descubra ofertas incríveis todos os dias. Bem-vindo à Store Way, onde suas compras são sempre uma excelente experiência.</p>
            <br/>
            <p>CNPJ: 41.902.528/0001-06</p>
          </span>
          <span>
            
            <div>
              <h4>
                <b>Siga nas redes sociais</b>
              </h4>
              <span>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faYoutube}/>
              </span>
            </div>
            <div>
              <h4>Pagamentos</h4>
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
      </footer>
    );
}

export default Footer