import {
  TimePeriodUncheckedUpdateWithoutDietInputSchema
} from "./chunk-5YNSY6UX.js";
import {
  TimePeriodUpdateWithoutDietInputSchema
} from "./chunk-SSSKNJRG.js";
import {
  TimePeriodCreateWithoutDietInputSchema
} from "./chunk-2BZL7FCW.js";
import {
  TimePeriodUncheckedCreateWithoutDietInputSchema
} from "./chunk-CYJOV7OZ.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-7ISI4WFK.js";

// src/database/inputTypeSchemas/TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema.ts
import { z } from "zod";
var TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema = z.object({
  where: z.lazy(() => TimePeriodWhereUniqueInputSchema),
  update: z.union([z.lazy(() => TimePeriodUpdateWithoutDietInputSchema), z.lazy(() => TimePeriodUncheckedUpdateWithoutDietInputSchema)]),
  create: z.union([z.lazy(() => TimePeriodCreateWithoutDietInputSchema), z.lazy(() => TimePeriodUncheckedCreateWithoutDietInputSchema)])
}).strict();
var TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema_default = TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema;

export {
  TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema,
  TimePeriodUpsertWithWhereUniqueWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-AARXSVR4.js.map