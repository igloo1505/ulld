import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-SG2ZRBF2.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema.ts
import { z } from "zod";
var SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema_default = SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema;

export {
  SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema,
  SubjectUncheckedUpdateManyWithoutIpynbNotesInputSchema_default
};
//# sourceMappingURL=chunk-XYLKBXZJ.js.map