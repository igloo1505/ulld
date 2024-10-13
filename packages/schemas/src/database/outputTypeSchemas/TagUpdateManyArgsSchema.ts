import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/TagUpdateManyMutationInputSchema.js
..//inputTypeSchemas/TagUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/TagWhereInputSchema.js
export const TagUpdateManyArgsSchema: z.ZodType<Prisma.TagUpdateManyArgs> = z.object({
  data: z.union([ TagUpdateManyMutationInputSchema,TagUncheckedUpdateManyInputSchema ]),
  where: TagWhereInputSchema.optional(),
}).strict() ;
export default TagUpdateManyArgsSchema;