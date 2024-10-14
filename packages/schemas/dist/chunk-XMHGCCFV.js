import {
  MdxNoteUncheckedUpdateManyWithoutEquationsNestedInputSchema,
  SubjectUncheckedUpdateManyWithoutEquationsNestedInputSchema,
  TagUncheckedUpdateManyWithoutEquationsNestedInputSchema,
  TopicUncheckedUpdateManyWithoutEquationsNestedInputSchema
} from "./chunk-5MUGYHMK.js";
import {
  RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema
} from "./chunk-ODJ6SRKN.js";
import {
  EquationUpdatevariablesInputSchema
} from "./chunk-TJ6LKQUQ.js";
import {
  EquationUpdatekeywordsInputSchema
} from "./chunk-C4BQGMUK.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ZXTFXMHW.js";
import {
  InputJsonValueSchema
} from "./chunk-T77FYKUT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/EquationUncheckedUpdateInputSchema.ts
import { z } from "zod";
var EquationUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  equationId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  desc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  asPython: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  variableLegend: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  variables: z.union([z.lazy(() => EquationUpdatevariablesInputSchema), z.string().array()]).optional(),
  keywords: z.union([z.lazy(() => EquationUpdatekeywordsInputSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  relatedValues: z.lazy(() => RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutEquationsNestedInputSchema).optional()
}).strict();
var EquationUncheckedUpdateInputSchema_default = EquationUncheckedUpdateInputSchema;

export {
  EquationUncheckedUpdateInputSchema,
  EquationUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-XMHGCCFV.js.map