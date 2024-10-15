import { z } from 'zod';
import { SubjectSelectSchema } from '../inputTypeSchemas/SubjectSelectSchema.js';
import { SubjectIncludeSchema } from '../inputTypeSchemas/SubjectIncludeSchema.js';
export const SubjectArgsSchema = z.object({
    select: z.lazy(() => SubjectSelectSchema).optional(),
    include: z.lazy(() => SubjectIncludeSchema).optional(),
}).strict();
export default SubjectArgsSchema;
