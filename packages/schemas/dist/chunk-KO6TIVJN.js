import {
  MdxNoteUncheckedUpdateManyWithoutSequentialListInputSchema
} from "./chunk-JD3NTAQV.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-2EVFJXLJ.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-MJK4Q22N.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSequentialListInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema_default = MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema,
  MdxNoteUpdateManyWithWhereWithoutSequentialListInputSchema_default
};
//# sourceMappingURL=chunk-KO6TIVJN.js.map