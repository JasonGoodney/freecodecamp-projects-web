import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0')
  return (
    <div className="App">
      <div className="Calc-container">
        <div style={{ color: "white" }}>{input}</div>
        <div>
          <button value="ac" className="jumbo" id="clear">ac</button>
          <button value="/" id="divide">/</button>
          <button value="*" id="multiply">*</button>
        </div>
        <div>
          <button value="7" id="seven">7</button>
          <button value="8" id="eight">8</button>
          <button value="9" id="nine">9</button>
          <button value="-" id="subtract">-</button>
        </div>
        <div>
          <button value="4" id="four">4</button>
          <button value="5" id="five">5</button>
          <button value="6" id="six">6</button>
          <button value="+" id="add">+</button>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <div>
              <button value="1" id="one">1</button>
              <button value="2" id="two">2</button>
            </div>
            <div>
              <button value="0" className="jumbo" id="zero">0</button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button value="3" id="three">3</button>
            <button value="." id="decimal">.</button>
          </div>
          <div>
            <button value="=" id="equals">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
