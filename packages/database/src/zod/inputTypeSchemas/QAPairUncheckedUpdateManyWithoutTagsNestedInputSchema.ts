import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairCreateWithoutTagsInputSchema } from './QAPairCreateWithoutTagsInputSchema';
import { QAPairUncheckedCreateWithoutTagsInputSchema } from './QAPairUncheckedCreateWithoutTagsInputSchema';
import { QAPairCreateOrConnectWithoutTagsInputSchema } from './QAPairCreateOrConnectWithoutTagsInputSchema';
import { QAPairUpsertWithWhereUniqueWithoutTagsInputSchema } from './QAPairUpsertWithWhereUniqueWithoutTagsInputSchema';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';
import { QAPairUpdateWithWhereUniqueWithoutTagsInputSchema } from './QAPairUpdateWithWhereUniqueWithoutTagsInputSchema';
import { QAPairUpdateManyWithWhereWithoutTagsInputSchema } from './QAPairUpdateManyWithWhereWithoutTagsInputSchema';
import { QAPairScalarWhereInputSchema } from './QAPairScalarWhereInputSchema';

export const QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema: z.ZodType<Prisma.QAPairUncheckedUpdateManyWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => QAPairCreateWithoutTagsInputSchema),z.lazy(() => QAPairCreateWithoutTagsInputSchema).array(),z.lazy(() => QAPairUncheckedCreateWithoutTagsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutTagsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QAPairCreateOrConnectWithoutTagsInputSchema),z.lazy(() => QAPairCreateOrConnectWithoutTagsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QAPairUpsertWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => QAPairUpsertWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QAPairUpdateWithWhereUniqueWithoutTagsInputSchema),z.lazy(() => QAPairUpdateWithWhereUniqueWithoutTagsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QAPairUpdateManyWithWhereWithoutTagsInputSchema),z.lazy(() => QAPairUpdateManyWithWhereWithoutTagsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QAPairScalarWhereInputSchema),z.lazy(() => QAPairScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema;
