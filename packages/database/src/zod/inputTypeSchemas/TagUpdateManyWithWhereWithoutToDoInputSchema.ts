import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutToDoInputSchema } from './TagUncheckedUpdateManyWithoutToDoInputSchema';

export const TagUpdateManyWithWhereWithoutToDoInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutToDoInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutToDoInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutToDoInputSchema;
