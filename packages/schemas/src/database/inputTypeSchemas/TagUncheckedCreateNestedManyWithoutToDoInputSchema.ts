import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutToDoInputSchema } from './TagCreateWithoutToDoInputSchema';
import { TagUncheckedCreateWithoutToDoInputSchema } from './TagUncheckedCreateWithoutToDoInputSchema';
import { TagCreateOrConnectWithoutToDoInputSchema } from './TagCreateOrConnectWithoutToDoInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagUncheckedCreateNestedManyWithoutToDoInputSchema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutToDoInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutToDoInputSchema),z.lazy(() => TagCreateWithoutToDoInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutToDoInputSchema),z.lazy(() => TagUncheckedCreateWithoutToDoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutToDoInputSchema),z.lazy(() => TagCreateOrConnectWithoutToDoInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagUncheckedCreateNestedManyWithoutToDoInputSchema;
