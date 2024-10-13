import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ReadingListUpdateManyMutationInputSchema.js
..//inputTypeSchemas/ReadingListUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/ReadingListWhereInputSchema.js
export const ReadingListUpdateManyArgsSchema: z.ZodType<Prisma.ReadingListUpdateManyArgs> = z.object({
  data: z.union([ ReadingListUpdateManyMutationInputSchema,ReadingListUncheckedUpdateManyInputSchema ]),
  where: ReadingListWhereInputSchema.optional(),
}).strict() ;
export default ReadingListUpdateManyArgsSchema;