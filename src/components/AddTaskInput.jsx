import React, { useState } from "react";
import { Input, Button } from "antd";

const AddTaskInput = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");
  const addNewTask = () => {
    inputValue &&
      setTodos([
        ...todos,
        {
          id: Math.max(...todos.map((item) => item.id)) + 1,
          title: inputValue,
          isDone: false,
        },
      ]);
    setInputValue("");
  };
  return (
    <>
      <Input
        className="addtaskform"
        size="large"
        placeholder="Add New Task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onPressEnter={addNewTask}
      />
      <Button
        type="primary"
        size="large"
        className="addtaskbutton"
        onClick={addNewTask}
      >
        Add Task
      </Button>
    </>
  );
};

export default AddTaskInput;

