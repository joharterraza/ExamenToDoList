import React, { useState } from 'react';
import ListForm from './ListForm';

function Tasks({tasks, removeTask, updateTask}) {
  //state
  const [update, setUpdate] = useState({
    id: null,
    value : ""
  })

  //submit update
  const updateSubmit = value => {
    updateTask(update.id, value);
    setUpdate({
      id: null,
      value: ""
    })
  }

  //if edit return form edit
  if(update.id){
    return <ListForm edit={update} onSubmit={updateSubmit}></ListForm>
  }
  //return each task if not send a message
  if(tasks.length == 0) {
    return (
      <div className='messageNoTask'>
        <div className='tasksDiv'>
          No has agregado tareas
        </div>
      </div>
    )
  }
  else{
    return tasks.map((task, index) => (
      <div          
        key={index}
        className='tasksDiv'
      >
        <div key={task.id} className='inputForm'>
          <li className='taskText'>{task.text}</li>            
        </div>
        <div className='iconDiv'>
          <img src={require('./assets/icon-pen.svg').default} onClick={() =>setUpdate({id: task.id, value: task.text})} className='icons'/>
          <img src={require('./assets/icon-trash.svg').default} onClick={() =>removeTask(task.id)} className='icons'/>       
        </div>    
      </div>
    ));
  }
   
}

export default Tasks;
