import React from 'react';
import logo from './logo.svg';
import './App.css';

// handleSubmit= (e) =>{
//   alert(JSON.stringify(this.state, null, '  '));
// }

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Px To Em</h1>
        <div className="Convert"> 
          <label>
            <input type="number" name="nroPx" placeholder="Indroduce PX" />
          </label>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick=""> Calculate </button>
        </div>

        {/* <div className="Result"> px: {props.px} </div> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
