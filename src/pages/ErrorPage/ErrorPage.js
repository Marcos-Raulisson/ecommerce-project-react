import './ErrorPage.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


function ErrorPage() {
  return (
    <>
      <Header/>
      <main id='main'>
           <h1> 404 - Página não encontrada </h1>
      </main>
      
      <Footer/>
    </>
  );
}

export default ErrorPage;