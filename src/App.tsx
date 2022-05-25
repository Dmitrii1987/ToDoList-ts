import React from 'react';
import './App.css';
import ToDoList, { TaskType } from './ToDoList';

function App() {
    //BLL: 

    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/TS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
    const tasks_2: Array<TaskType> = [
        {id: 4, title: "HTML&CSS", isDone: true},
        {id: 5, title: "JS/TS", isDone: true},
        {id: 6, title: "React", isDone: false},
    ]
    const tasks_3: Array<TaskType> = [
        {id: 7, title: "HTML&CSS", isDone: true},
        {id: 8, title: "JS/TS", isDone: true},
        {id: 9, title: "React", isDone: false},
    ]
    const tasks_4: Array<TaskType> = [
        {id: 10, title: "HTML&CSS", isDone: true},
        {id: 11, title: "JS/TS", isDone: true},
        {id: 12, title: "React", isDone: false},
    ]

    //UI:
    return (
        <div className="App">
            <ToDoList 
            title={"What to do"}
            tasks={tasks_1}/>  {/* ToDoList({title: "What to do"}) это то, что под капотом*/}
            <ToDoList
             title={"What to learn"}
             tasks={tasks_2}/>
            <ToDoList
             title={"What to buy"}
             tasks={tasks_3}/>
            <ToDoList 
            title={"What to read"}
            tasks={tasks_4}/> 
        </div>
    );
}

export default App;
