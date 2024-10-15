import { z } from 'zod';
import { DefinitionUpdateManyMutationInputSchema } from '../inputTypeSchemas/DefinitionUpdateManyMutationInputSchema.js';
import { DefinitionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DefinitionUncheckedUpdateManyInputSchema.js';
import { DefinitionWhereInputSchema } from '../inputTypeSchemas/DefinitionWhereInputSchema.js';
export const DefinitionUpdateManyArgsSchema = z.object({
    data: z.union([DefinitionUpdateManyMutationInputSchema, DefinitionUncheckedUpdateManyInputSchema]),
    where: DefinitionWhereInputSchema.optional(),
}).strict();
export default DefinitionUpdateManyArgsSchema;
