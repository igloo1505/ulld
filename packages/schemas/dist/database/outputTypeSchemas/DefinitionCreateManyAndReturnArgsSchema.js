import { z } from 'zod';
import { DefinitionCreateManyInputSchema } from '../inputTypeSchemas/DefinitionCreateManyInputSchema.js';
export const DefinitionCreateManyAndReturnArgsSchema = z.object({
    data: z.union([DefinitionCreateManyInputSchema, DefinitionCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export default DefinitionCreateManyAndReturnArgsSchema;
