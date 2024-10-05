import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamCreateWithoutTagsInputSchema } from './PracticeExamCreateWithoutTagsInputSchema';
import { PracticeExamUncheckedCreateWithoutTagsInputSchema } from './PracticeExamUncheckedCreateWithoutTagsInputSchema';
import { PracticeExamCreateOrConnectWithoutTagsInputSchema } from './PracticeExamCreateOrConnectWithoutTagsInputSchema';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';

export const PracticeExamCreateNestedManyWithoutTagsInputSchema: z.ZodType<Prisma.PracticeExamCreateNestedManyWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutTagsInputSchema),z.lazy(() => PracticeExamCreateWithoutTagsInputSchema).array(),z.lazy(() => PracticeExamUncheckedCreateWithoutTagsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PracticeExamCreateOrConnectWithoutTagsInputSchema),z.lazy(() => PracticeExamCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PracticeExamCreateNestedManyWithoutTagsInputSchema;
