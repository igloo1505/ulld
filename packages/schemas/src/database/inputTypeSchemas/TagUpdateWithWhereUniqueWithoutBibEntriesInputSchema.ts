import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutBibEntriesInputSchema } from './TagUpdateWithoutBibEntriesInputSchema.js';
import { TagUncheckedUpdateWithoutBibEntriesInputSchema } from './TagUncheckedUpdateWithoutBibEntriesInputSchema.js';
export const TagUpdateWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutBibEntriesInputSchema),z.lazy(() => TagUncheckedUpdateWithoutBibEntriesInputSchema) ]),
}).strict();
export default TagUpdateWithWhereUniqueWithoutBibEntriesInputSchema;