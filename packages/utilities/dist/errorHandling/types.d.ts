import type { BibManagerErrorKeys } from "./categoryRecords/bibManager.js";
import type { TaskManagerErrorKeys } from "./categoryRecords/taskManager.js";
interface ErrorKeyRecord {
    taskManager: TaskManagerErrorKeys;
    bibManager: BibManagerErrorKeys;
}
export interface ErrorResponse<T extends keyof ErrorKeyRecord = keyof ErrorKeyRecord> {
    errorKey: ErrorKeyRecord[T] | ErrorKeyRecord[T][];
}
export {};
//# sourceMappingURL=types.d.ts.map