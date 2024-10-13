import {
  HealthReportCreateOrConnectWithoutCurrentDietInputSchema
} from "./chunk-XHRR6S3G.js";
import {
  HealthReportCreateManyCurrentDietInputEnvelopeSchema
} from "./chunk-VE4RL7WY.js";
import {
  HealthReportCreateWithoutCurrentDietInputSchema
} from "./chunk-VC2H7SCP.js";
import {
  HealthReportUncheckedCreateWithoutCurrentDietInputSchema
} from "./chunk-PEGJXQ57.js";
import {
  HealthReportWhereUniqueInputSchema
} from "./chunk-S23BCLNO.js";

// src/database/inputTypeSchemas/HealthReportCreateNestedManyWithoutCurrentDietInputSchema.ts
import { z } from "zod";
var HealthReportCreateNestedManyWithoutCurrentDietInputSchema = z.object({
  create: z.union([z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema), z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema).array(), z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema), z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HealthReportCreateOrConnectWithoutCurrentDietInputSchema), z.lazy(() => HealthReportCreateOrConnectWithoutCurrentDietInputSchema).array()]).optional(),
  createMany: z.lazy(() => HealthReportCreateManyCurrentDietInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => HealthReportWhereUniqueInputSchema), z.lazy(() => HealthReportWhereUniqueInputSchema).array()]).optional()
}).strict();
var HealthReportCreateNestedManyWithoutCurrentDietInputSchema_default = HealthReportCreateNestedManyWithoutCurrentDietInputSchema;

export {
  HealthReportCreateNestedManyWithoutCurrentDietInputSchema,
  HealthReportCreateNestedManyWithoutCurrentDietInputSchema_default
};
//# sourceMappingURL=chunk-IJOSCISU.js.map