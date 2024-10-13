import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamCreateWithoutTopicsInputSchema } from '../PracticeExamCreateWithoutTopicsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutTopicsInputSchema } from '../PracticeExamUncheckedCreateWithoutTopicsInputSchema.js';
import { PracticeExamCreateOrConnectWithoutTopicsInputSchema } from '../PracticeExamCreateOrConnectWithoutTopicsInputSchema.js';
import { PracticeExamWhereUniqueInputSchema } from '../PracticeExamWhereUniqueInputSchema.js';
export const PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema: z.ZodType<Prisma.PracticeExamUncheckedCreateNestedManyWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutTopicsInputSchema),z.lazy(() => PracticeExamCreateWithoutTopicsInputSchema).array(),z.lazy(() => PracticeExamUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PracticeExamCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => PracticeExamCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema;