import { z } from 'zod';
import { DefinitionWhereInputSchema } from './DefinitionWhereInputSchema.js';
export const DefinitionListRelationFilterSchema = z.object({
    every: z.lazy(() => DefinitionWhereInputSchema).optional(),
    some: z.lazy(() => DefinitionWhereInputSchema).optional(),
    none: z.lazy(() => DefinitionWhereInputSchema).optional()
}).strict();
export default DefinitionListRelationFilterSchema;
