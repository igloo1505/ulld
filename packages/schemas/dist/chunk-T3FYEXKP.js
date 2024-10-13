import {
  FeatureRequestUpdateuserBaseInputSchema
} from "./chunk-K3OP3BW3.js";
import {
  FeatureRequestUpdatecategoryInputSchema
} from "./chunk-4F6ERW5I.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/FeatureRequestUpdateManyMutationInputSchema.ts
import { z } from "zod";
var FeatureRequestUpdateManyMutationInputSchema = z.object({
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  category: z.union([z.lazy(() => FeatureRequestUpdatecategoryInputSchema), z.string().array()]).optional(),
  userBase: z.union([z.lazy(() => FeatureRequestUpdateuserBaseInputSchema), z.string().array()]).optional(),
  receivedOn: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var FeatureRequestUpdateManyMutationInputSchema_default = FeatureRequestUpdateManyMutationInputSchema;

export {
  FeatureRequestUpdateManyMutationInputSchema,
  FeatureRequestUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-T3FYEXKP.js.map