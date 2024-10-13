import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SnippetCreateManyInputSchema.js
export const SnippetCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SnippetCreateManyAndReturnArgs> = z.object({
  data: z.union([ SnippetCreateManyInputSchema,SnippetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default SnippetCreateManyAndReturnArgsSchema;