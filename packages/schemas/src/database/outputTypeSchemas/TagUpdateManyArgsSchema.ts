import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { TagUpdateManyMutationInputSchema } from '../inputTypeSchemas/TagUpdateManyMutationInputSchema.js'
import { TagUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TagUncheckedUpdateManyInputSchema.js'
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema.js'
export const TagUpdateManyArgsSchema: z.ZodType<Prisma.TagUpdateManyArgs> = z.object({
  data: z.union([ TagUpdateManyMutationInputSchema,TagUncheckedUpdateManyInputSchema ]),
  where: TagWhereInputSchema.optional(),
}).strict() ;
export default TagUpdateManyArgsSchema;