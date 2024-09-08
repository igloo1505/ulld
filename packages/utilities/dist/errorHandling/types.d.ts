import { BibManagerErrorKeys } from "./categoryRecords/bibManager.js";
import { TaskManagerErrorKeys } from "./categoryRecords/taskManager.js";
type ErrorKeyRecord = {
    taskManager: TaskManagerErrorKeys;
    bibManager: BibManagerErrorKeys;
};
export type ErrorResponse<T extends keyof ErrorKeyRecord = "taskManager"> = {
    errorKey: ErrorKeyRecord[T] | ErrorKeyRecord[T][];
};
export {};
//# sourceMappingURL=types.d.ts.map