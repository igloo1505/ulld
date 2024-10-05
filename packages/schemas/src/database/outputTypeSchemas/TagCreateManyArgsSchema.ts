import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateManyInputSchema } from '../inputTypeSchemas/TagCreateManyInputSchema'

export const TagCreateManyArgsSchema: z.ZodType<Prisma.TagCreateManyArgs> = z.object({
  data: z.union([ TagCreateManyInputSchema,TagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TagCreateManyArgsSchema;
