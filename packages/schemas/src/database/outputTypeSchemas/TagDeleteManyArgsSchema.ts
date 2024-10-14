import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema.js'
export const TagDeleteManyArgsSchema: z.ZodType<Prisma.TagDeleteManyArgs> = z.object({
  where: TagWhereInputSchema.optional(),
}).strict() ;
export default TagDeleteManyArgsSchema;