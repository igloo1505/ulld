import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DefinitionUpdateManyMutationInputSchema } from '../inputTypeSchemas/DefinitionUpdateManyMutationInputSchema.js'
import { DefinitionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DefinitionUncheckedUpdateManyInputSchema.js'
import { DefinitionWhereInputSchema } from '../inputTypeSchemas/DefinitionWhereInputSchema.js'
export const DefinitionUpdateManyArgsSchema: z.ZodType<Prisma.DefinitionUpdateManyArgs> = z.object({
  data: z.union([ DefinitionUpdateManyMutationInputSchema,DefinitionUncheckedUpdateManyInputSchema ]),
  where: DefinitionWhereInputSchema.optional(),
}).strict() ;
export default DefinitionUpdateManyArgsSchema;