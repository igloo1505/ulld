import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutToDoInputSchema } from './TagCreateWithoutToDoInputSchema';
import { TagUncheckedCreateWithoutToDoInputSchema } from './TagUncheckedCreateWithoutToDoInputSchema';
import { TagCreateOrConnectWithoutToDoInputSchema } from './TagCreateOrConnectWithoutToDoInputSchema';
import { TagUpsertWithWhereUniqueWithoutToDoInputSchema } from './TagUpsertWithWhereUniqueWithoutToDoInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutToDoInputSchema } from './TagUpdateWithWhereUniqueWithoutToDoInputSchema';
import { TagUpdateManyWithWhereWithoutToDoInputSchema } from './TagUpdateManyWithWhereWithoutToDoInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUncheckedUpdateManyWithoutToDoNestedInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutToDoNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutToDoInputSchema),z.lazy(() => TagCreateWithoutToDoInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutToDoInputSchema),z.lazy(() => TagUncheckedCreateWithoutToDoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutToDoInputSchema),z.lazy(() => TagCreateOrConnectWithoutToDoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutToDoInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutToDoInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutToDoInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutToDoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutToDoInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutToDoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagUncheckedUpdateManyWithoutToDoNestedInputSchema;
