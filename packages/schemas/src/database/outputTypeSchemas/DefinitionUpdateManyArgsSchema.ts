import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DefinitionUpdateManyMutationInputSchema.js
..//inputTypeSchemas/DefinitionUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/DefinitionWhereInputSchema.js
export const DefinitionUpdateManyArgsSchema: z.ZodType<Prisma.DefinitionUpdateManyArgs> = z.object({
  data: z.union([ DefinitionUpdateManyMutationInputSchema,DefinitionUncheckedUpdateManyInputSchema ]),
  where: DefinitionWhereInputSchema.optional(),
}).strict() ;
export default DefinitionUpdateManyArgsSchema;