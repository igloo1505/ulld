import {
  DefinitionUncheckedUpdateWithoutMdxNoteInputSchema
} from "./chunk-Q7JKDXHM.js";
import {
  DefinitionUpdateWithoutMdxNoteInputSchema
} from "./chunk-BSNY5SNE.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-M33QKPZF.js";

// src/database/inputTypeSchemas/DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema.ts
import { z } from "zod";
var DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema = z.object({
  where: z.lazy(() => DefinitionWhereUniqueInputSchema),
  data: z.union([z.lazy(() => DefinitionUpdateWithoutMdxNoteInputSchema), z.lazy(() => DefinitionUncheckedUpdateWithoutMdxNoteInputSchema)])
}).strict();
var DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema_default = DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema;

export {
  DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema,
  DefinitionUpdateWithWhereUniqueWithoutMdxNoteInputSchema_default
};
//# sourceMappingURL=chunk-GEGBDIAD.js.map