import { z } from 'zod';
export const TagCountOutputTypeSelectSchema = z.object({
    MdxNotes: z.boolean().optional(),
    bibEntries: z.boolean().optional(),
    ipynbNotes: z.boolean().optional(),
    QAPair: z.boolean().optional(),
    practiceExam: z.boolean().optional(),
    equations: z.boolean().optional(),
    toDo: z.boolean().optional(),
    todoList: z.boolean().optional(),
}).strict();
export default TagCountOutputTypeSelectSchema;
