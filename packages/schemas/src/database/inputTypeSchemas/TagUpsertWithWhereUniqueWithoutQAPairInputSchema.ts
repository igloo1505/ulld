import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from '../TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutQAPairInputSchema } from '../TagUpdateWithoutQAPairInputSchema.js';
import { TagUncheckedUpdateWithoutQAPairInputSchema } from '../TagUncheckedUpdateWithoutQAPairInputSchema.js';
import { TagCreateWithoutQAPairInputSchema } from '../TagCreateWithoutQAPairInputSchema.js';
import { TagUncheckedCreateWithoutQAPairInputSchema } from '../TagUncheckedCreateWithoutQAPairInputSchema.js';
export const TagUpsertWithWhereUniqueWithoutQAPairInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutQAPairInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutQAPairInputSchema),z.lazy(() => TagUncheckedUpdateWithoutQAPairInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutQAPairInputSchema),z.lazy(() => TagUncheckedCreateWithoutQAPairInputSchema) ]),
}).strict();
export default TagUpsertWithWhereUniqueWithoutQAPairInputSchema;