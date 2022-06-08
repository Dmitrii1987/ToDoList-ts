import React, { useState } from 'react';
import { FilterValuesType } from './App';
// rsc нужно напечатать и появится весь код

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType>
    addTask: (title: string) => void
    removeTask: (taskID: string) => void
    changeToDoListFilter: (filter: FilterValuesType) => void;
}
const ToDoList = (props: ToDoListPropsType) => {
    const [title, setTitle] = useState<string>("")
    const tasksJSX = props.tasks.map(t => {
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone} />
                <span>{t.title}</span>
                <button onClick={() => props.removeTask(t.id)}>x</button>
            </li>
        )
    })

    //const OnClickHandler = () => props.changeToDoListFilter("all")
    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    onKeyDown= {(e) => {e.key==="Enter" && addTask()}}
                    //e.current target-> input
                    />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <button onClick={() => props.changeToDoListFilter("all")}>All</button>
                <button onClick={() => props.changeToDoListFilter("active")}>Active</button>
                <button onClick={() => props.changeToDoListFilter("completed")}>Completed</button>
            </div>
        </div>
    );
};

export default ToDoList;