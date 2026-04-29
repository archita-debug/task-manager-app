import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";


function App() {
  let [todolist,settodolist] = useState([]);

  let SaveToDoList = (event) => {

    event.preventDefault();
    let todoname = event.target.todoname.value;
    if(!todolist.includes(todoname) && todoname.trim() !== "") {
      let newtodolist = [...todolist, todoname];
      settodolist(newtodolist);
    }
    else {
      alert("Task already exists or is empty");
    }
  }
  let list=todolist.map((value, index) => {

    return (
      
      <ToDoListItem listitem={value} key={index} indexNumber={index} 
      todolist={todolist} 
      settodolist={settodolist}
      />
    );
  }

);
  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <form onSubmit={SaveToDoList}>
        <input type="text" placeholder="Add a new task"  name='todoname'/>
        <button type="submit">Add Task</button>
      </form>
     <div className="outerdiv">
      <ul>
        {list}
      </ul>
     </div>
    </div>
  );
}

export default App;

function ToDoListItem({listitem, indexNumber, todolist, settodolist}) {

  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    let newdata = todolist.filter((value, index) => {
      return index !== indexNumber;
    });
    settodolist(newdata);
  }

  let checkStatus = () => {
    setStatus(!status);
  }

  return (
    <li className={(status)? 'completetodo': ''} onClick={checkStatus}>{indexNumber + 1}. {listitem}
      <span onClick={(e) => { e.stopPropagation(); deleteRow(); }}>
    <FaTrash /></span>
    </li>
  );
}