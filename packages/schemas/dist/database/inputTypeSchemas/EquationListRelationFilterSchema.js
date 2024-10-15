import { z } from 'zod';
import { EquationWhereInputSchema } from './EquationWhereInputSchema.js';
export const EquationListRelationFilterSchema = z.object({
    every: z.lazy(() => EquationWhereInputSchema).optional(),
    some: z.lazy(() => EquationWhereInputSchema).optional(),
    none: z.lazy(() => EquationWhereInputSchema).optional()
}).strict();
export default EquationListRelationFilterSchema;
