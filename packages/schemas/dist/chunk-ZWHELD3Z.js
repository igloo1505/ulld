import {
  TimePeriodCreateManyDietInputSchema
} from "./chunk-4W4TUDSE.js";

// src/database/inputTypeSchemas/TimePeriodCreateManyDietInputEnvelopeSchema.ts
import { z } from "zod";
var TimePeriodCreateManyDietInputEnvelopeSchema = z.object({
  data: z.union([z.lazy(() => TimePeriodCreateManyDietInputSchema), z.lazy(() => TimePeriodCreateManyDietInputSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
var TimePeriodCreateManyDietInputEnvelopeSchema_default = TimePeriodCreateManyDietInputEnvelopeSchema;

export {
  TimePeriodCreateManyDietInputEnvelopeSchema,
  TimePeriodCreateManyDietInputEnvelopeSchema_default
};
//# sourceMappingURL=chunk-ZWHELD3Z.js.map