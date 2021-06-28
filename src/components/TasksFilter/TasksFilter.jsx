import React from 'react';
import PropTypes from 'prop-types';

import './TasksFilter.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class TasksFilter extends React.Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
  };

  render() {
    const { onFilterChange, filter } = this.props;

    return (
      <ul className="filters">
        <li>
          <button className={filter === 'All' ? 'selected' : null} type="button" onClick={() => onFilterChange('All')}>
            All
          </button>
        </li>
        <li>
          <button
            className={filter === 'Active' ? 'selected' : null}
            type="button"
            onClick={() => onFilterChange('Active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={filter === 'Completed' ? 'selected' : null}
            type="button"
            onClick={() => onFilterChange('Completed')}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
