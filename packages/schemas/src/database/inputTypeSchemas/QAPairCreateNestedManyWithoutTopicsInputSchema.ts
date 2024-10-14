import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairCreateWithoutTopicsInputSchema } from './QAPairCreateWithoutTopicsInputSchema';
import { QAPairUncheckedCreateWithoutTopicsInputSchema } from './QAPairUncheckedCreateWithoutTopicsInputSchema';
import { QAPairCreateOrConnectWithoutTopicsInputSchema } from './QAPairCreateOrConnectWithoutTopicsInputSchema';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';

export const QAPairCreateNestedManyWithoutTopicsInputSchema: z.ZodType<Prisma.QAPairCreateNestedManyWithoutTopicsInput> = z.object({
  create: z.union([ z.lazy(() => QAPairCreateWithoutTopicsInputSchema),z.lazy(() => QAPairCreateWithoutTopicsInputSchema).array(),z.lazy(() => QAPairUncheckedCreateWithoutTopicsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutTopicsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QAPairCreateOrConnectWithoutTopicsInputSchema),z.lazy(() => QAPairCreateOrConnectWithoutTopicsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QAPairCreateNestedManyWithoutTopicsInputSchema;
