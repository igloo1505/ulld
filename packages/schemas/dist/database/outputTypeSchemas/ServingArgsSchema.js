import { z } from 'zod';
import { ServingSelectSchema } from '../inputTypeSchemas/ServingSelectSchema.js';
import { ServingIncludeSchema } from '../inputTypeSchemas/ServingIncludeSchema.js';
export const ServingArgsSchema = z.object({
    select: z.lazy(() => ServingSelectSchema).optional(),
    include: z.lazy(() => ServingIncludeSchema).optional(),
}).strict();
export default ServingArgsSchema;
