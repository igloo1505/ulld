import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutBibEntriesInputSchema } from './TagUncheckedUpdateManyWithoutBibEntriesInputSchema';

export const TagUpdateManyWithWhereWithoutBibEntriesInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutBibEntriesInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutBibEntriesInputSchema;
