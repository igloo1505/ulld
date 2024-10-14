import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DefinitionWhereInputSchema } from '../inputTypeSchemas/DefinitionWhereInputSchema.js'
export const DefinitionDeleteManyArgsSchema: z.ZodType<Prisma.DefinitionDeleteManyArgs> = z.object({
  where: DefinitionWhereInputSchema.optional(),
}).strict() ;
export default DefinitionDeleteManyArgsSchema;