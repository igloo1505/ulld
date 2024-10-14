import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagWhereInputSchema } from '../inputTypeSchemas/TagWhereInputSchema'

export const TagDeleteManyArgsSchema: z.ZodType<Prisma.TagDeleteManyArgs> = z.object({
  where: TagWhereInputSchema.optional(),
}).strict() ;

export default TagDeleteManyArgsSchema;
