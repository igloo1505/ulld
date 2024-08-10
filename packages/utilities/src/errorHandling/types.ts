import { BibManagerErrorKeys } from "./categoryRecords/bibManager"
import { TaskManagerErrorKeys } from "./categoryRecords/taskManager"


type ErrorKeyRecord = {
    taskManager: TaskManagerErrorKeys,
    bibManager: BibManagerErrorKeys
}


export type ErrorResponse<T extends keyof ErrorKeyRecord = "taskManager"> = {
    errorKey: ErrorKeyRecord[T] | ErrorKeyRecord[T][]
}

