import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import LocationPage from './Pages/LocationPage/LocationPage'
import Error from './Pages/Error/Error'
import About from './Pages/About/About'
import { BrowserRouter ,Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path = "/location/:id" element={<LocationPage/>} />          
        <Route path= "/About" element= {<About/>}/>   
        <Route path= "*" element = {<Error/>} />         
        </Routes>
      <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

