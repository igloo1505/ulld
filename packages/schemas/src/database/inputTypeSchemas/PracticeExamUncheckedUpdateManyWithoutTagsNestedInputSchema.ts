import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamCreateWithoutTagsInputSchema } from './PracticeExamCreateWithoutTagsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutTagsInputSchema } from './PracticeExamUncheckedCreateWithoutTagsInputSchema.js';
import { PracticeExamCreateOrConnectWithoutTagsInputSchema } from './PracticeExamCreateOrConnectWithoutTagsInputSchema.js';
import { PracticeExamUpsertWithWhereUniqueWithoutTagsInputSchema } from './PracticeExamUpsertWithWhereUniqueWithoutTagsInputSchema.js';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamUpdateWithWhereUniqueWithoutTagsInputSchema } from './PracticeExamUpdateWithWhereUniqueWithoutTagsInputSchema.js';
import { PracticeExamUpdateManyWithWhereWithoutTagsInputSchema } from './PracticeExamUpdateManyWithWhereWithoutTagsInputSchema.js';
import { PracticeExamScalarWhereInputSchema } from './PracticeExamScalarWhereInputSchema.js';
export const PracticeExamUncheckedUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.PracticeExamUncheckedUpdateManyWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutTagsInputSchema),z.lazy(() => PracticeExamCreateWithoutTagsInputSchema).array(),z.lazy(() => PracticeExamUncheckedCreateWithoutTagsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PracticeExamCreateOrConnectWithoutTagsInputSchema),z.lazy(() => PracticeExamCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PracticeExamUpsertWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => PracticeExamUpsertWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PracticeExamUpdateWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => PracticeExamUpdateWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PracticeExamUpdateManyWithWhereWithoutTagsInputSchema),z.lazy(() => PracticeExamUpdateManyWithWhereWithoutTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PracticeExamScalarWhereInputSchema),z.lazy(() => PracticeExamScalarWhereInputSchema).array() ]).optional(),
}).strict();
export default PracticeExamUncheckedUpdateManyWithoutTagsNestedInputSchema;