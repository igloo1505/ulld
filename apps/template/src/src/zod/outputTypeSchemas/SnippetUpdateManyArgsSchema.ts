import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SnippetUpdateManyMutationInputSchema } from '../inputTypeSchemas/SnippetUpdateManyMutationInputSchema'
import { SnippetUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SnippetUncheckedUpdateManyInputSchema'
import { SnippetWhereInputSchema } from '../inputTypeSchemas/SnippetWhereInputSchema'

export const SnippetUpdateManyArgsSchema: z.ZodType<Prisma.SnippetUpdateManyArgs> = z.object({
  data: z.union([ SnippetUpdateManyMutationInputSchema,SnippetUncheckedUpdateManyInputSchema ]),
  where: SnippetWhereInputSchema.optional(),
}).strict() ;

export default SnippetUpdateManyArgsSchema;
