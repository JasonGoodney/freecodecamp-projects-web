import React from 'react';
import './App.scss';
import EditorView from './components/EditorView';
import PreviewerView from './components/PreviewerView';

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <EditorView title="Editor" text="Mardown text" />
        <PreviewerView />
      </div>
      <footer style={{ textAlign: "center" }}>
        <p>by Jason Goodney</p>
      </footer>
    </div>
  );
}

export default App;
