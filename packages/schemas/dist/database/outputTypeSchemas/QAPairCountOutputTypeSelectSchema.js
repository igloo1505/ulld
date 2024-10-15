import { z } from 'zod';
export const QAPairCountOutputTypeSelectSchema = z.object({
    tags: z.boolean().optional(),
    topics: z.boolean().optional(),
    subjects: z.boolean().optional(),
    practiceExam: z.boolean().optional(),
}).strict();
export default QAPairCountOutputTypeSelectSchema;
