import {
  MdxNoteUpdateManyWithoutEquationsNestedInputSchema,
  SubjectUpdateManyWithoutEquationsNestedInputSchema,
  TagUpdateManyWithoutEquationsNestedInputSchema,
  TopicUpdateManyWithoutEquationsNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
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
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/EquationUpdateWithoutRelatedValuesInputSchema.ts
import { z } from "zod";
var EquationUpdateWithoutRelatedValuesInputSchema = z.object({
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
  tags: z.lazy(() => TagUpdateManyWithoutEquationsNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutEquationsNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutEquationsNestedInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutEquationsNestedInputSchema).optional()
}).strict();
var EquationUpdateWithoutRelatedValuesInputSchema_default = EquationUpdateWithoutRelatedValuesInputSchema;

export {
  EquationUpdateWithoutRelatedValuesInputSchema,
  EquationUpdateWithoutRelatedValuesInputSchema_default
};
//# sourceMappingURL=chunk-J2QN2SFM.js.map