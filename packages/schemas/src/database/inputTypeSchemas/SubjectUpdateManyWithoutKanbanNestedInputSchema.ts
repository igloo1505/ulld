import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutKanbanInputSchema } from './SubjectCreateWithoutKanbanInputSchema';
import { SubjectUncheckedCreateWithoutKanbanInputSchema } from './SubjectUncheckedCreateWithoutKanbanInputSchema';
import { SubjectCreateOrConnectWithoutKanbanInputSchema } from './SubjectCreateOrConnectWithoutKanbanInputSchema';
import { SubjectUpsertWithWhereUniqueWithoutKanbanInputSchema } from './SubjectUpsertWithWhereUniqueWithoutKanbanInputSchema';
import { SubjectCreateManyKanbanInputEnvelopeSchema } from './SubjectCreateManyKanbanInputEnvelopeSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithWhereUniqueWithoutKanbanInputSchema } from './SubjectUpdateWithWhereUniqueWithoutKanbanInputSchema';
import { SubjectUpdateManyWithWhereWithoutKanbanInputSchema } from './SubjectUpdateManyWithWhereWithoutKanbanInputSchema';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';

export const SubjectUpdateManyWithoutKanbanNestedInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithoutKanbanNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutKanbanInputSchema),z.lazy(() => SubjectCreateWithoutKanbanInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutKanbanInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutKanbanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutKanbanInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutKanbanInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubjectUpsertWithWhereUniqueWithoutKanbanInputSchema),z.lazy(() => SubjectUpsertWithWhereUniqueWithoutKanbanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubjectCreateManyKanbanInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubjectUpdateWithWhereUniqueWithoutKanbanInputSchema),z.lazy(() => SubjectUpdateWithWhereUniqueWithoutKanbanInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubjectUpdateManyWithWhereWithoutKanbanInputSchema),z.lazy(() => SubjectUpdateManyWithWhereWithoutKanbanInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubjectScalarWhereInputSchema),z.lazy(() => SubjectScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SubjectUpdateManyWithoutKanbanNestedInputSchema;
