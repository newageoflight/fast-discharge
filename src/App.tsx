import React, { useState } from 'react';
import Modal from "react-modal";
import "./css/App.css"
import logo from "./running.svg"

import { RichTextEditor } from './components/RichTextEditor';
import { InlineIcon } from '@iconify/react-with-api';
// fastDischarge should also be able to expose API endpoints where it receives parameters for certain values in a template

function App() {
  const [modalOpen, setModalOpen] = useState(false);

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
        <div className="oneline">
          <p>&copy; <a href="https://github.com/newageoflight">Christopher Chen</a> 2021-</p>
          <button onClick={() => setModalOpen(true)}>
            <InlineIcon icon="bx:bx-help-circle" />
          </button>
        </div>
      </footer>
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} contentLabel="About FastDischarge">
        <div className="modal-header">
          <h2>About FastDischarge</h2>
          <button onClick={() => setModalOpen(false)}><InlineIcon icon="eva:close-fill" /></button>
        </div>
        <p>FastDischarge aims to be an open-source medical documentation platform that is truly <em>fast</em>.</p>
        <p>
          With FastDischarge, you can easily create template fields and prepopulate them with commonly used values - just type in <kbd>{"{{"}</kbd> or press the <InlineIcon icon="uil:brackets-curly" /> button on the toolbar, and set some options.
          FastDischarge lets you write your progress notes and discharge letters faster, so you can get back to being a doctor.
        </p>
        <p>
          If you have experience working with Slate.js, React.js or Typescript, please consider contributing to this project on <a href="https://github.com/newageoflight/fast-discharge">Github</a>.
        </p>
        <p>Developed by <a href="mailto:camint3rnal@live.com">Christopher Chen</a> (JMO/Intern)</p>
      </Modal>
    </div>
  );
}

export default App;
