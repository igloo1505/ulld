export * from "./types"
export * from "./categoryRecords/taskManager"
import { bibManagerErrorRecord } from "./categoryRecords/bibManager"
import { taskManagerErrorRecord } from "./categoryRecords/taskManager"

export const errorToastRecord = {
    ...taskManagerErrorRecord,
    ...bibManagerErrorRecord
}
