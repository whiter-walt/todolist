import AddTaskInput from "./components/AddTaskInput";
import TodoList from "./components/TodoList";
import { Space } from "antd";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Create First React App", isDone: true },
    { id: 2, title: "Create Second React App", isDone: false },
    { id: 3, title: "Create Third React App", isDone: false },
  ]);
  const activeTasks = todos.filter((i) => !i.isDone);
  return (
    <div className="app">
      <h1>Todo List</h1>
      <Space direction="vertical" className="container">
        <h2>Tasks to do: {activeTasks.length}</h2>
        <AddTaskInput todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Space>
    </div>
  );
}

export default App;
