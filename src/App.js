
import './App.css';
import Navbar from './components/Navbar';
import About from './screens/About';
import Contact from './screens/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
     <div>
     <Navbar ></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
       
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
