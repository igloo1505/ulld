import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DietCreateWithoutHealthReportInputSchema } from './DietCreateWithoutHealthReportInputSchema';
import { DietUncheckedCreateWithoutHealthReportInputSchema } from './DietUncheckedCreateWithoutHealthReportInputSchema';
import { DietCreateOrConnectWithoutHealthReportInputSchema } from './DietCreateOrConnectWithoutHealthReportInputSchema';
import { DietUpsertWithoutHealthReportInputSchema } from './DietUpsertWithoutHealthReportInputSchema';
import { DietWhereInputSchema } from './DietWhereInputSchema';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema';
import { DietUpdateToOneWithWhereWithoutHealthReportInputSchema } from './DietUpdateToOneWithWhereWithoutHealthReportInputSchema';
import { DietUpdateWithoutHealthReportInputSchema } from './DietUpdateWithoutHealthReportInputSchema';
import { DietUncheckedUpdateWithoutHealthReportInputSchema } from './DietUncheckedUpdateWithoutHealthReportInputSchema';

export const DietUpdateOneWithoutHealthReportNestedInputSchema: z.ZodType<Prisma.DietUpdateOneWithoutHealthReportNestedInput> = z.object({
  create: z.union([ z.lazy(() => DietCreateWithoutHealthReportInputSchema),z.lazy(() => DietUncheckedCreateWithoutHealthReportInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DietCreateOrConnectWithoutHealthReportInputSchema).optional(),
  upsert: z.lazy(() => DietUpsertWithoutHealthReportInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => DietWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => DietWhereInputSchema) ]).optional(),
  connect: z.lazy(() => DietWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DietUpdateToOneWithWhereWithoutHealthReportInputSchema),z.lazy(() => DietUpdateWithoutHealthReportInputSchema),z.lazy(() => DietUncheckedUpdateWithoutHealthReportInputSchema) ]).optional(),
}).strict();

export default DietUpdateOneWithoutHealthReportNestedInputSchema;
