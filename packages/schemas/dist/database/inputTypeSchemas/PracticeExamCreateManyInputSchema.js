import { z } from 'zod';
export const PracticeExamCreateManyInputSchema = z.object({
    id: z.number().int().optional(),
    correctCount: z.number().int(),
    inCorrectCount: z.number().int(),
    timeLimitInSeconds: z.number().int(),
    timeCompletedInSeconds: z.number().int(),
    date: z.coerce.date().optional()
}).strict();
export default PracticeExamCreateManyInputSchema;
