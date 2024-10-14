import {
  DefinitionScalarWhereInputSchema
} from "./chunk-DEVF2DKA.js";
import {
  DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema
} from "./chunk-GPHZIWL4.js";
import {
  DefinitionUpdateManyMutationInputSchema
} from "./chunk-M6OP4QMI.js";

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
//# sourceMappingURL=chunk-FB7EBXS4.js.map