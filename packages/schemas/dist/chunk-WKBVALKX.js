import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/QAPairUncheckedUpdateManyWithoutTagsInputSchema.ts
import { z } from "zod";
var QAPairUncheckedUpdateManyWithoutTagsInputSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  question: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  answer: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  secondaryLabel: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  correctCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  inCorrectCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var QAPairUncheckedUpdateManyWithoutTagsInputSchema_default = QAPairUncheckedUpdateManyWithoutTagsInputSchema;

export {
  QAPairUncheckedUpdateManyWithoutTagsInputSchema,
  QAPairUncheckedUpdateManyWithoutTagsInputSchema_default
};
//# sourceMappingURL=chunk-WKBVALKX.js.map