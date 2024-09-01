
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Home from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/error-page' element={<ErrorPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
