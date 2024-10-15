import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamUpdateWithoutTopicsInputSchema } from './PracticeExamUpdateWithoutTopicsInputSchema.js';
import { PracticeExamUncheckedUpdateWithoutTopicsInputSchema } from './PracticeExamUncheckedUpdateWithoutTopicsInputSchema.js';
import { PracticeExamCreateWithoutTopicsInputSchema } from './PracticeExamCreateWithoutTopicsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutTopicsInputSchema } from './PracticeExamUncheckedCreateWithoutTopicsInputSchema.js';
export const PracticeExamUpsertWithWhereUniqueWithoutTopicsInputSchema: z.ZodType<Prisma.PracticeExamUpsertWithWhereUniqueWithoutTopicsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PracticeExamUpdateWithoutTopicsInputSchema),z.lazy(() => PracticeExamUncheckedUpdateWithoutTopicsInputSchema) ]),
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutTopicsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutTopicsInputSchema) ]),
}).strict();
export default PracticeExamUpsertWithWhereUniqueWithoutTopicsInputSchema;