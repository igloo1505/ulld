import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DefinitionCreateManyInputSchema.js
export const DefinitionCreateManyArgsSchema: z.ZodType<Prisma.DefinitionCreateManyArgs> = z.object({
  data: z.union([ DefinitionCreateManyInputSchema,DefinitionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default DefinitionCreateManyArgsSchema;