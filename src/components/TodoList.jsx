import {List} from 'antd'
import TodoTask from './TodoTask';
import React from 'react';

const TodoList = ({todos, setTodos}) => {
    return (
        <List
        size="large"
        bordered
        dataSource={todos}
        renderItem={(task) => <TodoTask key={todos.id} todos={todos} setTodos={setTodos} task={task}/>}
      />
    )
}

export default TodoList;