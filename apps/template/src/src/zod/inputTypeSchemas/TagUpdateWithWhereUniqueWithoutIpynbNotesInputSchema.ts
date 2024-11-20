import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutIpynbNotesInputSchema } from './TagUpdateWithoutIpynbNotesInputSchema';
import { TagUncheckedUpdateWithoutIpynbNotesInputSchema } from './TagUncheckedUpdateWithoutIpynbNotesInputSchema';

export const TagUpdateWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutIpynbNotesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutIpynbNotesInputSchema;
