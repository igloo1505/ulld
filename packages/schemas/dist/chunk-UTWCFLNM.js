import {
  TimePeriodScalarWhereInputSchema
} from "./chunk-AZDOXLE6.js";
import {
  TimePeriodUncheckedUpdateManyWithoutDietInputSchema
} from "./chunk-YWHRRSX6.js";
import {
  TimePeriodUpdateManyMutationInputSchema
} from "./chunk-NIIBC3QF.js";

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
//# sourceMappingURL=chunk-UTWCFLNM.js.map