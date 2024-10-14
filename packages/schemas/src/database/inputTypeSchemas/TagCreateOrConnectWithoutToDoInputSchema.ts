import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutToDoInputSchema } from './TagCreateWithoutToDoInputSchema';
import { TagUncheckedCreateWithoutToDoInputSchema } from './TagUncheckedCreateWithoutToDoInputSchema';

export const TagCreateOrConnectWithoutToDoInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutToDoInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutToDoInputSchema),z.lazy(() => TagUncheckedCreateWithoutToDoInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutToDoInputSchema;
