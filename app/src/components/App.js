import React from 'react';
import Editor from './Editor'
import Previewer from './Previewer';

import './styles/App.css';

function App() {
  return (
    <React.Fragment>
      <Editor />
      <Previewer />
    </React.Fragment>
  );
}

export default App;
