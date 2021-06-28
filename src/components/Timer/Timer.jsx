import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Timer = (props) => {
  let { min, sec } = props;

  if (sec >= 60) {
    min = Number(min);
    const minutes = (sec / 60).toFixed(0);
    const seconds = sec % 60;
    min += Number(minutes);
    sec = seconds;
  }

  const [minutes, setMinutes] = useState(Number(min));
  const [seconds, setSeconds] = useState(Number(sec));
  const [intervalId, setIntervalId] = useState('');

  /* eslint-disable no-param-reassign */
  const startTimer = (mins, secs) => {
    if (!intervalId) {
      const timer = setInterval(() => {
        if (secs === 0 && mins === 0) {
          clearInterval(timer);
          setIntervalId('');
        }
        if (secs === 0) {
          if (mins === 0) {
            clearInterval(intervalId);
            return;
          }
          mins -= 1;
          secs = 60;
          setSeconds(60);
          setMinutes(mins);
        }
        secs -= 1;
        setSeconds(secs);
      }, 1000);
      setIntervalId(timer);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => clearInterval(intervalId), []);

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId('');
  };

  return (
    <span className="description">
      <button
        onClick={() => startTimer(minutes, seconds)}
        aria-label="button"
        type="button"
        className="icon icon-play"
      />
      <button onClick={stopTimer} aria-label="button" type="button" className="icon icon-pause" />
      {String(minutes).length === 1 ? `0${minutes}` : minutes}:{String(seconds).length === 2 ? seconds : `0${seconds}`}
    </span>
  );
};

Timer.propTypes = {
  min: PropTypes.string,
  sec: PropTypes.string,
};

Timer.defaultProps = {
  min: 0,
  sec: 0,
};

export default Timer;
