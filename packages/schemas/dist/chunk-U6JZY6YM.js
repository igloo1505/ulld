import {
  HealthReportCreateOrConnectWithoutCurrentDietInputSchema
} from "./chunk-TTSQK4GS.js";
import {
  HealthReportCreateManyCurrentDietInputEnvelopeSchema
} from "./chunk-LMS6SAPK.js";
import {
  HealthReportCreateWithoutCurrentDietInputSchema
} from "./chunk-KYVFT7YD.js";
import {
  HealthReportUncheckedCreateWithoutCurrentDietInputSchema
} from "./chunk-ALI3VRL3.js";
import {
  HealthReportWhereUniqueInputSchema
} from "./chunk-LZNACEQH.js";

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
//# sourceMappingURL=chunk-U6JZY6YM.js.map