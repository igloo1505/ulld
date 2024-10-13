import {
  DefinitionScalarWhereInputSchema
} from "./chunk-XRVSSVO4.js";
import {
  DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema
} from "./chunk-WYU7ALJH.js";
import {
  DefinitionUpdateManyMutationInputSchema
} from "./chunk-IBXMIRC4.js";

// src/database/inputTypeSchemas/DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema.ts
import { z } from "zod";
var DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema = z.object({
  where: z.lazy(() => DefinitionScalarWhereInputSchema),
  data: z.union([z.lazy(() => DefinitionUpdateManyMutationInputSchema), z.lazy(() => DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema)])
}).strict();
var DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema_default = DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema;

export {
  DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema,
  DefinitionUpdateManyWithWhereWithoutMdxNoteInputSchema_default
};
//# sourceMappingURL=chunk-K57X35PT.js.map