import { v1 } from "uuid"
import { TaskType } from "../ToDoList"

export const tasksReducer = (state: Array<TaskType>, action: megaType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            // let filteredTasks = tasks.filter(t => t.id !== id);
            return state.filter(el => el.id !== action.payload.id)
        }
        case 'ADD-TASK': {
            let newTask = { id: v1(), title: action.payload.title, isDone: false };
            return [newTask, ...state];
        }
        default:
            return state
    }
}

type megaType = removeTaskACType | addTaskACType

export type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {
            id: id
        }
    } as const
}

export type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string) => {
    return {
        type: 'ADD-TASK',
        payload: { title }
    } as const
}