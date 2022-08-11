import { useState } from "react";
import { List, Checkbox, Input } from "antd";
import { EditFilled, DeleteFilled, SaveFilled } from "@ant-design/icons";

const TodoTask = ({ task, todos, setTodos }) => {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState("");

  let { id, title, isDone } = task;

  const changeTaskStatus = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !isDone } : item
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const editTask = () => {
    setEdit(true);
    setEditValue(title);
  };
  const saveTask = (id) => {
    editValue &&
      setTodos(
        todos.map((item) =>
          item.id === id ? { ...item, title: editValue } : item
        )
      );

    setEdit(false);
  };

  return (
    <List.Item>
      {!edit ? (
        <Checkbox
          checked={isDone}
          className={isDone && "task-item-checked"}
          onClick={() => changeTaskStatus(id)}
        >
          {title}
        </Checkbox>
      ) : (
        <Input
          addonAfter={
            <SaveFilled
              className="icon icon-save"
              onClick={() => saveTask(id)}
            />
          }
          defaultValue={title}
          onChange={(e) => setEditValue(e.target.value)}
        />
      )}
      <div className="task-btns">
        <DeleteFilled
          className="icon icon-delete"
          onClick={() => deleteTask(id)}
        />
        <EditFilled className="icon icon-edit" onClick={() => editTask()} />
      </div>
    </List.Item>
  );
};

export default TodoTask;
