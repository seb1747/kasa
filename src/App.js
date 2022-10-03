
import './App.css';
//import Data from './data.json'
import { Routes, Route} from "react-router-dom";
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Location from './components/Location/Location'



function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home/>} >
          <Route path = "/location/:id" element={<Location/>} />
          </Route>
        <Route path="/services" element={<Services/>} />             
        </Routes>

    </div>
  );
}

export default App;
