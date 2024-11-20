import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCountOutputTypeSelectSchema } from './TagCountOutputTypeSelectSchema';

export const TagCountOutputTypeArgsSchema: z.ZodType<Prisma.TagCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TagCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TagCountOutputTypeSelectSchema;
