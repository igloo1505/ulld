import { z } from 'zod';
import { EquationUpdateManyMutationInputSchema } from '../inputTypeSchemas/EquationUpdateManyMutationInputSchema.js';
import { EquationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EquationUncheckedUpdateManyInputSchema.js';
import { EquationWhereInputSchema } from '../inputTypeSchemas/EquationWhereInputSchema.js';
export const EquationUpdateManyArgsSchema = z.object({
    data: z.union([EquationUpdateManyMutationInputSchema, EquationUncheckedUpdateManyInputSchema]),
    where: EquationWhereInputSchema.optional(),
}).strict();
export default EquationUpdateManyArgsSchema;
