import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SnippetCreateManyInputSchema } from '../inputTypeSchemas/SnippetCreateManyInputSchema'

export const SnippetCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SnippetCreateManyAndReturnArgs> = z.object({
  data: z.union([ SnippetCreateManyInputSchema,SnippetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SnippetCreateManyAndReturnArgsSchema;
