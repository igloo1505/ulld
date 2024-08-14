import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DefinitionUpdateManyMutationInputSchema } from '../inputTypeSchemas/DefinitionUpdateManyMutationInputSchema'
import { DefinitionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DefinitionUncheckedUpdateManyInputSchema'
import { DefinitionWhereInputSchema } from '../inputTypeSchemas/DefinitionWhereInputSchema'

export const DefinitionUpdateManyArgsSchema: z.ZodType<Prisma.DefinitionUpdateManyArgs> = z.object({
  data: z.union([ DefinitionUpdateManyMutationInputSchema,DefinitionUncheckedUpdateManyInputSchema ]),
  where: DefinitionWhereInputSchema.optional(),
}).strict() ;

export default DefinitionUpdateManyArgsSchema;
