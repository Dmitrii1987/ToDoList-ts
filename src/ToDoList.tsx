import React from 'react';
// rsc нужно напечатать и появится весь код

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}


type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType>
}
const ToDoList = (props: ToDoListPropsType) => {
    const tasksJSX = props.tasks.map(t => {
        return (
            <li>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span> 
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
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
    );
};

export default ToDoList;