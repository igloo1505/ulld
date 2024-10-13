import {
  MdxNoteUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-KRTJGZKY.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-2EVFJXLJ.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-MJK4Q22N.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutTagsInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutTagsInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutTagsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutTagsInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutTagsInputSchema,
  MdxNoteUpdateManyWithWhereWithoutTagsInputSchema_default
};
//# sourceMappingURL=chunk-3NU7JMIN.js.map