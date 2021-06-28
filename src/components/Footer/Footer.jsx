import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter';

const Footer = ({ activeCount, onClearCompleted, onFilterChange, filter }) => (
  <footer className="footer">
    <span className="todo-count">
      {activeCount} {activeCount === 1 ? 'item' : 'items'} left
    </span>
    <TasksFilter filter={filter} onFilterChange={onFilterChange} />
    <button type="button" className="clear-completed" onClick={onClearCompleted}>
      Clear completed
    </button>
  </footer>
);

Footer.defaultProps = {
  activeCount: 100,
  onClearCompleted: () => true,
  onFilterChange: () => true,
};

Footer.propTypes = {
  filter: PropTypes.string.isRequired,
  activeCount: PropTypes.number,
  onClearCompleted: PropTypes.func,
  onFilterChange: PropTypes.func,
};

export default Footer;
