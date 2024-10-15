import { z } from 'zod';
import { EquationSelectSchema } from '../inputTypeSchemas/EquationSelectSchema.js';
import { EquationIncludeSchema } from '../inputTypeSchemas/EquationIncludeSchema.js';
export const EquationArgsSchema = z.object({
    select: z.lazy(() => EquationSelectSchema).optional(),
    include: z.lazy(() => EquationIncludeSchema).optional(),
}).strict();
export default EquationArgsSchema;
