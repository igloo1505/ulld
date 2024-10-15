import { z } from 'zod';
import { PracticeExamCountOutputTypeSelectSchema } from './PracticeExamCountOutputTypeSelectSchema.js';
export const PracticeExamCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => PracticeExamCountOutputTypeSelectSchema).nullish(),
}).strict();
export default PracticeExamCountOutputTypeSelectSchema;
