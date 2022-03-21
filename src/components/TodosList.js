import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todos,
    handleChangeProps,
    setUpdate,
    deleteTodoProps,
  } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  setUpdate: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf.isRequired,
};

export default TodosList;
