import React from 'react';
import { FilterValuesType } from './App';
// rsc нужно напечатать и появится весь код

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}


type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeToDoListFilter: (filter: FilterValuesType) => void;
}
const ToDoList = (props: ToDoListPropsType) => {
    const tasksJSX = props.tasks.map(t => {
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={ () => props.removeTask(t.id)}>x</button>
            </li>
        )
    })
    return (
        <div>
            <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {tasksJSX}
                </ul>
                <div>
                    <button onClick={ () => props.changeToDoListFilter("all")}>All</button>
                    <button onClick={ () => props.changeToDoListFilter("active")}>Active</button>
                    <button onClick={ () => props.changeToDoListFilter("completed")}>Completed</button>
                </div>
            </div>
    );
};

export default ToDoList;