import { z } from 'zod';
import { DietSelectSchema } from '../inputTypeSchemas/DietSelectSchema.js';
import { DietIncludeSchema } from '../inputTypeSchemas/DietIncludeSchema.js';
export const DietArgsSchema = z.object({
    select: z.lazy(() => DietSelectSchema).optional(),
    include: z.lazy(() => DietIncludeSchema).optional(),
}).strict();
export default DietArgsSchema;
