
import './App.css';
//import Data from './data.json'
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Location from './components/Location/Location'



function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home/>} >
          <Route path = "/location/:id" element={<Location/>} />
          </Route>
        <Route path= "/About" element= {<About/>}/>             
        </Routes>

    </div>
  );
}

export default App;
