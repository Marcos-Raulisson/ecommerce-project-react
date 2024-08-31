import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from '../src/pages/Home';
import ErrorPage from '../src/pages/ErrorPage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/error-page' element={<ErrorPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
