import {
  TimePeriodScalarWhereInputSchema
} from "./chunk-WQZ3Q2QI.js";
import {
  TimePeriodUncheckedUpdateManyWithoutDietInputSchema
} from "./chunk-SZZ6ROCM.js";
import {
  TimePeriodUpdateManyMutationInputSchema
} from "./chunk-HDHROYTU.js";

// src/database/inputTypeSchemas/TimePeriodUpdateManyWithWhereWithoutDietInputSchema.ts
import { z } from "zod";
var TimePeriodUpdateManyWithWhereWithoutDietInputSchema = z.object({
  where: z.lazy(() => TimePeriodScalarWhereInputSchema),
  data: z.union([z.lazy(() => TimePeriodUpdateManyMutationInputSchema), z.lazy(() => TimePeriodUncheckedUpdateManyWithoutDietInputSchema)])
}).strict();
var TimePeriodUpdateManyWithWhereWithoutDietInputSchema_default = TimePeriodUpdateManyWithWhereWithoutDietInputSchema;

export {
  TimePeriodUpdateManyWithWhereWithoutDietInputSchema,
  TimePeriodUpdateManyWithWhereWithoutDietInputSchema_default
};
//# sourceMappingURL=chunk-ZHC35BBX.js.map