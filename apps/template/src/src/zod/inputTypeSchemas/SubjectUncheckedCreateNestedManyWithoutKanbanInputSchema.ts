import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutKanbanInputSchema } from './SubjectCreateWithoutKanbanInputSchema';
import { SubjectUncheckedCreateWithoutKanbanInputSchema } from './SubjectUncheckedCreateWithoutKanbanInputSchema';
import { SubjectCreateOrConnectWithoutKanbanInputSchema } from './SubjectCreateOrConnectWithoutKanbanInputSchema';
import { SubjectCreateManyKanbanInputEnvelopeSchema } from './SubjectCreateManyKanbanInputEnvelopeSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';

export const SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateNestedManyWithoutKanbanInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutKanbanInputSchema),z.lazy(() => SubjectCreateWithoutKanbanInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutKanbanInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutKanbanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutKanbanInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutKanbanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubjectCreateManyKanbanInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema;
