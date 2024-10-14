import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SnippetCreateManyInputSchema } from '../inputTypeSchemas/SnippetCreateManyInputSchema.js'
export const SnippetCreateManyArgsSchema: z.ZodType<Prisma.SnippetCreateManyArgs> = z.object({
  data: z.union([ SnippetCreateManyInputSchema,SnippetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default SnippetCreateManyArgsSchema;