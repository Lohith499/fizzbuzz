import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [inp, setInp] = useState("");
  const [result, setResult] = useState([]);
  const updateInput = e => {
    setInp(e.target.value);
    setResult([]);
  }
  async function onSubmit(e) {
    e.preventDefault();
    console.log("Client")
    if (inp.length > 0) {
      try {
        let res = await axios.post("http://localhost:5000/calculate", { data: inp });
        if (res.status === 200) {
          console.log(res.data.result)
          setResult(res.data.result);
        } else {
          setResult(["Unable to calcualte due to error in Internal Servor"]);
        }
      } catch (e) {
        console.log(e)
        setResult([`Error :${e.message}`]);

      }
    } else {
      setResult(["Enter some Value input before you hit submit"]);
    }
  }

  return (
    
    <div className="App">
        <h4>Enter set of values with , seperated in below text box ex : 1, 3, 5 , , 15, A, 23</h4>
        <input type="text" value={inp} onChange={updateInput}></input><br />
        <button onClick={(e) => onSubmit(e)}>Submit</button>
      {result.length > 0 && <h4>Result</h4>}
      {result.map((item,index) =>
        <p key={index}>{item}</p>)}
      </div>
  );
}

export default App;
