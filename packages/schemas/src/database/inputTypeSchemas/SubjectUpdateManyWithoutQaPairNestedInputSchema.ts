import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutQaPairInputSchema } from './SubjectCreateWithoutQaPairInputSchema';
import { SubjectUncheckedCreateWithoutQaPairInputSchema } from './SubjectUncheckedCreateWithoutQaPairInputSchema';
import { SubjectCreateOrConnectWithoutQaPairInputSchema } from './SubjectCreateOrConnectWithoutQaPairInputSchema';
import { SubjectUpsertWithWhereUniqueWithoutQaPairInputSchema } from './SubjectUpsertWithWhereUniqueWithoutQaPairInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithWhereUniqueWithoutQaPairInputSchema } from './SubjectUpdateWithWhereUniqueWithoutQaPairInputSchema';
import { SubjectUpdateManyWithWhereWithoutQaPairInputSchema } from './SubjectUpdateManyWithWhereWithoutQaPairInputSchema';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';

export const SubjectUpdateManyWithoutQaPairNestedInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithoutQaPairNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutQaPairInputSchema),z.lazy(() => SubjectCreateWithoutQaPairInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutQaPairInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutQaPairInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutQaPairInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutQaPairInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubjectUpsertWithWhereUniqueWithoutQaPairInputSchema),z.lazy(() => SubjectUpsertWithWhereUniqueWithoutQaPairInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubjectUpdateWithWhereUniqueWithoutQaPairInputSchema),z.lazy(() => SubjectUpdateWithWhereUniqueWithoutQaPairInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubjectUpdateManyWithWhereWithoutQaPairInputSchema),z.lazy(() => SubjectUpdateManyWithWhereWithoutQaPairInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubjectScalarWhereInputSchema),z.lazy(() => SubjectScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SubjectUpdateManyWithoutQaPairNestedInputSchema;
