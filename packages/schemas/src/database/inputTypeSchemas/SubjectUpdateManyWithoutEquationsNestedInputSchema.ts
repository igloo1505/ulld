import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutEquationsInputSchema } from './SubjectCreateWithoutEquationsInputSchema';
import { SubjectUncheckedCreateWithoutEquationsInputSchema } from './SubjectUncheckedCreateWithoutEquationsInputSchema';
import { SubjectCreateOrConnectWithoutEquationsInputSchema } from './SubjectCreateOrConnectWithoutEquationsInputSchema';
import { SubjectUpsertWithWhereUniqueWithoutEquationsInputSchema } from './SubjectUpsertWithWhereUniqueWithoutEquationsInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithWhereUniqueWithoutEquationsInputSchema } from './SubjectUpdateWithWhereUniqueWithoutEquationsInputSchema';
import { SubjectUpdateManyWithWhereWithoutEquationsInputSchema } from './SubjectUpdateManyWithWhereWithoutEquationsInputSchema';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';

export const SubjectUpdateManyWithoutEquationsNestedInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithoutEquationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutEquationsInputSchema),z.lazy(() => SubjectCreateWithoutEquationsInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutEquationsInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutEquationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutEquationsInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutEquationsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubjectUpsertWithWhereUniqueWithoutEquationsInputSchema),z.lazy(() => SubjectUpsertWithWhereUniqueWithoutEquationsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubjectUpdateWithWhereUniqueWithoutEquationsInputSchema),z.lazy(() => SubjectUpdateWithWhereUniqueWithoutEquationsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubjectUpdateManyWithWhereWithoutEquationsInputSchema),z.lazy(() => SubjectUpdateManyWithWhereWithoutEquationsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubjectScalarWhereInputSchema),z.lazy(() => SubjectScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SubjectUpdateManyWithoutEquationsNestedInputSchema;
