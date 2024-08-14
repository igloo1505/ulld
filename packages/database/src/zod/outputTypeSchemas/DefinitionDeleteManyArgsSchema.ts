import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DefinitionWhereInputSchema } from '../inputTypeSchemas/DefinitionWhereInputSchema'

export const DefinitionDeleteManyArgsSchema: z.ZodType<Prisma.DefinitionDeleteManyArgs> = z.object({
  where: DefinitionWhereInputSchema.optional(),
}).strict() ;

export default DefinitionDeleteManyArgsSchema;
