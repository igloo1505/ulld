import { z } from 'zod';
import { DefinitionSelectSchema } from '../inputTypeSchemas/DefinitionSelectSchema.js';
import { DefinitionIncludeSchema } from '../inputTypeSchemas/DefinitionIncludeSchema.js';
export const DefinitionArgsSchema = z.object({
    select: z.lazy(() => DefinitionSelectSchema).optional(),
    include: z.lazy(() => DefinitionIncludeSchema).optional(),
}).strict();
export default DefinitionArgsSchema;
