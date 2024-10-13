import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagCreateWithoutToDoInputSchema } from '../TagCreateWithoutToDoInputSchema.js';
import { TagUncheckedCreateWithoutToDoInputSchema } from '../TagUncheckedCreateWithoutToDoInputSchema.js';
import { TagCreateOrConnectWithoutToDoInputSchema } from '../TagCreateOrConnectWithoutToDoInputSchema.js';
import { TagUpsertWithWhereUniqueWithoutToDoInputSchema } from '../TagUpsertWithWhereUniqueWithoutToDoInputSchema.js';
import { TagWhereUniqueInputSchema } from '../TagWhereUniqueInputSchema.js';
import { TagUpdateWithWhereUniqueWithoutToDoInputSchema } from '../TagUpdateWithWhereUniqueWithoutToDoInputSchema.js';
import { TagUpdateManyWithWhereWithoutToDoInputSchema } from '../TagUpdateManyWithWhereWithoutToDoInputSchema.js';
import { TagScalarWhereInputSchema } from '../TagScalarWhereInputSchema.js';
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