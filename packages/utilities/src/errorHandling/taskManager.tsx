import { ToastConfigType } from "../types/toastConfig";

export type TaskManagerErrorKeys = "toDoListExists"

export type ErrorResponse = {
    errorKey: TaskManagerErrorKeys
}


export const taskManagerErrorRecord: {[k in TaskManagerErrorKeys]: ToastConfigType} 
 = {
    toDoListExists: {
        title: "Uh Oh",
        description: "A to-do list with this name already exists.",
    },
};
