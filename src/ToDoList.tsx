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
    tasks: Array<TaskType>
    addTask: (title: string) => void
    removeTask: (taskID: string) => void
    changeToDoListFilter: (filter: FilterValuesType) => void
    changeTaskStatus:(taskID:string, isDone:boolean) => void
}
const ToDoList = (props: ToDoListPropsType) => {
    const [title, setTitle] = useState<string>("")
    const tasksJSX = props.tasks.map(t => {
        const removeTask = () => props.removeTask(t.id)
        return (
            <li key={t.id}>
                <input
                onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked)}
                type="checkbox"
                checked={t.isDone}
                />
                <span>{t.title}</span>
                <button onClick={removeTask}>x</button>
            </li>
        )
    })

    const getOnClickHandler = (filter: FilterValuesType) => {
        return () => props.changeToDoListFilter(filter)
    }

    const onClickHandler = () => props.changeToDoListFilter("all")
    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }

    const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && addTask()
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetTitle}
                    onKeyDown={onKeyDownAddTask}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <button onClick={onClickHandler}>All</button>
                <button onClick={(getOnClickHandler("active"))}>Active</button>
                <button onClick={(getOnClickHandler("completed"))}>Completed</button>
            </div>
        </div>
    );
};

export default ToDoList;