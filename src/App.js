import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import { Route, Routes, useParams } from 'react-router-dom'
import React ,{useState,useEffect} from "react"
import Navbar from './components/Navbar';
import Beers from "./pages/Beers"
import axios from "axios"

function App() {
  const [beersList, setBeersList]=useState(1)
  
  async function getBeers(){
    try {
      const{data}=await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      setBeersList(data)
    
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(()=>{
    getBeers()
  },[])
  return (
    <div className="App">
      
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route
              path="/beers" 
              element={<Beers beersList={beersList}/>}/>
            </Routes>
    </div>
  );
}

export default App;
