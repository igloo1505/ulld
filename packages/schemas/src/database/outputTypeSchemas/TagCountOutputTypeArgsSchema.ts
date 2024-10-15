import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { TagCountOutputTypeSelectSchema } from './TagCountOutputTypeSelectSchema.js';
export const TagCountOutputTypeArgsSchema: z.ZodType<Prisma.TagCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TagCountOutputTypeSelectSchema).nullish(),
}).strict();
export default TagCountOutputTypeSelectSchema;