import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutPracticeExamInputSchema } from './TagCreateWithoutPracticeExamInputSchema';
import { TagUncheckedCreateWithoutPracticeExamInputSchema } from './TagUncheckedCreateWithoutPracticeExamInputSchema';
import { TagCreateOrConnectWithoutPracticeExamInputSchema } from './TagCreateOrConnectWithoutPracticeExamInputSchema';
import { TagUpsertWithWhereUniqueWithoutPracticeExamInputSchema } from './TagUpsertWithWhereUniqueWithoutPracticeExamInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutPracticeExamInputSchema } from './TagUpdateWithWhereUniqueWithoutPracticeExamInputSchema';
import { TagUpdateManyWithWhereWithoutPracticeExamInputSchema } from './TagUpdateManyWithWhereWithoutPracticeExamInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUpdateManyWithoutPracticeExamNestedInputSchema: z.ZodType<Prisma.TagUpdateManyWithoutPracticeExamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutPracticeExamInputSchema),z.lazy(() => TagCreateWithoutPracticeExamInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutPracticeExamInputSchema),z.lazy(() => TagUncheckedCreateWithoutPracticeExamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutPracticeExamInputSchema),z.lazy(() => TagCreateOrConnectWithoutPracticeExamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutPracticeExamInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutPracticeExamInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutPracticeExamInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutPracticeExamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutPracticeExamInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutPracticeExamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagUpdateManyWithoutPracticeExamNestedInputSchema;
