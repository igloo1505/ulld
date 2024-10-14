import {
  DefinitionUncheckedUpdateWithoutMdxNoteInputSchema
} from "./chunk-OU42MM75.js";
import {
  DefinitionUpdateWithoutMdxNoteInputSchema
} from "./chunk-O3APKUG7.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-6Q2POV45.js";

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
//# sourceMappingURL=chunk-45JQWRKA.js.map