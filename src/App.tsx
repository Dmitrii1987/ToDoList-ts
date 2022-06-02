import React from 'react';
import './App.css';
import ToDoList, { TaskType } from './ToDoList';

function App() {
    //BLL(business logic layer)

    const tasks: Array<TaskType> = [
        {id: 1, title: "Sleep", isDone: true},
        {id: 2, title: "Run", isDone: true},
        {id: 3, title: "Eat", isDone: false},
    ]

    const removeTask = (taskID: number) => {
        tasks.filter(t => t.id !== taskID)
        console.log(tasks)
    }
    
    //UI(user interface):
    return (
        <div className="App"> {/* ToDoList({title: "What to do"}) это то, что под капотом*/}
            <ToDoList
            title={"What to do"}
            tasks={tasks}
            removeTask = {removeTask}
            />  
        </div>
    );
}

export default App;
