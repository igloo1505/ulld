import {
  TimePeriodCreateWithoutDietInputSchema
} from "./chunk-2BZL7FCW.js";
import {
  TimePeriodUncheckedCreateWithoutDietInputSchema
} from "./chunk-CYJOV7OZ.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-7ISI4WFK.js";

// src/database/inputTypeSchemas/TimePeriodCreateOrConnectWithoutDietInputSchema.ts
import { z } from "zod";
var TimePeriodCreateOrConnectWithoutDietInputSchema = z.object({
  where: z.lazy(() => TimePeriodWhereUniqueInputSchema),
  create: z.union([z.lazy(() => TimePeriodCreateWithoutDietInputSchema), z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema)])
}).strict();
var TimePeriodCreateOrConnectWithoutDietInputSchema_default = TimePeriodCreateOrConnectWithoutDietInputSchema;

export {
  TimePeriodCreateOrConnectWithoutDietInputSchema,
  TimePeriodCreateOrConnectWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-MX6ZMMPL.js.map