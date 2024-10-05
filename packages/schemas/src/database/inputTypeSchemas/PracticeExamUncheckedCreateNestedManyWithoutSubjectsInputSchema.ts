import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamCreateWithoutSubjectsInputSchema } from './PracticeExamCreateWithoutSubjectsInputSchema';
import { PracticeExamUncheckedCreateWithoutSubjectsInputSchema } from './PracticeExamUncheckedCreateWithoutSubjectsInputSchema';
import { PracticeExamCreateOrConnectWithoutSubjectsInputSchema } from './PracticeExamCreateOrConnectWithoutSubjectsInputSchema';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';

export const PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema: z.ZodType<Prisma.PracticeExamUncheckedCreateNestedManyWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutSubjectsInputSchema),z.lazy(() => PracticeExamCreateWithoutSubjectsInputSchema).array(),z.lazy(() => PracticeExamUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PracticeExamCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => PracticeExamCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema;
