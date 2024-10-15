import { z } from 'zod';
import { EquationCreateManyInputSchema } from '../inputTypeSchemas/EquationCreateManyInputSchema.js';
export const EquationCreateManyAndReturnArgsSchema = z.object({
    data: z.union([EquationCreateManyInputSchema, EquationCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default EquationCreateManyAndReturnArgsSchema;
