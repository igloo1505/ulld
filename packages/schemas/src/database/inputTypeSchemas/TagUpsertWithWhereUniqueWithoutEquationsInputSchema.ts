import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from '../TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutEquationsInputSchema } from '../TagUpdateWithoutEquationsInputSchema.js';
import { TagUncheckedUpdateWithoutEquationsInputSchema } from '../TagUncheckedUpdateWithoutEquationsInputSchema.js';
import { TagCreateWithoutEquationsInputSchema } from '../TagCreateWithoutEquationsInputSchema.js';
import { TagUncheckedCreateWithoutEquationsInputSchema } from '../TagUncheckedCreateWithoutEquationsInputSchema.js';
export const TagUpsertWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutEquationsInputSchema),z.lazy(() => TagUncheckedUpdateWithoutEquationsInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutEquationsInputSchema),z.lazy(() => TagUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();
export default TagUpsertWithWhereUniqueWithoutEquationsInputSchema;