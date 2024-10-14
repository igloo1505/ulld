import {
  FeatureRequestUpdateuserBaseInputSchema
} from "./chunk-O2N5IA22.js";
import {
  FeatureRequestUpdatecategoryInputSchema
} from "./chunk-E73MKCYZ.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/FeatureRequestUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var FeatureRequestUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  category: z.union([z.lazy(() => FeatureRequestUpdatecategoryInputSchema), z.string().array()]).optional(),
  userBase: z.union([z.lazy(() => FeatureRequestUpdateuserBaseInputSchema), z.string().array()]).optional(),
  receivedOn: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var FeatureRequestUncheckedUpdateManyInputSchema_default = FeatureRequestUncheckedUpdateManyInputSchema;

export {
  FeatureRequestUncheckedUpdateManyInputSchema,
  FeatureRequestUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-4L3U47KJ.js.map