
import './App.css';
//import Data from './data.json'
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import LocationPage from './Pages/LocationPage/LocationPage'
import Error from './Pages/Error/Error';




function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>} />
          <Route path = "/location" element={<LocationPage/>} />
          
        <Route path= "/About" element= {<About/>}/>   
        <Route path= "*" element = {<Error/>} />         
        </Routes>

    </div>
  );
}

export default App;
