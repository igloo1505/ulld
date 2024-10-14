import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema.js';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema.js';
import { TagUncheckedUpdateManyWithoutBibEntriesInputSchema } from './TagUncheckedUpdateManyWithoutBibEntriesInputSchema.js';
export const TagUpdateManyWithWhereWithoutBibEntriesInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutBibEntriesInputSchema) ]),
}).strict();
export default TagUpdateManyWithWhereWithoutBibEntriesInputSchema;