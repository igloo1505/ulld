import { z } from 'zod';
import { PracticeExamSelectSchema } from '../inputTypeSchemas/PracticeExamSelectSchema.js';
import { PracticeExamIncludeSchema } from '../inputTypeSchemas/PracticeExamIncludeSchema.js';
export const PracticeExamArgsSchema = z.object({
    select: z.lazy(() => PracticeExamSelectSchema).optional(),
    include: z.lazy(() => PracticeExamIncludeSchema).optional(),
}).strict();
export default PracticeExamArgsSchema;
