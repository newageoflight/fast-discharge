import React from 'react';
import "./css/App.css"
import logo from "./running.svg"

import { RichTextEditor } from './components/RichTextEditor';
// fastDischarge should also be able to expose API endpoints where it receives parameters for certain values in a template

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <img src={logo} alt="Running man" style={{height: "1em", display: "inline-block", transform: "translateY(6px)"}} />
          FastDischarge
        </h1>
      </header>
      <div className="editor-container">
        <RichTextEditor />
      </div>
      <footer>
        <p>&copy; Christopher Chen 2021-</p>
        <p className="disclaimer">All data is stored locally - <em>FastDischarge does not use any central servers</em> and is therefore compliant with NSW Health's Information Security standards! (look at the code if you don't believe me)</p>
      </footer>
    </div>
  );
}

export default App;
