import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from '../TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutIpynbNotesInputSchema } from '../TagUpdateWithoutIpynbNotesInputSchema.js';
import { TagUncheckedUpdateWithoutIpynbNotesInputSchema } from '../TagUncheckedUpdateWithoutIpynbNotesInputSchema.js';
import { TagCreateWithoutIpynbNotesInputSchema } from '../TagCreateWithoutIpynbNotesInputSchema.js';
import { TagUncheckedCreateWithoutIpynbNotesInputSchema } from '../TagUncheckedCreateWithoutIpynbNotesInputSchema.js';
export const TagUpsertWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutIpynbNotesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutIpynbNotesInputSchema),z.lazy(() => TagUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();
export default TagUpsertWithWhereUniqueWithoutIpynbNotesInputSchema;