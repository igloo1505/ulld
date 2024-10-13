import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietCreateWithoutHealthReportInputSchema } from '../DietCreateWithoutHealthReportInputSchema.js';
import { DietUncheckedCreateWithoutHealthReportInputSchema } from '../DietUncheckedCreateWithoutHealthReportInputSchema.js';
import { DietCreateOrConnectWithoutHealthReportInputSchema } from '../DietCreateOrConnectWithoutHealthReportInputSchema.js';
import { DietWhereUniqueInputSchema } from '../DietWhereUniqueInputSchema.js';
export const DietCreateNestedOneWithoutHealthReportInputSchema: z.ZodType<Prisma.DietCreateNestedOneWithoutHealthReportInput> = z.object({
  create: z.union([ z.lazy(() => DietCreateWithoutHealthReportInputSchema),z.lazy(() => DietUncheckedCreateWithoutHealthReportInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DietCreateOrConnectWithoutHealthReportInputSchema).optional(),
  connect: z.lazy(() => DietWhereUniqueInputSchema).optional()
}).strict();
export default DietCreateNestedOneWithoutHealthReportInputSchema;