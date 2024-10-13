import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from '../TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutToDoInputSchema } from '../TagUpdateWithoutToDoInputSchema.js';
import { TagUncheckedUpdateWithoutToDoInputSchema } from '../TagUncheckedUpdateWithoutToDoInputSchema.js';
export const TagUpdateWithWhereUniqueWithoutToDoInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutToDoInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutToDoInputSchema),z.lazy(() => TagUncheckedUpdateWithoutToDoInputSchema) ]),
}).strict();
export default TagUpdateWithWhereUniqueWithoutToDoInputSchema;