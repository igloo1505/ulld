import { z } from 'zod';
export const EquationCountOutputTypeSelectSchema = z.object({
    relatedValues: z.boolean().optional(),
    tags: z.boolean().optional(),
    topics: z.boolean().optional(),
    subjects: z.boolean().optional(),
    mdxNotes: z.boolean().optional(),
}).strict();
export default EquationCountOutputTypeSelectSchema;
