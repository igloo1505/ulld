import {
  TimePeriodUncheckedUpdateWithoutDietInputSchema
} from "./chunk-5YNSY6UX.js";
import {
  TimePeriodUpdateWithoutDietInputSchema
} from "./chunk-SSSKNJRG.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-7ISI4WFK.js";

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
//# sourceMappingURL=chunk-JJQOCIOX.js.map