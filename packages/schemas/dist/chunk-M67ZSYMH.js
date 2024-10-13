import {
  MdxNoteUncheckedUpdateManyWithoutToDoInputSchema
} from "./chunk-FKBFRAKU.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-2EVFJXLJ.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-MJK4Q22N.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutToDoInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutToDoInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutToDoInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutToDoInputSchema_default = MdxNoteUpdateManyWithWhereWithoutToDoInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutToDoInputSchema,
  MdxNoteUpdateManyWithWhereWithoutToDoInputSchema_default
};
//# sourceMappingURL=chunk-M67ZSYMH.js.map