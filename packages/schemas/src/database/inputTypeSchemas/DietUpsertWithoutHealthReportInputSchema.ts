import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietUpdateWithoutHealthReportInputSchema } from './DietUpdateWithoutHealthReportInputSchema';
import { DietUncheckedUpdateWithoutHealthReportInputSchema } from './DietUncheckedUpdateWithoutHealthReportInputSchema';
import { DietCreateWithoutHealthReportInputSchema } from './DietCreateWithoutHealthReportInputSchema';
import { DietUncheckedCreateWithoutHealthReportInputSchema } from './DietUncheckedCreateWithoutHealthReportInputSchema';
import { DietWhereInputSchema } from './DietWhereInputSchema';

export const DietUpsertWithoutHealthReportInputSchema: z.ZodType<Prisma.DietUpsertWithoutHealthReportInput> = z.object({
  update: z.union([ z.lazy(() => DietUpdateWithoutHealthReportInputSchema),z.lazy(() => DietUncheckedUpdateWithoutHealthReportInputSchema) ]),
  create: z.union([ z.lazy(() => DietCreateWithoutHealthReportInputSchema),z.lazy(() => DietUncheckedCreateWithoutHealthReportInputSchema) ]),
  where: z.lazy(() => DietWhereInputSchema).optional()
}).strict();

export default DietUpsertWithoutHealthReportInputSchema;
