import { z } from 'zod';
export const PracticeExamCountOutputTypeSelectSchema = z.object({
    topics: z.boolean().optional(),
    tags: z.boolean().optional(),
    subjects: z.boolean().optional(),
    questions: z.boolean().optional(),
}).strict();
export default PracticeExamCountOutputTypeSelectSchema;
