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
      <h1 className="text-center">The Pomodoro Clock - React</h1>
      <p className="text-center">For the Angular version of this project, see <a href="https://the-angular-pomodoro-clock.nicomv.com/" target="_blank" rel="noopener noreferrer">The Angular Pomodoro Clock</a>.</p>
      <Clock />
      <About />
    </div>
  );
}

export default App;
