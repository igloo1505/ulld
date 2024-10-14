import {
  MdxNoteUpdateManyWithoutEquationsNestedInputSchema,
  SubjectUpdateManyWithoutEquationsNestedInputSchema,
  TagUpdateManyWithoutEquationsNestedInputSchema,
  TopicUpdateManyWithoutEquationsNestedInputSchema
} from "./chunk-5MUGYHMK.js";
import {
  RelatedValuesUpdateManyWithoutEquationsNestedInputSchema
} from "./chunk-4SYF634S.js";
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
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/EquationUpdateInputSchema.ts
import { z } from "zod";
var EquationUpdateInputSchema = z.object({
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
  relatedValues: z.lazy(() => RelatedValuesUpdateManyWithoutEquationsNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutEquationsNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutEquationsNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutEquationsNestedInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutEquationsNestedInputSchema).optional()
}).strict();
var EquationUpdateInputSchema_default = EquationUpdateInputSchema;

export {
  EquationUpdateInputSchema,
  EquationUpdateInputSchema_default
};
//# sourceMappingURL=chunk-VBSLA5GQ.js.map