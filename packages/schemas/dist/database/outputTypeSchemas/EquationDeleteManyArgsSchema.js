import { z } from 'zod';
import { EquationWhereInputSchema } from '../inputTypeSchemas/EquationWhereInputSchema.js';
export const EquationDeleteManyArgsSchema = z.object({
    where: EquationWhereInputSchema.optional(),
}).strict();
export default EquationDeleteManyArgsSchema;
