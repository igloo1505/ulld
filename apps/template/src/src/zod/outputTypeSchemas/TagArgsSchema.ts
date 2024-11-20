import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagSelectSchema } from '../inputTypeSchemas/TagSelectSchema';
import { TagIncludeSchema } from '../inputTypeSchemas/TagIncludeSchema';

export const TagArgsSchema: z.ZodType<Prisma.TagDefaultArgs> = z.object({
  select: z.lazy(() => TagSelectSchema).optional(),
  include: z.lazy(() => TagIncludeSchema).optional(),
}).strict();

export default TagArgsSchema;
