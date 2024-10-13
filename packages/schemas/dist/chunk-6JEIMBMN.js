import {
  MdxNoteUncheckedCreateNestedManyWithoutEquationsInputSchema,
  SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema,
  TagUncheckedCreateNestedManyWithoutEquationsInputSchema,
  TopicUncheckedCreateNestedManyWithoutEquationsInputSchema
} from "./chunk-JOZ37TAM.js";
import {
  RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema
} from "./chunk-ELGDKFBH.js";
import {
  EquationCreatevariablesInputSchema
} from "./chunk-3GAXENVZ.js";
import {
  EquationCreatekeywordsInputSchema
} from "./chunk-NUMZANMA.js";
import {
  JsonNullValueInputSchema
} from "./chunk-ISNMLY2P.js";
import {
  InputJsonValueSchema
} from "./chunk-2JBXZQIV.js";

// src/database/inputTypeSchemas/EquationUncheckedCreateInputSchema.ts
import { z } from "zod";
var EquationUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  equationId: z.string().optional().nullable(),
  title: z.string(),
  desc: z.string().optional().nullable(),
  content: z.string(),
  asPython: z.string().optional().nullable(),
  variableLegend: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
  variables: z.union([z.lazy(() => EquationCreatevariablesInputSchema), z.string().array()]).optional(),
  keywords: z.union([z.lazy(() => EquationCreatekeywordsInputSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  relatedValues: z.lazy(() => RelatedValuesUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutEquationsInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutEquationsInputSchema).optional()
}).strict();
var EquationUncheckedCreateInputSchema_default = EquationUncheckedCreateInputSchema;

export {
  EquationUncheckedCreateInputSchema,
  EquationUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-6JEIMBMN.js.map