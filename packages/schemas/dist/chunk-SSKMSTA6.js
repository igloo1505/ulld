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

// src/database/inputTypeSchemas/TimePeriodCreateNestedManyWithoutDietInputSchema.ts
import { z } from "zod";
var TimePeriodCreateNestedManyWithoutDietInputSchema = z.object({
  create: z.union([z.lazy(() => TimePeriodCreateWithoutDietInputSchema), z.lazy(() => TimePeriodCreateWithoutDietInputSchema).array(), z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema), z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema), z.lazy(() => TimePeriodCreateOrConnectWithoutDietInputSchema).array()]).optional(),
  createMany: z.lazy(() => TimePeriodCreateManyDietInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => TimePeriodWhereUniqueInputSchema), z.lazy(() => TimePeriodWhereUniqueInputSchema).array()]).optional()
}).strict();
var TimePeriodCreateNestedManyWithoutDietInputSchema_default = TimePeriodCreateNestedManyWithoutDietInputSchema;

export {
  TimePeriodCreateNestedManyWithoutDietInputSchema,
  TimePeriodCreateNestedManyWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-SSKMSTA6.js.map