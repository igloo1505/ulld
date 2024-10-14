import {
  HealthReportUpsertWithWhereUniqueWithoutCurrentDietInputSchema
} from "./chunk-QYYYGHQU.js";
import {
  HealthReportUpdateWithWhereUniqueWithoutCurrentDietInputSchema
} from "./chunk-PHWATHLA.js";
import {
  HealthReportUpdateManyWithWhereWithoutCurrentDietInputSchema
} from "./chunk-ZBAD2464.js";
import {
  HealthReportScalarWhereInputSchema
} from "./chunk-UJUD2OLY.js";
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

// src/database/inputTypeSchemas/HealthReportUpdateManyWithoutCurrentDietNestedInputSchema.ts
import { z } from "zod";
var HealthReportUpdateManyWithoutCurrentDietNestedInputSchema = z.object({
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
var HealthReportUpdateManyWithoutCurrentDietNestedInputSchema_default = HealthReportUpdateManyWithoutCurrentDietNestedInputSchema;

export {
  HealthReportUpdateManyWithoutCurrentDietNestedInputSchema,
  HealthReportUpdateManyWithoutCurrentDietNestedInputSchema_default
};
//# sourceMappingURL=chunk-FGZ2CSMN.js.map