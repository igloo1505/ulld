import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema';
import { DietCreateWithoutHealthReportInputSchema } from './DietCreateWithoutHealthReportInputSchema';
import { DietUncheckedCreateWithoutHealthReportInputSchema } from './DietUncheckedCreateWithoutHealthReportInputSchema';

export const DietCreateOrConnectWithoutHealthReportInputSchema: z.ZodType<Prisma.DietCreateOrConnectWithoutHealthReportInput> = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DietCreateWithoutHealthReportInputSchema),z.lazy(() => DietUncheckedCreateWithoutHealthReportInputSchema) ]),
}).strict();

export default DietCreateOrConnectWithoutHealthReportInputSchema;
