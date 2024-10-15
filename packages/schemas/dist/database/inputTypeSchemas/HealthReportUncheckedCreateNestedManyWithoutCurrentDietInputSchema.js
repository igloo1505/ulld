import { z } from 'zod';
import { HealthReportCreateWithoutCurrentDietInputSchema } from './HealthReportCreateWithoutCurrentDietInputSchema.js';
import { HealthReportUncheckedCreateWithoutCurrentDietInputSchema } from './HealthReportUncheckedCreateWithoutCurrentDietInputSchema.js';
import { HealthReportCreateOrConnectWithoutCurrentDietInputSchema } from './HealthReportCreateOrConnectWithoutCurrentDietInputSchema.js';
import { HealthReportCreateManyCurrentDietInputEnvelopeSchema } from './HealthReportCreateManyCurrentDietInputEnvelopeSchema.js';
import { HealthReportWhereUniqueInputSchema } from './HealthReportWhereUniqueInputSchema.js';
export const HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema = z.object({
    create: z.union([z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema), z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema).array(), z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema), z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => HealthReportCreateOrConnectWithoutCurrentDietInputSchema), z.lazy(() => HealthReportCreateOrConnectWithoutCurrentDietInputSchema).array()]).optional(),
    createMany: z.lazy(() => HealthReportCreateManyCurrentDietInputEnvelopeSchema).optional(),
    connect: z.union([z.lazy(() => HealthReportWhereUniqueInputSchema), z.lazy(() => HealthReportWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default HealthReportUncheckedCreateNestedManyWithoutCurrentDietInputSchema;
