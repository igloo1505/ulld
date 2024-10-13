import {
  MdxNoteUncheckedUpdateManyWithoutEquationsNestedInputSchema,
  SubjectUncheckedUpdateManyWithoutEquationsNestedInputSchema,
  TagUncheckedUpdateManyWithoutEquationsNestedInputSchema,
  TopicUncheckedUpdateManyWithoutEquationsNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  RelatedValuesUncheckedUpdateManyWithoutEquationsNestedInputSchema
} from "./chunk-MEUMHCV2.js";
import {
  EquationUpdatevariablesInputSchema
} from "./chunk-D7D7MTKD.js";
import {
  EquationUpdatekeywordsInputSchema
} from "./chunk-IFON35Z7.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ISNMLY2P.js";
import {
  InputJsonValueSchema
} from "./chunk-2JBXZQIV.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-KCVGTONZ.js.map