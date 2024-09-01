import './ErrorPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

function ErrorPage() {
  return (
    <>
      <Header/>
      <main id='main'>
        <h1>
        <FontAwesomeIcon icon={faTriangleExclamation} className='icon-warning'/>
          404 - Página não encontrada
          <FontAwesomeIcon icon={faTriangleExclamation} className='icon-warning'/>
        </h1>
        
      </main>
      
      <Footer/>
    </>
  );
}

export default ErrorPage;