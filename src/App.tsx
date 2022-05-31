import React from 'react';
import './App.css';
import ToDoList, { TaskType } from './ToDoList';

function App() {
    //BLL(business logic layer)

    const tasks_1: Array<TaskType> = [
        {id: 1, title: "Sleep", isDone: true},
        {id: 2, title: "Run", isDone: true},
        {id: 3, title: "Eat", isDone: false},
    ]
    const tasks_2: Array<TaskType> = [
        {id: 4, title: "HTML&CSS", isDone: true},
        {id: 5, title: "JS/TS", isDone: true},
        {id: 6, title: "React", isDone: false},
    ]
    const tasks_3: Array<TaskType> = [
        {id: 7, title: "Car", isDone: true},
        {id: 8, title: "House", isDone: true},
        {id: 9, title: "Airplane", isDone: false},
    ]
    const tasks_4: Array<TaskType> = [
        {id: 10, title: "Grokking algorithms", isDone: true},
        {id: 11, title: "Sherlock Holmes", isDone: true},
        {id: 12, title: "1984", isDone: false},
    ]

    //UI(user interface):
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
