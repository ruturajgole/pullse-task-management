import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  CheckBox,
  CheckBoxOutlineBlank,
  DeleteForever,
  Edit,
  Save
} from '@mui/icons-material';

import { RootState, view, remove, Task, addOrUpdate } from 'store';
import Alert from "./alertModal";

const Tasks = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { tasks } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const [editingTask, setEditingTask] = useState<Task>({title: ""});
  const [isAlert, setIsAlert] = useState(false);

  const getTasks = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}`}
    };

    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/tasks/view`, {}, config);
    dispatch(view(response.data.tasks));
  }

  const editTask = (task: Task) => {
    if(editingTask?.id !== task.id){
      
    } else {
      setEditingTask(task);
    }
  }

  const saveTask = async () => {
    if(editingTask){
      const config = {
        headers: { Authorization: `Bearer: ${token}`}
      }

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/tasks/addOrUpdate`, {task: editingTask}, config);
      dispatch(addOrUpdate({
        ...editingTask, 
        id: editingTask.id || response.data.task.insertedId
      }));
      setEditingTask({title: ""});
    }
  }

  const deleteTask = async (id: string) => {
    const config = {
      headers: { Authorization: `Bearer: ${token}`}
    };

    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/tasks/delete`, {id}, config);
    dispatch(remove(response.data.id));
  }

  useEffect(() => {getTasks()}, [])

  return <div style={styles.container}>
    <div style={styles.title}><span>Tasks</span></div>
    <table style={styles.table}>
      <tbody>
      <tr style={styles.row}>
        <td style={styles.cell}>
          <input
            style={styles.input}
            value={editingTask.id ? "" : editingTask.title}
            onInput={(e) => editingTask.id ? setIsAlert(true) : editTask({...editingTask, title: e.currentTarget.value})}
            placeholder={"Type New Task"}
            type="text" />
        </td>
        {!!!editingTask.id && editingTask.title &&
        <>
        <td style={styles.cell}>
          {editingTask.isCompleted
            ? <CheckBox onClick={() => editTask({...editingTask, isCompleted: false})} style={styles.icon} fontSize={"large"}/>
            : <CheckBoxOutlineBlank onClick={() => editTask({...editingTask, isCompleted: true})} style={styles.icon} fontSize={"large"}/>
          }
        </td>
        <td style={styles.cell}>
            <Save onClick={() => saveTask()} style={styles.icon} fontSize={"large"}/>
            <DeleteForever style={styles.icon} fontSize={"large"} />
        </td></>}
      </tr>
      <hr />
      {tasks.map((task) => {
        const currentlyEditing = task.id === editingTask.id;

        return <React.Fragment key={task.id}>
          <tr style={styles.row}>
            <td style={styles.cell}>{currentlyEditing
              ? <input style={styles.input} autoFocus onInput={(e) => editTask({...editingTask, title: e.currentTarget.value})} type="text" value={editingTask.title} />
              : task.title}</td>
            <td style={styles.cell}>
              {
                (currentlyEditing ? editingTask : task).isCompleted
                ? <CheckBox onClick={() => currentlyEditing && editTask({...editingTask, isCompleted: false})} style={styles.icon} fontSize={"large"}/>
                : <CheckBoxOutlineBlank onClick={() => currentlyEditing && editTask({...editingTask, isCompleted: true})} style={styles.icon} fontSize={"large"} />
              }
            </td>
            <td style={styles.cell}>
              {currentlyEditing
              ? <Save style={styles.icon} onClick={() => saveTask()} fontSize={"large"} />
              : <Edit
                  onClick={() => {
                    if(editingTask.title && task.id !== editingTask.id) {setIsAlert(true);}
                    else {setEditingTask(task)}
                  }} style={styles.icon}
                  fontSize={"large"} />}
              <DeleteForever onClick={() => task.id && deleteTask(task.id)} style={styles.icon} fontSize={"large"} />
            </td>
          </tr>
          <hr />
        </React.Fragment>
      })}
      </tbody>
    </table>
    {isAlert &&
      <Alert 
        onYes={() => {setEditingTask(prev => ({ title: "" })); setIsAlert(prev => false)}}
        onNo={() => setIsAlert(false)} />}
  </div>;
}

const styles = {
  container: {
    margin: "5% 2%",
    border: "1px solid black",
    height: "60vh",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  title: {
    fontSize: "xxx-large",
    position: "sticky",
    top: "0",
    padding: "1%",
    backgroundColor: "white",
    width: "100%"
  },
  table: {
    width: "100%",
    padding: "1%"
  },
  row: {
    fontSize: "xx-large",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  icon: {
    cursor: "pointer"
  },
  input: {
    fontSize: "xx-large",
    border: "none",
    textAlign: "center"
  },
  cell: {
    display: "flex",
    width: "35%",
    justifyContent: "center"
  },
  cellTitle: {

  }
} as const;

export default Tasks;