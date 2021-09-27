import React from 'react';
import './App.scss';
import MainRoute from './shared/routes/main';

function App() {
  return (
    <div data-testid="App">
      <MainRoute />
    </div>
  );
}

export default App;
