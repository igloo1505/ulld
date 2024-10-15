import { z } from 'zod';
import { DefinitionWhereInputSchema } from '../inputTypeSchemas/DefinitionWhereInputSchema.js';
export const DefinitionDeleteManyArgsSchema = z.object({
    where: DefinitionWhereInputSchema.optional(),
}).strict();
export default DefinitionDeleteManyArgsSchema;
