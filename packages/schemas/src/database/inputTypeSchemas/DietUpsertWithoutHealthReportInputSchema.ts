import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietUpdateWithoutHealthReportInputSchema } from './DietUpdateWithoutHealthReportInputSchema.js';
import { DietUncheckedUpdateWithoutHealthReportInputSchema } from './DietUncheckedUpdateWithoutHealthReportInputSchema.js';
import { DietCreateWithoutHealthReportInputSchema } from './DietCreateWithoutHealthReportInputSchema.js';
import { DietUncheckedCreateWithoutHealthReportInputSchema } from './DietUncheckedCreateWithoutHealthReportInputSchema.js';
import { DietWhereInputSchema } from './DietWhereInputSchema.js';
export const DietUpsertWithoutHealthReportInputSchema: z.ZodType<Prisma.DietUpsertWithoutHealthReportInput> = z.object({
  update: z.union([ z.lazy(() => DietUpdateWithoutHealthReportInputSchema),z.lazy(() => DietUncheckedUpdateWithoutHealthReportInputSchema) ]),
  create: z.union([ z.lazy(() => DietCreateWithoutHealthReportInputSchema),z.lazy(() => DietUncheckedCreateWithoutHealthReportInputSchema) ]),
  where: z.lazy(() => DietWhereInputSchema).optional()
}).strict();
export default DietUpsertWithoutHealthReportInputSchema;