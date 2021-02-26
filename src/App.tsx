import React, { useState } from 'react';
import { InlineIcon } from '@iconify/react-with-api';
import Modal from "react-modal";

import { TextEditor } from "./components/TextEditor"
import { EditorContainer } from "./components/EditorContainer"
import { HelpModalContent } from './components/HelpModalContent';
import { OneLine } from './components/OneLine';
import { FancyButton } from './components/FancyButton';

import "./css/App.css"

Modal.setAppElement("#root")

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>FastDischarge</h1>
      </header>
      <EditorContainer>
        <TextEditor />
      </EditorContainer>
      <footer>
        <OneLine>
          <p>&copy; <a href="https://github.com/newageoflight">Christopher Chen</a> 2021-</p>
          <FancyButton onClick={() => setModalOpen(true)}>
            <InlineIcon icon="bx:bx-help-circle" />
          </FancyButton>
        </OneLine>
      </footer>
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} contentLabel="About FastDischarge">
        <OneLine>
          <h2 style={{display: "inline-block", margin: 0}}>About FastDischarge</h2>
          <FancyButton onClick={() => setModalOpen(false)}><InlineIcon icon="eva:close-fill" /></FancyButton>
        </OneLine>
        <HelpModalContent />
      </Modal>
    </div>
  );
}

export default App;
