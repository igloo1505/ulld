import {
  MdxNoteUncheckedUpdateWithoutDefinitionsInputSchema
} from "./chunk-2Q4HH4ON.js";
import {
  MdxNoteUpdateWithoutDefinitionsInputSchema
} from "./chunk-BLVEMMPD.js";
import {
  MdxNoteWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-6QN57N3U.js.map