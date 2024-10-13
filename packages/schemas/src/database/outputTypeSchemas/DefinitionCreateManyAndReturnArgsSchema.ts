import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DefinitionCreateManyInputSchema.js
export const DefinitionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DefinitionCreateManyAndReturnArgs> = z.object({
  data: z.union([ DefinitionCreateManyInputSchema,DefinitionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default DefinitionCreateManyAndReturnArgsSchema;