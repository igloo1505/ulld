import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutMdxNotesInputSchema } from './SubjectCreateWithoutMdxNotesInputSchema';
import { SubjectUncheckedCreateWithoutMdxNotesInputSchema } from './SubjectUncheckedCreateWithoutMdxNotesInputSchema';
import { SubjectCreateOrConnectWithoutMdxNotesInputSchema } from './SubjectCreateOrConnectWithoutMdxNotesInputSchema';
import { SubjectUpsertWithWhereUniqueWithoutMdxNotesInputSchema } from './SubjectUpsertWithWhereUniqueWithoutMdxNotesInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithWhereUniqueWithoutMdxNotesInputSchema } from './SubjectUpdateWithWhereUniqueWithoutMdxNotesInputSchema';
import { SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema } from './SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';

export const SubjectUncheckedUpdateManyWithoutMdxNotesNestedInputSchema: z.ZodType<Prisma.SubjectUncheckedUpdateManyWithoutMdxNotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutMdxNotesInputSchema),z.lazy(() => SubjectCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubjectUpsertWithWhereUniqueWithoutMdxNotesInputSchema),z.lazy(() => SubjectUpsertWithWhereUniqueWithoutMdxNotesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubjectUpdateWithWhereUniqueWithoutMdxNotesInputSchema),z.lazy(() => SubjectUpdateWithWhereUniqueWithoutMdxNotesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema),z.lazy(() => SubjectUpdateManyWithWhereWithoutMdxNotesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubjectScalarWhereInputSchema),z.lazy(() => SubjectScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SubjectUncheckedUpdateManyWithoutMdxNotesNestedInputSchema;
