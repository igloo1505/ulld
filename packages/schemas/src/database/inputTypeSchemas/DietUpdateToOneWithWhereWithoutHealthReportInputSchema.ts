import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietWhereInputSchema } from './DietWhereInputSchema';
import { DietUpdateWithoutHealthReportInputSchema } from './DietUpdateWithoutHealthReportInputSchema';
import { DietUncheckedUpdateWithoutHealthReportInputSchema } from './DietUncheckedUpdateWithoutHealthReportInputSchema';

export const DietUpdateToOneWithWhereWithoutHealthReportInputSchema: z.ZodType<Prisma.DietUpdateToOneWithWhereWithoutHealthReportInput> = z.object({
  where: z.lazy(() => DietWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DietUpdateWithoutHealthReportInputSchema),z.lazy(() => DietUncheckedUpdateWithoutHealthReportInputSchema) ]),
}).strict();

export default DietUpdateToOneWithWhereWithoutHealthReportInputSchema;
