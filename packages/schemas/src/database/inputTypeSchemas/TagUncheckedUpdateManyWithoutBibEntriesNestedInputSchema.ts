import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagCreateWithoutBibEntriesInputSchema } from './TagCreateWithoutBibEntriesInputSchema.js';
import { TagUncheckedCreateWithoutBibEntriesInputSchema } from './TagUncheckedCreateWithoutBibEntriesInputSchema.js';
import { TagCreateOrConnectWithoutBibEntriesInputSchema } from './TagCreateOrConnectWithoutBibEntriesInputSchema.js';
import { TagUpsertWithWhereUniqueWithoutBibEntriesInputSchema } from './TagUpsertWithWhereUniqueWithoutBibEntriesInputSchema.js';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
import { TagUpdateWithWhereUniqueWithoutBibEntriesInputSchema } from './TagUpdateWithWhereUniqueWithoutBibEntriesInputSchema.js';
import { TagUpdateManyWithWhereWithoutBibEntriesInputSchema } from './TagUpdateManyWithWhereWithoutBibEntriesInputSchema.js';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema.js';
export const TagUncheckedUpdateManyWithoutBibEntriesNestedInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutBibEntriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutBibEntriesInputSchema),z.lazy(() => TagCreateWithoutBibEntriesInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutBibEntriesInputSchema),z.lazy(() => TagUncheckedCreateWithoutBibEntriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutBibEntriesInputSchema),z.lazy(() => TagCreateOrConnectWithoutBibEntriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutBibEntriesInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutBibEntriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutBibEntriesInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutBibEntriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutBibEntriesInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutBibEntriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default TagUncheckedUpdateManyWithoutBibEntriesNestedInputSchema;