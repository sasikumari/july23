import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1> HHIII </h1>
       
    </div>
  );
}

export default App;
import { useState } from "react";
import axios from "axios";



function App() {

  const [data, setstate] = useState("");
 
  const handleClick = async (e) => {

    const response = await axios.get("http://localhost:4000/api/getdata")
    setstate(response.data)
  }
  return (
    <div>
       <button onClick={this.handleClick}>Increment</button>
  </div>
  );
}

export default App;
