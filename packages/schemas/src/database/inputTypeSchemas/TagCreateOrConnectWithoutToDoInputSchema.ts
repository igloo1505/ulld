import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagCreateWithoutToDoInputSchema } from './TagCreateWithoutToDoInputSchema.js';
import { TagUncheckedCreateWithoutToDoInputSchema } from './TagUncheckedCreateWithoutToDoInputSchema.js';
export const TagCreateOrConnectWithoutToDoInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutToDoInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutToDoInputSchema),z.lazy(() => TagUncheckedCreateWithoutToDoInputSchema) ]),
}).strict();
export default TagCreateOrConnectWithoutToDoInputSchema;