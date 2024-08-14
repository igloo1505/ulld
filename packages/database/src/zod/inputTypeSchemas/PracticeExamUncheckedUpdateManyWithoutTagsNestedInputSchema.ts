import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamCreateWithoutTagsInputSchema } from './PracticeExamCreateWithoutTagsInputSchema';
import { PracticeExamUncheckedCreateWithoutTagsInputSchema } from './PracticeExamUncheckedCreateWithoutTagsInputSchema';
import { PracticeExamCreateOrConnectWithoutTagsInputSchema } from './PracticeExamCreateOrConnectWithoutTagsInputSchema';
import { PracticeExamUpsertWithWhereUniqueWithoutTagsInputSchema } from './PracticeExamUpsertWithWhereUniqueWithoutTagsInputSchema';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamUpdateWithWhereUniqueWithoutTagsInputSchema } from './PracticeExamUpdateWithWhereUniqueWithoutTagsInputSchema';
import { PracticeExamUpdateManyWithWhereWithoutTagsInputSchema } from './PracticeExamUpdateManyWithWhereWithoutTagsInputSchema';
import { PracticeExamScalarWhereInputSchema } from './PracticeExamScalarWhereInputSchema';

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
