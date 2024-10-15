import { z } from 'zod';
import { DietaryItemSelectSchema } from '../inputTypeSchemas/DietaryItemSelectSchema.js';
import { DietaryItemIncludeSchema } from '../inputTypeSchemas/DietaryItemIncludeSchema.js';
export const DietaryItemArgsSchema = z.object({
    select: z.lazy(() => DietaryItemSelectSchema).optional(),
    include: z.lazy(() => DietaryItemIncludeSchema).optional(),
}).strict();
export default DietaryItemArgsSchema;
