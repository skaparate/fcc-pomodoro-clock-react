import React from 'react';
import './assets/normalize.css';
import './App.css';
import { About } from './about/About';
import { Clock } from './clock/Clock';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function App() {
  return (
    <div className="App">
      <h1 class="text-center">The Pomodoro Clock</h1>
      <Clock />
      <About />
    </div>
  );
}

export default App;
