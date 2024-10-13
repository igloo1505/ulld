import {
  HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema
} from "./chunk-ESO4E6RM.js";
import {
  HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema
} from "./chunk-YNROBWJS.js";
import {
  HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema
} from "./chunk-Z7LLYRV6.js";
import {
  HealthReportScalarWhereInputSchema
} from "./chunk-VTRCTWP7.js";
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

// src/database/inputTypeSchemas/HealthReportUncheckedUpdateManyWithoutCurrentDietNestedInputSchema.ts
import { z } from "zod";
var HealthReportUncheckedUpdateManyWithoutCurrentDietNestedInputSchema = z.object({
  create: z.union([z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema), z.lazy(() => HealthReportCreateWithoutCurrentDietInputSchema).array(), z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema), z.lazy(() => HealthReportUncheckedCreateWithoutCurrentDietInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HealthReportCreateOrConnectWithoutCurrentDietInputSchema), z.lazy(() => HealthReportCreateOrConnectWithoutCurrentDietInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema), z.lazy(() => HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema).array()]).optional(),
  createMany: z.lazy(() => HealthReportCreateManyCurrentDietInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => HealthReportWhereUniqueInputSchema), z.lazy(() => HealthReportWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => HealthReportWhereUniqueInputSchema), z.lazy(() => HealthReportWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => HealthReportWhereUniqueInputSchema), z.lazy(() => HealthReportWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => HealthReportWhereUniqueInputSchema), z.lazy(() => HealthReportWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema), z.lazy(() => HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema), z.lazy(() => HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => HealthReportScalarWhereInputSchema), z.lazy(() => HealthReportScalarWhereInputSchema).array()]).optional()
}).strict();
var HealthReportUncheckedUpdateManyWithoutCurrentDietNestedInputSchema_default = HealthReportUncheckedUpdateManyWithoutCurrentDietNestedInputSchema;

export {
  HealthReportUncheckedUpdateManyWithoutCurrentDietNestedInputSchema,
  HealthReportUncheckedUpdateManyWithoutCurrentDietNestedInputSchema_default
};
//# sourceMappingURL=chunk-JVOWAW5I.js.map