import {
  MdxNoteCreateNestedManyWithoutEquationsInputSchema,
  SubjectCreateNestedManyWithoutEquationsInputSchema,
  TagCreateNestedManyWithoutEquationsInputSchema,
  TopicCreateNestedManyWithoutEquationsInputSchema
} from "./chunk-JOZ37TAM.js";
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

// src/database/inputTypeSchemas/EquationCreateWithoutRelatedValuesInputSchema.ts
import { z } from "zod";
var EquationCreateWithoutRelatedValuesInputSchema = z.object({
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
  tags: z.lazy(() => TagCreateNestedManyWithoutEquationsInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutEquationsInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutEquationsInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutEquationsInputSchema).optional()
}).strict();
var EquationCreateWithoutRelatedValuesInputSchema_default = EquationCreateWithoutRelatedValuesInputSchema;

export {
  EquationCreateWithoutRelatedValuesInputSchema,
  EquationCreateWithoutRelatedValuesInputSchema_default
};
//# sourceMappingURL=chunk-54KKPBLF.js.map