import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';

const TaskList = ({ todoData, onDeleteTask, onComplete, filter, onEditTask, onEditTaskText, onEditTaskTextSubmit }) => {
  const tasks = todoData.map((elem) => {
    if (filter === 'All' || elem.status === filter.toLowerCase()) {
      return (
        <Task
          id={elem.id}
          key={elem.id}
          taskOptions={elem}
          onDeleteTask={() => onDeleteTask(elem.id)}
          onComplete={() => onComplete(elem.id)}
          onEditTask={() => onEditTask(elem.id)}
          onEditTaskText={onEditTaskText}
          onEditTaskTextSubmit={() => onEditTaskTextSubmit(elem.id)}
        />
      );
    }
    return null;
  });
  return <ul className="todo-list">{tasks}</ul>;
};

TaskList.propTypes = {
  todoData: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  filter: PropTypes.string,
  onEditTask: PropTypes.func.isRequired,
  onEditTaskText: PropTypes.func.isRequired,
  onEditTaskTextSubmit: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  filter: 'All',
};

export default TaskList;
