import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietWhereUniqueInputSchema } from '../DietWhereUniqueInputSchema.js';
import { DietCreateWithoutHealthReportInputSchema } from '../DietCreateWithoutHealthReportInputSchema.js';
import { DietUncheckedCreateWithoutHealthReportInputSchema } from '../DietUncheckedCreateWithoutHealthReportInputSchema.js';
export const DietCreateOrConnectWithoutHealthReportInputSchema: z.ZodType<Prisma.DietCreateOrConnectWithoutHealthReportInput> = z.object({
  where: z.lazy(() => DietWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DietCreateWithoutHealthReportInputSchema),z.lazy(() => DietUncheckedCreateWithoutHealthReportInputSchema) ]),
}).strict();
export default DietCreateOrConnectWithoutHealthReportInputSchema;