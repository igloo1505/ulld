import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutKanbanInputSchema } from './TagCreateWithoutKanbanInputSchema';
import { TagUncheckedCreateWithoutKanbanInputSchema } from './TagUncheckedCreateWithoutKanbanInputSchema';
import { TagCreateOrConnectWithoutKanbanInputSchema } from './TagCreateOrConnectWithoutKanbanInputSchema';
import { TagUpsertWithWhereUniqueWithoutKanbanInputSchema } from './TagUpsertWithWhereUniqueWithoutKanbanInputSchema';
import { TagCreateManyKanbanInputEnvelopeSchema } from './TagCreateManyKanbanInputEnvelopeSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutKanbanInputSchema } from './TagUpdateWithWhereUniqueWithoutKanbanInputSchema';
import { TagUpdateManyWithWhereWithoutKanbanInputSchema } from './TagUpdateManyWithWhereWithoutKanbanInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUpdateManyWithoutKanbanNestedInputSchema: z.ZodType<Prisma.TagUpdateManyWithoutKanbanNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutKanbanInputSchema),z.lazy(() => TagCreateWithoutKanbanInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutKanbanInputSchema),z.lazy(() => TagUncheckedCreateWithoutKanbanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutKanbanInputSchema),z.lazy(() => TagCreateOrConnectWithoutKanbanInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutKanbanInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutKanbanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCreateManyKanbanInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutKanbanInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutKanbanInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutKanbanInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutKanbanInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagUpdateManyWithoutKanbanNestedInputSchema;
