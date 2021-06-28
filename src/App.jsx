import React, { useState } from 'react';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import NewTaskForm from './components/NewTaskForm';
import { STATUS_ACTIVE, STATUS_COMPLETED, STATUS_EDITING } from './constant';

const App = () => {
  let idMax = 7;
  const [todoData, setTodoData] = useState([
    { id: 1, status: STATUS_COMPLETED, text: 'Learn React', timerFlag: false },
    { id: 2, status: STATUS_COMPLETED, text: 'Drink Coffee', timerFlag: false },
    { id: 3, status: STATUS_ACTIVE, text: 'Drink more coffee', timerFlag: false },
  ]);
  const [filter, setFilter] = useState('All');
  const [editingTaskStatus, setEditingTaskStatus] = useState(null);

  const onEditTask = (id) => {
    const index = todoData.findIndex((el) => el.id === id);
    const newData = [...todoData];
    const { status } = newData[index];

    if (newData.findIndex((el) => el.status === STATUS_EDITING) !== -1) {
      newData[newData.findIndex((el) => el.status === STATUS_EDITING)].status = editingTaskStatus;
    }
    newData[index].status = STATUS_EDITING;

    setTodoData(newData);
    setEditingTaskStatus(status);
  };
  const onFilterChange = (filtr) => {
    setFilter(filtr);
  };
  const onClearCompleted = () => {
    const newData = todoData.filter((item) => item.status !== STATUS_COMPLETED);
    setTodoData(newData);
  };
  const onAddTask = (text, min, sec, timerFlag) => {
    const newTask = { id: (idMax += 1), status: STATUS_ACTIVE, text, min, sec, timerFlag };
    const newData = [...todoData, newTask];
    setTodoData(newData);
  };
  const onDeleteTask = (id) => {
    const index = todoData.findIndex((el) => el.id === id);
    const newData = [...todoData.slice(0, index), ...todoData.slice(index + 1)];
    setTodoData(newData);
  };
  const onComplete = (id) => {
    const index = todoData.findIndex((el) => el.id === id);
    const newData = [...todoData];
    newData[index].status = newData[index].status === STATUS_COMPLETED ? STATUS_ACTIVE : STATUS_COMPLETED;
    setTodoData(newData);
  };
  const onEditTaskText = (id, text) => {
    const index = todoData.findIndex((el) => el.id === id);
    const newData = [...todoData];
    newData[index].text = text;
    setTodoData(newData);
  };
  const onEditTaskTextSubmit = (id) => {
    const index = todoData.findIndex((el) => el.id === id);
    const newData = [...todoData];
    newData[index].status = editingTaskStatus;
    setTodoData(newData);
  };

  const activeCount = todoData.reduce((acc, elem) => (elem.status === STATUS_ACTIVE ? acc + 1 : acc), 0);

  return (
    <section className="todoapp">
      <NewTaskForm onAddTask={onAddTask} />
      <section className="main">
        <TaskList
          todoData={todoData}
          onDeleteTask={onDeleteTask}
          onComplete={onComplete}
          filter={filter}
          onEditTask={onEditTask}
          onEditTaskText={onEditTaskText}
          onEditTaskTextSubmit={onEditTaskTextSubmit}
        />
        <Footer
          filter={filter}
          activeCount={activeCount}
          onClearCompleted={onClearCompleted}
          onFilterChange={onFilterChange}
        />
      </section>
    </section>
  );
};

export default App;
