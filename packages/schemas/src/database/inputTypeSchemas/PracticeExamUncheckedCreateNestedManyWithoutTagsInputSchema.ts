import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamCreateWithoutTagsInputSchema } from '../PracticeExamCreateWithoutTagsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutTagsInputSchema } from '../PracticeExamUncheckedCreateWithoutTagsInputSchema.js';
import { PracticeExamCreateOrConnectWithoutTagsInputSchema } from '../PracticeExamCreateOrConnectWithoutTagsInputSchema.js';
import { PracticeExamWhereUniqueInputSchema } from '../PracticeExamWhereUniqueInputSchema.js';
export const PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.PracticeExamUncheckedCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutTagsInputSchema),z.lazy(() => PracticeExamCreateWithoutTagsInputSchema).array(),z.lazy(() => PracticeExamUncheckedCreateWithoutTagsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PracticeExamCreateOrConnectWithoutTagsInputSchema),z.lazy(() => PracticeExamCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema;