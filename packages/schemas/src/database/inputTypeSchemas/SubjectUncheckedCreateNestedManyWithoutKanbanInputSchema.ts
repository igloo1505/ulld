import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectCreateWithoutKanbanInputSchema } from './SubjectCreateWithoutKanbanInputSchema.js';
import { SubjectUncheckedCreateWithoutKanbanInputSchema } from './SubjectUncheckedCreateWithoutKanbanInputSchema.js';
import { SubjectCreateOrConnectWithoutKanbanInputSchema } from './SubjectCreateOrConnectWithoutKanbanInputSchema.js';
import { SubjectCreateManyKanbanInputEnvelopeSchema } from './SubjectCreateManyKanbanInputEnvelopeSchema.js';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema.js';
export const SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateNestedManyWithoutKanbanInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutKanbanInputSchema),z.lazy(() => SubjectCreateWithoutKanbanInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutKanbanInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutKanbanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutKanbanInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutKanbanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubjectCreateManyKanbanInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema;