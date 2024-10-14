import {
  TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema
} from "./chunk-AARXSVR4.js";
import {
  TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema
} from "./chunk-JJQOCIOX.js";
import {
  TimePeriodUpdateManyWithWhereWithoutDietInputSchema
} from "./chunk-ZHC35BBX.js";
import {
  TimePeriodScalarWhereInputSchema
} from "./chunk-WQZ3Q2QI.js";
import {
  TimePeriodCreateManyDietInputEnvelopeSchema
} from "./chunk-ZWHELD3Z.js";
import {
  TimePeriodCreateOrConnectWithoutDietInputSchema
} from "./chunk-MX6ZMMPL.js";
import {
  TimePeriodCreateWithoutDietInputSchema
} from "./chunk-2BZL7FCW.js";
import {
  TimePeriodUncheckedCreateWithoutDietInputSchema
} from "./chunk-CYJOV7OZ.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-7ISI4WFK.js";

// src/database/inputTypeSchemas/TimePeriodUpdateManyWithoutDietNestedInputSchema.ts
import { z } from "zod";
var TimePeriodUpdateManyWithoutDietNestedInputSchema = z.object({
  create: z.union([z.lazy(() => TimePeriodCreateWithoutDietInputSchema), z.lazy(() => TimePeriodCreateWithoutDietInputSchema).array(), z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema), z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema), z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema), z.lazy(() => TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  createMany: z.lazy(() => TimePeriodCreateManyDietInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => TimePeriodWhereUniqueInputSchema), z.lazy(() => TimePeriodWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TimePeriodWhereUniqueInputSchema), z.lazy(() => TimePeriodWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TimePeriodWhereUniqueInputSchema), z.lazy(() => TimePeriodWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TimePeriodWhereUniqueInputSchema), z.lazy(() => TimePeriodWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema), z.lazy(() => TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TimePeriodUpdateManyWithWhereWithoutDietInputSchema), z.lazy(() => TimePeriodUpdateManyWithWhereWithoutDietInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TimePeriodScalarWhereInputSchema), z.lazy(() => TimePeriodScalarWhereInputSchema).array()]).optional()
}).strict();
var TimePeriodUpdateManyWithoutDietNestedInputSchema_default = TimePeriodUpdateManyWithoutDietNestedInputSchema;

export {
  TimePeriodUpdateManyWithoutDietNestedInputSchema,
  TimePeriodUpdateManyWithoutDietNestedInputSchema_default
};
//# sourceMappingURL=chunk-5JQY6MFJ.js.map