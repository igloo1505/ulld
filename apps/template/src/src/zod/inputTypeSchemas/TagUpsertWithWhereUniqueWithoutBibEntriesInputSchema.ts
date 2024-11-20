import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutBibEntriesInputSchema } from './TagUpdateWithoutBibEntriesInputSchema';
import { TagUncheckedUpdateWithoutBibEntriesInputSchema } from './TagUncheckedUpdateWithoutBibEntriesInputSchema';
import { TagCreateWithoutBibEntriesInputSchema } from './TagCreateWithoutBibEntriesInputSchema';
import { TagUncheckedCreateWithoutBibEntriesInputSchema } from './TagUncheckedCreateWithoutBibEntriesInputSchema';

export const TagUpsertWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutBibEntriesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutBibEntriesInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutBibEntriesInputSchema),z.lazy(() => TagUncheckedCreateWithoutBibEntriesInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutBibEntriesInputSchema;
