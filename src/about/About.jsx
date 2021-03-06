import React from 'react';
import './About.css';

export class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h2>About</h2>
        <p>
          This app was designed and developed by{' '}
          <a href="https://nicomv.com/" title="Author Home page">
            NicoMV
          </a>{' '}
          (
          <a href="https://www.freecodecamp.org/skaparate">
            My Free Code Camp's profile
          </a>
          ) for the{' '}
          <a href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-pomodoro-clock">
            Free Code Camp's Front End Libraries Projects
          </a>
          .
        </p>
        <p>
          The source code of this app can be found{' '}
          <a href="https://github.com/skaparate/fcc-pomodoro-clock-react">
            clicking here
          </a>.
        </p>
        <h3>Thanks</h3>
        <ul>
          <li>
            <a href="http://soundbible.com/2197-Analog-Watch-Alarm.html">
              Analog Watch Alarm
            </a>
            , the sound used for the alarm (
            <a href="https://creativecommons.org/licenses/by/3.0/">
              click here to see the license
            </a>
            ).
          </li>
          <li>
            <a href="https://www.1001fonts.com/digital-7-font.html">
              Digital 7
            </a>
            , the font used for the display.
          </li>
          <li>
            <a href="https://freecodecamp.org/">Free Code Camp</a>, for helping
            people on their developer careers.
          </li>
        </ul>
      </div>
    );
  }
}
