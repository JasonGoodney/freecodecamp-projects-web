import React, { useState } from 'react';
import { useToggle } from './hooks'
import './App.css';
import DrumPad from './components/DrumPad'
import { bank, bank2 } from './bank'
import ToggleSwitch from './components/ToggleSwitch';


function App() {
  const [isPowerOn, toggleIsPowerOn] = useToggle(true);
  const [selectedBank, setSelectedBank] = useState(bank)
  const [display, setDisplay] = useState('')

  const handleKeyDown = (event, pad) => {
    event.preventDefault()

    setDisplay(pad.name)
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="pads">
          <div>
            {[0, 1, 2].map(i => (
              <DrumPad key={i} pad={selectedBank.pads[i]} eventHandler={handleKeyDown} disabled={!isPowerOn} />
            ))}
          </div>
          <div>
            {[3, 4, 5].map(i => (
              <DrumPad key={i} pad={selectedBank.pads[i]} eventHandler={handleKeyDown} disabled={!isPowerOn} />
            ))}
          </div>
          <div>
            {[6, 7, 8].map(i => (
              <DrumPad key={i} pad={selectedBank.pads[i]} eventHandler={handleKeyDown} disabled={!isPowerOn} />
            ))}
          </div>
        </div>
        <div className="controls">
          <div id="power-control" onClick={toggleIsPowerOn}>
            <p className="title">Power</p>
            <ToggleSwitch isOn={isPowerOn} />
          </div>
          <div id="display">
            <p className="title">{isPowerOn ? display : ''}&nbsp;</p>
          </div>
          <div id="bank-control">
            <p className="title">Banks</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {[bank, bank2].map(b => (
                <div key={b.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ backgroundColor: selectedBank !== b || !isPowerOn ? 'black' : 'green', width: '5px', height: '5px', boxShadow: selectedBank === b ? '2px 2px 2px rgba(0,255,0,0.3)' : 'none' }}></div>
                  <button
                    key={b.name}
                    className="btn"
                    onClick={() => setSelectedBank(b)}
                  >
                    {b.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


