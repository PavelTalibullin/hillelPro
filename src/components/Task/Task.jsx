import React from "react";
import styles from "./Task.module.scss";

const Task = (props) => {
  const { task, deleteTask } = props;

  const callbackDelete = () => {
    deleteTask(task.id);
  };


  return (
    <div className={styles.Task}>
      <h3 className={styles.Title}>{task.name}</h3>
      <button onClick={callbackDelete}>Delete</button>
    </div>
  );
};

export default Task;
