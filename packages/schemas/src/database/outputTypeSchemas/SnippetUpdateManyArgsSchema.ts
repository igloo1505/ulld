import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SnippetUpdateManyMutationInputSchema } from '../inputTypeSchemas/SnippetUpdateManyMutationInputSchema.js'
import { SnippetUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SnippetUncheckedUpdateManyInputSchema.js'
import { SnippetWhereInputSchema } from '../inputTypeSchemas/SnippetWhereInputSchema.js'
export const SnippetUpdateManyArgsSchema: z.ZodType<Prisma.SnippetUpdateManyArgs> = z.object({
  data: z.union([ SnippetUpdateManyMutationInputSchema,SnippetUncheckedUpdateManyInputSchema ]),
  where: SnippetWhereInputSchema.optional(),
}).strict() ;
export default SnippetUpdateManyArgsSchema;