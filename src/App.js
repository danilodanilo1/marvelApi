import React, { useState } from 'react';

import Routes from './routes'



import { getHeroes } from './api';

function App() {

  getHeroes();


  return (
    <div className="App">
      <Routes />

    </div>
  );
}

export default App;
