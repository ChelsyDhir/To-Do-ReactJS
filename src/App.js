import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesome } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {

  const [toDo, setToDo] = useState('');
  //toDo will contain the temporary data that will be added to the list
  
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');
  //updateData will hold task that is being added 
  
  //Add a task
  const addTask = () => {

  }

  //Delete a Task
  const deleteTask = (id) =>{

  }

  //Mark task as done or completed
  const markDone = (id) => {

  }

  //cancel update
  const cancelUpdate = ()=> {

  }

  //change task for update
  const changeTask = () => {
    
  }

   //update task for update
   const updateTask = () => {
    
   }



  return (
    <div className="container App">
      <h2>To Do List App (ReactJS)</h2>
    </div>
  );
}

export default App;
