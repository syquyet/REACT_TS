import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./page/home";


function App() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() =>{
    fetch("http://localhost:3000/posts")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => {
      console.log("phan hoi", res);
      setData(res);
    });
  },[])
  
  return <div className="App">
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
    <Home/>
    
  </div>;
}

export default App;
