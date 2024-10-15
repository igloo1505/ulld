import { z } from 'zod';
import { SubjectCountOutputTypeSelectSchema } from './SubjectCountOutputTypeSelectSchema.js';
export const SubjectCountOutputTypeArgsSchema = z.object({
    select: z.lazy(() => SubjectCountOutputTypeSelectSchema).nullish(),
}).strict();
export default SubjectCountOutputTypeSelectSchema;
