import { z } from 'zod';
import { BibSelectSchema } from '../inputTypeSchemas/BibSelectSchema.js';
import { BibIncludeSchema } from '../inputTypeSchemas/BibIncludeSchema.js';
export const BibArgsSchema = z.object({
    select: z.lazy(() => BibSelectSchema).optional(),
    include: z.lazy(() => BibIncludeSchema).optional(),
}).strict();
export default BibArgsSchema;
