
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/LoginPage/LoginPage';
import Register from './pages/RegisterPage/RegisterPage';
import Home from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/error-page' element={<ErrorPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
