import React, { useState } from "react";
import '../styles/App.css';
const App = () => {
const [state, setState] = useState({ value: "square" });
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setState({ value: event.target.value });
  };
  const handleSubmit = () => {
    setData([...data, { ...state }]);
  };
  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={handleChange}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={handleSubmit}>Add Shape</button>

      </div>
      <div id="shapes-holder">
        {data.map((element, idx) => {
          return (
            <>
              <p className={element.value}>{element.value , idx } </p>
            </>
          );
        })}
      </div>
    </div>
  )
}


export default App;
