import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutToDoInputSchema } from './TagUpdateWithoutToDoInputSchema';
import { TagUncheckedUpdateWithoutToDoInputSchema } from './TagUncheckedUpdateWithoutToDoInputSchema';

export const TagUpdateWithWhereUniqueWithoutToDoInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutToDoInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutToDoInputSchema),z.lazy(() => TagUncheckedUpdateWithoutToDoInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutToDoInputSchema;
