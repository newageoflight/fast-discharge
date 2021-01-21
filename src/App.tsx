import React from 'react';
import "./css/App.css"
import logo from "./running.png"

import { RichTextEditor } from './components/RichTextEditor';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <img src={logo} alt="Running man" style={{height: "1em", display: "inline-block", transform: "translateY(3px)"}} />
          FastDischarge
        </h1>
      </header>
      <div className="container">
        <RichTextEditor />
      </div>
    </div>
  );
}

export default App;
