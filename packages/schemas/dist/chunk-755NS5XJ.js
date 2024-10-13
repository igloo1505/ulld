import {
  TimePeriodCreateWithoutDietInputSchema
} from "./chunk-ZVLKBSUN.js";
import {
  TimePeriodUncheckedCreateWithoutDietInputSchema
} from "./chunk-UQHMJYHV.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-OOJJ4BEA.js";

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
//# sourceMappingURL=chunk-755NS5XJ.js.map