import {
  FeatureRequestUpdateuserBaseInputSchema
} from "./chunk-K3OP3BW3.js";
import {
  FeatureRequestUpdatecategoryInputSchema
} from "./chunk-4F6ERW5I.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/FeatureRequestUncheckedUpdateInputSchema.ts
import { z } from "zod";
var FeatureRequestUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  category: z.union([z.lazy(() => FeatureRequestUpdatecategoryInputSchema), z.string().array()]).optional(),
  userBase: z.union([z.lazy(() => FeatureRequestUpdateuserBaseInputSchema), z.string().array()]).optional(),
  receivedOn: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var FeatureRequestUncheckedUpdateInputSchema_default = FeatureRequestUncheckedUpdateInputSchema;

export {
  FeatureRequestUncheckedUpdateInputSchema,
  FeatureRequestUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-Z54BN3DU.js.map