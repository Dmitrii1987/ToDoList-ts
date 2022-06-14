import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from './App';
// rsc нужно напечатать и появится весь код

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


type ToDoListPropsType = {
    title: string
    tasks: TaskType[]
    filter: FilterValuesType
    addTask: (title: string) => void
    removeTask: (taskID: string) => void
    changeToDoListFilter: (filter: FilterValuesType) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}
const ToDoList = (props: ToDoListPropsType) => {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)
    const tasksJSX = props.tasks.map(t => {
        const removeTask = () => props.removeTask(t.id)
        const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked)
        return (
            <li key={t.id}>
                <input
                    onChange={changeTaskStatus}
                    type="checkbox"
                    checked={t.isDone}
                />
                {/* here we add style to tasks that are done(line-through) and opacity 0.5 */}
                <span className={t.isDone ? "isDone" : ""}>{t.title}</span>
                <button onClick={removeTask}>x</button>
            </li>
        )
    })

    const getOnClickHandler = (filter: FilterValuesType) => {
        return () => props.changeToDoListFilter(filter)
    }

    // const onClickHandler = () => props.changeToDoListFilter("all")
    const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }

    const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTask()
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        error && setError(false)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetTitle}
                    onKeyDown={onKeyDownAddTask}
                    className = {error ? "error" : ""}
                />
                <button onClick={addTask}>+</button>
                {/* этот приём называется условный рендеринг */}
                {error && <div style={{color: "red"}}>Title is requared!</div>}
            </div>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <button className={props.filter === "all" ? "active" : ""}
                    onClick={getOnClickHandler("all")}>All</button>
                <button className={props.filter === "active" ? "active" : ""}
                    onClick={getOnClickHandler("active")}>Active</button>
                <button className={props.filter === "completed" ? "active" : ""}
                    onClick={getOnClickHandler("completed")}>Completed</button>
            </div>
        </div>
    );
};

export default ToDoList;