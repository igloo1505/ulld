import {
  FeatureRequestUpdateuserBaseInputSchema
} from "./chunk-O2N5IA22.js";
import {
  FeatureRequestUpdatecategoryInputSchema
} from "./chunk-E73MKCYZ.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/FeatureRequestUpdateInputSchema.ts
import { z } from "zod";
var FeatureRequestUpdateInputSchema = z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  category: z.union([z.lazy(() => FeatureRequestUpdatecategoryInputSchema), z.string().array()]).optional(),
  userBase: z.union([z.lazy(() => FeatureRequestUpdateuserBaseInputSchema), z.string().array()]).optional(),
  receivedOn: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var FeatureRequestUpdateInputSchema_default = FeatureRequestUpdateInputSchema;

export {
  FeatureRequestUpdateInputSchema,
  FeatureRequestUpdateInputSchema_default
};
//# sourceMappingURL=chunk-I7KOWP6W.js.map