import React, { useState } from 'react';
import './App.css';
import ToDoList, { TaskType } from './ToDoList';

function App() {
    //BLL(business logic layer):
    // тут выполнена деструктуризация(почитать про это)
    const [tasks, setTasks] = useState<Array<TaskType>>([
                        {id: 1, title: "Sleep", isDone: true},
                        {id: 2, title: "Run", isDone: true},
                        {id: 3, title: "Eat", isDone: false},
                            ]);


    const removeTask = (taskID: number) => {
        const filteredTasks = tasks.filter(t => t.id !== taskID)
        setTasks(filteredTasks);
    }
    
    //UI(user interface):
    return (
        <div className="App"> 
            <ToDoList
            title={"What to do"}
            tasks={tasks}
            removeTask = {removeTask}
            />  
        </div>
    );
}

export default App;
