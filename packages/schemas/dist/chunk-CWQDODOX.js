import {
  MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema
} from "./chunk-4IGC6XJW.js";
import {
  MdxNoteUpdateWithoutDefinitionsInputSchema
} from "./chunk-EDGL47HD.js";
import {
  MdxNoteWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/inputTypeSchemas/MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema = z.object({
  where: z.lazy(() => MdxNoteWhereInputSchema).optional(),
  data: z.union([z.lazy(() => MdxNoteUpdateWithoutDefinitionsInputSchema), z.lazy(() => MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema)])
}).strict();
var MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema_default = MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema;

export {
  MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema,
  MdxNoteUpdateToOneWithWhereWithoutDefinitionsInputSchema_default
};
//# sourceMappingURL=chunk-CWQDODOX.js.map