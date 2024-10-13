import {
  TimePeriodUncheckedUpdateWithoutDietInputSchema
} from "./chunk-F5V2543K.js";
import {
  TimePeriodUpdateWithoutDietInputSchema
} from "./chunk-MLWCHZIM.js";
import {
  TimePeriodCreateWithoutDietInputSchema
} from "./chunk-ZVLKBSUN.js";
import {
  TimePeriodUncheckedCreateWithoutDietInputSchema
} from "./chunk-UQHMJYHV.js";
import {
  TimePeriodWhereUniqueInputSchema
} from "./chunk-OOJJ4BEA.js";

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
//# sourceMappingURL=chunk-4XQURL3I.js.map