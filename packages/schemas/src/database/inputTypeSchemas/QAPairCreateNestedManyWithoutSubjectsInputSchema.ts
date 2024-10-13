import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairCreateWithoutSubjectsInputSchema } from '../QAPairCreateWithoutSubjectsInputSchema.js';
import { QAPairUncheckedCreateWithoutSubjectsInputSchema } from '../QAPairUncheckedCreateWithoutSubjectsInputSchema.js';
import { QAPairCreateOrConnectWithoutSubjectsInputSchema } from '../QAPairCreateOrConnectWithoutSubjectsInputSchema.js';
import { QAPairWhereUniqueInputSchema } from '../QAPairWhereUniqueInputSchema.js';
export const QAPairCreateNestedManyWithoutSubjectsInputSchema: z.ZodType<Prisma.QAPairCreateNestedManyWithoutSubjectsInput> = z.object({
  create: z.union([ z.lazy(() => QAPairCreateWithoutSubjectsInputSchema),z.lazy(() => QAPairCreateWithoutSubjectsInputSchema).array(),z.lazy(() => QAPairUncheckedCreateWithoutSubjectsInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutSubjectsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QAPairCreateOrConnectWithoutSubjectsInputSchema),z.lazy(() => QAPairCreateOrConnectWithoutSubjectsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default QAPairCreateNestedManyWithoutSubjectsInputSchema;