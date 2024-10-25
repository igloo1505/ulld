import { bibManagerErrorRecord } from "./categoryRecords/bibManager.js"
import { taskManagerErrorRecord } from "./categoryRecords/taskManager.js"

export * from "./types.js"
export * from "./categoryRecords/taskManager.js"

export const errorToastRecord = {
    ...taskManagerErrorRecord,
    ...bibManagerErrorRecord
}
