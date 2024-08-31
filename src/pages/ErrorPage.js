import './styles/ErrorPage.css';
import Footer from '../components/Footer';
import Header from '../components/Header';


function ErrorPage() {
  return (
    <div className="error-page">
      <Header/>
      <h1> 404 - Página não encontrada </h1>
      <Footer/>
    </div>
  );
}

export default ErrorPage;