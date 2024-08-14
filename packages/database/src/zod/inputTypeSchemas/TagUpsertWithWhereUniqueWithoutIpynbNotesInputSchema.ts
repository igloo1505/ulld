import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutIpynbNotesInputSchema } from './TagUpdateWithoutIpynbNotesInputSchema';
import { TagUncheckedUpdateWithoutIpynbNotesInputSchema } from './TagUncheckedUpdateWithoutIpynbNotesInputSchema';
import { TagCreateWithoutIpynbNotesInputSchema } from './TagCreateWithoutIpynbNotesInputSchema';
import { TagUncheckedCreateWithoutIpynbNotesInputSchema } from './TagUncheckedCreateWithoutIpynbNotesInputSchema';

export const TagUpsertWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutIpynbNotesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutIpynbNotesInputSchema),z.lazy(() => TagUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutIpynbNotesInputSchema;
