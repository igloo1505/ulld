import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietWhereInputSchema } from './DietWhereInputSchema.js';
import { DietUpdateWithoutHealthReportInputSchema } from './DietUpdateWithoutHealthReportInputSchema.js';
import { DietUncheckedUpdateWithoutHealthReportInputSchema } from './DietUncheckedUpdateWithoutHealthReportInputSchema.js';
export const DietUpdateToOneWithWhereWithoutHealthReportInputSchema: z.ZodType<Prisma.DietUpdateToOneWithWhereWithoutHealthReportInput> = z.object({
  where: z.lazy(() => DietWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DietUpdateWithoutHealthReportInputSchema),z.lazy(() => DietUncheckedUpdateWithoutHealthReportInputSchema) ]),
}).strict();
export default DietUpdateToOneWithWhereWithoutHealthReportInputSchema;