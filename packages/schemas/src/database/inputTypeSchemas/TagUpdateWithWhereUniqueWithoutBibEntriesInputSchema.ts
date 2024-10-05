import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutBibEntriesInputSchema } from './TagUpdateWithoutBibEntriesInputSchema';
import { TagUncheckedUpdateWithoutBibEntriesInputSchema } from './TagUncheckedUpdateWithoutBibEntriesInputSchema';

export const TagUpdateWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutBibEntriesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutBibEntriesInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutBibEntriesInputSchema;
