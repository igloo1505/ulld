import {
  MdxNoteUncheckedUpdateManyWithoutTopicsInputSchema
} from "./chunk-FQJMWU7X.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-2EVFJXLJ.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-MJK4Q22N.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutTopicsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema,
  MdxNoteUpdateManyWithWhereWithoutTopicsInputSchema_default
};
//# sourceMappingURL=chunk-XX27TM34.js.map