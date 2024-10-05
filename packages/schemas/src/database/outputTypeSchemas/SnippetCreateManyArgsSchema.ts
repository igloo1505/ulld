import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SnippetCreateManyInputSchema } from '../inputTypeSchemas/SnippetCreateManyInputSchema'

export const SnippetCreateManyArgsSchema: z.ZodType<Prisma.SnippetCreateManyArgs> = z.object({
  data: z.union([ SnippetCreateManyInputSchema,SnippetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SnippetCreateManyArgsSchema;
