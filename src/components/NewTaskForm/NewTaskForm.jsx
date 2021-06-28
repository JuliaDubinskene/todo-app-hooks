import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
const NewTaskForm = (props) => {
  const [label, setLabel] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const inputValidation = (value, onlyNum) => !onlyNum || !Number.isNaN(+value);

  const onLabelChange = (event, setter, onlyNum = false) => {
    const { value } = event.target;

    if (inputValidation(value, onlyNum)) {
      return setter(value);
    }
    return false;
  };
  const onLabelSubmit = (event) => {
    event.preventDefault();
    if (label.length === 0) {
      return;
    }
    const { onAddTask } = props;
    let timerFlag = false;

    if (min.length !== 0 || sec.length !== 0) {
      timerFlag = true;
    }

    onAddTask(label, min, sec, timerFlag);
    setLabel('');
    setMin('');
    setSec('');
  };
  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onLabelSubmit(event);
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onKeyPress={onKeyPress} className="new-todo-form">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={(event) => onLabelChange(event, setLabel)}
          value={label}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={(event) => onLabelChange(event, setMin, true)}
          value={min}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={(event) => onLabelChange(event, setSec, true)}
          value={sec}
        />
      </form>
    </header>
  );
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
