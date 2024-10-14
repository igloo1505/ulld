import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamCreateWithoutTopicsInputSchema } from './PracticeExamCreateWithoutTopicsInputSchema';
import { PracticeExamUncheckedCreateWithoutTopicsInputSchema } from './PracticeExamUncheckedCreateWithoutTopicsInputSchema';
import { PracticeExamCreateOrConnectWithoutTopicsInputSchema } from './PracticeExamCreateOrConnectWithoutTopicsInputSchema';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';

export const PracticeExamCreateNestedManyWithoutTopicsInputSchema: z.ZodType<Prisma.PracticeExamCreateNestedManyWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutTopicsInputSchema),z.lazy(() => PracticeExamCreateWithoutTopicsInputSchema).array(),z.lazy(() => PracticeExamUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PracticeExamCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => PracticeExamCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PracticeExamCreateNestedManyWithoutTopicsInputSchema;
