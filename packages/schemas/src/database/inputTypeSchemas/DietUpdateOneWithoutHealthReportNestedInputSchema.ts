import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DietCreateWithoutHealthReportInputSchema } from './DietCreateWithoutHealthReportInputSchema.js';
import { DietUncheckedCreateWithoutHealthReportInputSchema } from './DietUncheckedCreateWithoutHealthReportInputSchema.js';
import { DietCreateOrConnectWithoutHealthReportInputSchema } from './DietCreateOrConnectWithoutHealthReportInputSchema.js';
import { DietUpsertWithoutHealthReportInputSchema } from './DietUpsertWithoutHealthReportInputSchema.js';
import { DietWhereInputSchema } from './DietWhereInputSchema.js';
import { DietWhereUniqueInputSchema } from './DietWhereUniqueInputSchema.js';
import { DietUpdateToOneWithWhereWithoutHealthReportInputSchema } from './DietUpdateToOneWithWhereWithoutHealthReportInputSchema.js';
import { DietUpdateWithoutHealthReportInputSchema } from './DietUpdateWithoutHealthReportInputSchema.js';
import { DietUncheckedUpdateWithoutHealthReportInputSchema } from './DietUncheckedUpdateWithoutHealthReportInputSchema.js';
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