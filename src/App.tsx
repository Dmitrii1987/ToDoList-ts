import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import ToDoList, { TaskType } from './ToDoList';

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    //BLL(business logic layer):
    // тут выполнена деструктуризация(почитать про это)
    const [tasks, setTasks] = useState<Array<TaskType>>([
        { id: v1(), title: "Sleep", isDone: true },
        { id: v1(), title: "Run", isDone: true },
        { id: v1(), title: "Eat", isDone: false },
    ]);


    const [filter, setFilter] = useState<FilterValuesType>("all");

    const removeTask = (taskID: string) => {
        const filteredTasks = tasks.filter(t => t.id !== taskID)
        setTasks(filteredTasks);
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }

    const changeTaskStatus = (taskID:string, isDone:boolean) => {
        setTasks(tasks.map(t => t.id === taskID ? {...t, isDone}:t))
    }

    const changeToDoListFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    let tasksForRender = tasks
    if (filter === "active") {
        tasksForRender = tasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        tasksForRender = tasks.filter(t => t.isDone === true)
    }

    //UI(user interface):
    return (
        <div className="App">
            <ToDoList
                title={"What to do"}
                tasks={tasksForRender}
                addTask={addTask}
                filter={filter}
                removeTask={removeTask}
                changeToDoListFilter={changeToDoListFilter}
                changeTaskStatus = {changeTaskStatus}
            />
        </div>
    );
}

export default App;
