import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SnippetUpdateManyMutationInputSchema.js
..//inputTypeSchemas/SnippetUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/SnippetWhereInputSchema.js
export const SnippetUpdateManyArgsSchema: z.ZodType<Prisma.SnippetUpdateManyArgs> = z.object({
  data: z.union([ SnippetUpdateManyMutationInputSchema,SnippetUncheckedUpdateManyInputSchema ]),
  where: SnippetWhereInputSchema.optional(),
}).strict() ;
export default SnippetUpdateManyArgsSchema;