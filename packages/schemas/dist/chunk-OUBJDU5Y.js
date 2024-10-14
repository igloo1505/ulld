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

// src/database/inputTypeSchemas/TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema.ts
import { z } from "zod";
var TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema = z.object({
  create: z.union([z.lazy(() => TimePeriodCreateWithoutDietInputSchema), z.lazy(() => TimePeriodCreateWithoutDietInputSchema).array(), z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema), z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema), z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  createMany: z.lazy(() => TimePeriodCreateManyDietInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => TimePeriodWhereUniqueInputSchema), z.lazy(() => TimePeriodWhereUniqueInputSchema).array()]).optional()
}).strict();
var TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema_default = TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema;

export {
  TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema,
  TimePeriodUncheckedCreateNestedManyWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-OUBJDU5Y.js.map