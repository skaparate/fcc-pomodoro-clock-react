import accurateInterval from 'accurate-interval';
import React from 'react';
import './Clock.css';

import { BreakControls } from './BreakControls';
import { SessionControls } from './SessionControls';
import { ClockControls } from './ClockControls';
import { ClockDisplay } from './ClockDisplay';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 0,
      sessionLength: 0,
      isSession: true,
      isClear: false,
      minutes: 0,
      seconds: 0,
      displayClasses: '',
    };

    this.onBreakDecrease = this.onBreakDecrease.bind(this);
    this.onBreakIncrease = this.onBreakIncrease.bind(this);
    this.onSessionDecrease = this.onSessionDecrease.bind(this);
    this.onSessionIncrease = this.onSessionIncrease.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onStartClick = this.onStartClick.bind(this);
  }

  componentDidMount() {
    this.reset();
  }

  reset() {
    const audio = this.audio;
    audio.pause();
    audio.currentTime = 0;
    const intervalHandle = this.state.intervalHandle;

    if (intervalHandle) {
      intervalHandle.clear();
    }
    this.setState({
      seconds: 0,
      minutes: 25,
      sessionLength: 25,
      breakLength: 5,
      isRunnning: false,
      isSession: true,
      isClear: true,
      intervalHandle,
      displayClasses: '',
    });
  }

  updateMinutes(value) {
    if (this.state.isClear) {
      return value;
    }
    return this.state.minutes;
  }

  onBreakIncrease() {
    if (this.state.isRunnning) {
      return;
    }
    if (this.state.breakLength < 60) {
      const breakLength = this.state.breakLength + 1;
      this.setState({
        breakLength,
      });
    }
  }

  onBreakDecrease() {
    if (this.state.isRunnning) {
      return;
    }
    if (this.state.breakLength > 1) {
      const breakLength = this.state.breakLength - 1;
      this.setState({
        breakLength,
      });
    }
  }

  onSessionIncrease() {
    if (this.state.isRunnning) {
      return;
    }
    if (this.state.sessionLength < 60) {
      const sessionLength = this.state.sessionLength + 1;
      this.setState({
        minutes: this.updateMinutes(sessionLength),
        sessionLength,
      });
    }
  }

  onSessionDecrease() {
    if (this.state.isRunnning) {
      return;
    }
    if (this.state.sessionLength > 1) {
      const sessionLength = this.state.sessionLength - 1;
      this.setState({
        minutes: this.updateMinutes(sessionLength),
        sessionLength,
      });
    }
  }

  onStartClick() {
    const running = !this.state.isRunnning;
    const isClear = false;
    let intervalHandle = this.state.intervalHandle;

    if (running) {
      console.debug('Starting');
      intervalHandle = accurateInterval(this.nextTick.bind(this), 1000);
    } else {
      console.debug('Pausing');
      intervalHandle.clear();
    }
    this.setState({
      isRunnning: running,
      isClear,
      intervalHandle,
    });
  }

  onReset() {
    this.reset();
  }

  playSound() {
    const el = this.audio;
    el.currentTime = 0;
    el.play();
  }

  stopSound() {
    const el = this.audio;
    el.pause();
  }

  nextTick() {
    let { seconds, minutes, isSession, displayClasses } = this.state;
    seconds = seconds - 1;

    if (minutes > 0 && seconds <= 0) {
      seconds = 59;
      minutes = this.state.minutes - 1;
    }

    if (minutes < 1) {
      displayClasses = 'text-danger';
    }

    if (minutes === 0 && seconds === 0) {
      console.debug('--- Finished ---');
      let { intervalHandle } = this.state;
      intervalHandle.clear();
      this.playSound();
      this.setState({
        minutes,
        seconds,
        isSession,
        intervalHandle,
      });
      const tmpHandle = accurateInterval(() => {
        isSession = !isSession;
        if (!isSession) {
          minutes = this.state.breakLength;
        } else {
          minutes = this.state.sessionLength;
        }
        intervalHandle = accurateInterval(this.nextTick.bind(this), 1000);
        this.setState({
          minutes,
          seconds,
          isSession,
          intervalHandle,
        });
        tmpHandle.clear();
      }, 1000);
    } else {
      this.setState({
        minutes,
        seconds,
        isSession,
        displayClasses,
      });
    }
  }

  formatValue(value) {
    return value.toString().padStart(2, '0');
  }

  get display() {
    return `${this.formatValue(this.state.minutes)}:${this.formatValue(
      this.state.seconds
    )}`;
  }

  get audio() {
    return this._audio;
  }

  set audio(audio) {
    this._audio = audio;
  }

  render() {
    return (
      <div className="pomodoro-clock clearfix">
        <BreakControls
          onBreakDecrease={this.onBreakDecrease}
          onBreakIncrease={this.onBreakIncrease}
          breakLength={this.state.breakLength}
          className="float-left"
        />

        <div className="clock float-left">
          <ClockDisplay
            displayClasses={this.state.displayClasses}
            isSession={this.state.isSession}
            display={this.display}
          />
          <ClockControls onStart={this.onStartClick} onReset={this.onReset} />
          <audio
            id="beep"
            src="analog-watch-alarm.mp3"
            ref={audio => (this.audio = audio)}
          ></audio>
        </div>
        {/* .clock */}
        <SessionControls
          onSessionDecrease={this.onSessionDecrease}
          onSessionIncrease={this.onSessionIncrease}
          sessionLength={this.state.sessionLength}
          className="float-left"
        ></SessionControls>
      </div>
    );
  }
}
