  // import { useState } from 'react'

  import './App.css'
  import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
  
import Navbar from './Navbar/Navbar'
  import Home from './Home/Home'
import Chinese from './Home/Chinese/Chinese'
import Indain from './Home/Indian/Indian'
import Italian from './Home/Italian/Italian'
import Japanese from './Home/Japanese/Japanese'
import Mexican from './Home/Mexican/Mexican'
import Thai from './Home/Thai/Thai'
import French from './Home/French/French'
import Middle from './Home/Middle-East/Middle'
import Product from './Products/Product'
import SigIn from './SigIn/SigIn';
import Chatbot from './FoodGPT/Chatbot';


  function App() {
    

    return (
      <>
      <Navbar/>
     
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chinese" element={<Chinese />} />
          <Route path="/french" element={<French />} />
          <Route path="/indian" element={<Indain />} />
          <Route path="/italian" element={<Italian />} />
          <Route path="/japanese" element={<Japanese />} />
          <Route path="/mexican" element={<Mexican />} />
          <Route path="/middle" element={<Middle />} />
          <Route path="/thai" element={<Thai />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/Login" element={<SigIn/>} />
          
          <Route path="/Chatbot" element={<Chatbot/>} />
          
        </Routes>
    
    
     
        
      </>
    )
  }

  export default App
