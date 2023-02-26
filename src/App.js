import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {

  const toDoList = [
    {"id":1, "title": "Task1", "status":false}, 
    {"id":2, "title": "Task2", "status":false}
  ]

  const [toDo, setToDo] = useState(toDoList);
  //toDo is the previous list, the  will contain the temporary data that will be added to the list
  //setToDo is the new toDo list
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');
  //updateData will hold task that is being added 
  
  //Add a task
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1;
      let entry = { id: num, title: newTask, status: false}
      setToDo([...toDo, entry]);
      setNewTask('');// to clear the input box
    }
  }

  //Delete a Task
  const deleteTask = (id) =>{
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks);
    console.log(newTasks);
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

      {/* update task */}
      <div className='row'>
        <div className='col'>
          <input className='form-control form-control-lg'></input>
        </div>
        <div className='col-auto'>
          <button className='btn btn-lg btn-success mr-20'>Update</button>
          <button className='btn btn-lg btn-warning'>Cancel</button>
        </div>
      </div>
      <br/>
      {/* add Task */}
      <div className='row'>
        <div className='col'>
          <input 
          value={newTask}
          onChange={ (e) => setNewTask(e.target.value)}
          className='form-control form-control-lg'></input>
        </div>
        <div className='col-auto'>
          <button onClick={addTask} className='btn btn-lg btn-success mr-20'>Add Task</button>
        </div>
      </div>
      <br/>
      
      {toDo && toDo.length ? '' : 'No Tasks'}

      {toDo && toDo.map((task, index) => {
        return(
          <React.Fragment key={task.id}>
            <div className='taskBg'>
              <div className={task.status ? 'done' : ''}>
                <span className="taskText">{index + 1}</span>
                <span className="taskText">{task.title}</span>
                <div className='iconWrap'>
                <span title='Completed / Not Completed' onClick={()=>markDone(task.id)}></span>
                <span onClick={()=> updateTask(task.id) } title="Edit"><FontAwesomeIcon icon={faPen} /></span>
                <span onClick={()=> deleteTask(task.id) } title="Delete"><FontAwesomeIcon icon={faTrashCan} /></span>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      })}

    </div>
  );
}

export default App;
