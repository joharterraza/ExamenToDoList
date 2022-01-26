import React, { useState } from 'react';
import ListForm from './ListForm';
import Tasks from './Tasks';

function List() {
    //state
    const [tasks, setTasks] = useState([]);
    //add task
    const addTask = task => {
        //do nothing if empty value
        if(!task.text){
            return;
        }
        //set tasks 
        const newTasks = [task, ...tasks];
        setTasks(newTasks);        
    }

    //remove task
    const removeTask = id => {
        const newArr = [...tasks].filter(task => task.id !== id);
        setTasks(newArr);
    }

    //update task
    const updateTask = (taskId, newVal) => {
        //do nothing if empty value
        if(!newVal.text){
            return;
        }
        setTasks(arrayPrev => arrayPrev.map(task => (task.id === taskId ? newVal : task)));
    }

    return (
        <div className='listDiv'>
            <ListForm onSubmit = {addTask}/>
            <Tasks
                tasks={tasks}
                removeTask={removeTask}
                updateTask= {updateTask}                
            />  
        </div>
    );
}

export default List;
