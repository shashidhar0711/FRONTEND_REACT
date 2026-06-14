import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from './components/Navbar';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  // create state
  // function to load specific page
  // Default home page should load by using useEffect
  // code spitting and dynamic import
  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
