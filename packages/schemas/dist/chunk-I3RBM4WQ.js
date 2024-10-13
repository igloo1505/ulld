import {
  TimePeriodUncheckedUpdateWithoutDietInputSchema
} from "./chunk-F5V2543K.js";
import {
  TimePeriodUpdateWithoutDietInputSchema
} from "./chunk-MLWCHZIM.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-OOJJ4BEA.js";

// src/database/inputTypeSchemas/TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema.ts
import { z } from "zod";
var TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema = z.object({
  where: z.lazy(() => TimePeriodWhereUniqueInputSchema),
  data: z.union([z.lazy(() => TimePeriodUpdateWithoutDietInputSchema), z.lazy(() => TimePeriodUncheckedUpdateWithoutDietInputSchema)])
}).strict();
var TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema_default = TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema;

export {
  TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema,
  TimePeriodUpdateWithWhereUniqueWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-I3RBM4WQ.js.map