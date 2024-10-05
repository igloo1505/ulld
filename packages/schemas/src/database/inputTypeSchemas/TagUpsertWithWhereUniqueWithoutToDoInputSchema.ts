import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutToDoInputSchema } from './TagUpdateWithoutToDoInputSchema';
import { TagUncheckedUpdateWithoutToDoInputSchema } from './TagUncheckedUpdateWithoutToDoInputSchema';
import { TagCreateWithoutToDoInputSchema } from './TagCreateWithoutToDoInputSchema';
import { TagUncheckedCreateWithoutToDoInputSchema } from './TagUncheckedCreateWithoutToDoInputSchema';

export const TagUpsertWithWhereUniqueWithoutToDoInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutToDoInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutToDoInputSchema),z.lazy(() => TagUncheckedUpdateWithoutToDoInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutToDoInputSchema),z.lazy(() => TagUncheckedCreateWithoutToDoInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutToDoInputSchema;
