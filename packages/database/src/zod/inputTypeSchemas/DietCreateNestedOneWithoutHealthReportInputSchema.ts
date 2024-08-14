import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietCreateWithoutHealthReportInputSchema } from './DietCreateWithoutHealthReportInputSchema';
import { DietUncheckedCreateWithoutHealthReportInputSchema } from './DietUncheckedCreateWithoutHealthReportInputSchema';
import { DietCreateOrConnectWithoutHealthReportInputSchema } from './DietCreateOrConnectWithoutHealthReportInputSchema';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema';

export const DietCreateNestedOneWithoutHealthReportInputSchema: z.ZodType<Prisma.DietCreateNestedOneWithoutHealthReportInput> = z.object({
  create: z.union([ z.lazy(() => DietCreateWithoutHealthReportInputSchema),z.lazy(() => DietUncheckedCreateWithoutHealthReportInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DietCreateOrConnectWithoutHealthReportInputSchema).optional(),
  connect: z.lazy(() => DietWhereUniqueInputSchema).optional()
}).strict();

export default DietCreateNestedOneWithoutHealthReportInputSchema;
