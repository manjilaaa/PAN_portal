import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import FetchPan from './components/FetchPan';
import HomePage from './components/HomePage/HomePage';
import Footer from './Footer/Footer';



function App() {
  return (
    <Router>


      <NavBar/>

      <div className='wrapper'>

      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Register' element={<Register/>} />
        <Route path='/fetch' element={<FetchPan/>}></Route>
      </Routes>
     
      <Footer/>
      </div>
      
    </Router>
  
    
  );
}

export default App;
