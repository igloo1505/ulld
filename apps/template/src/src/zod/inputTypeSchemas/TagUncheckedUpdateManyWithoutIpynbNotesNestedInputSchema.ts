import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutIpynbNotesInputSchema } from './TagCreateWithoutIpynbNotesInputSchema';
import { TagUncheckedCreateWithoutIpynbNotesInputSchema } from './TagUncheckedCreateWithoutIpynbNotesInputSchema';
import { TagCreateOrConnectWithoutIpynbNotesInputSchema } from './TagCreateOrConnectWithoutIpynbNotesInputSchema';
import { TagUpsertWithWhereUniqueWithoutIpynbNotesInputSchema } from './TagUpsertWithWhereUniqueWithoutIpynbNotesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithWhereUniqueWithoutIpynbNotesInputSchema } from './TagUpdateWithWhereUniqueWithoutIpynbNotesInputSchema';
import { TagUpdateManyWithWhereWithoutIpynbNotesInputSchema } from './TagUpdateManyWithWhereWithoutIpynbNotesInputSchema';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';

export const TagUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutIpynbNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutIpynbNotesInputSchema),z.lazy(() => TagCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => TagUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => TagCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TagUpsertWithWhereUniqueWithoutIpynbNotesInputSchema),z.lazy(() => TagUpsertWithWhereUniqueWithoutIpynbNotesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TagUpdateWithWhereUniqueWithoutIpynbNotesInputSchema),z.lazy(() => TagUpdateWithWhereUniqueWithoutIpynbNotesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TagUpdateManyWithWhereWithoutIpynbNotesInputSchema),z.lazy(() => TagUpdateManyWithWhereWithoutIpynbNotesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TagScalarWhereInputSchema),z.lazy(() => TagScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TagUncheckedUpdateManyWithoutIpynbNotesNestedInputSchema;
