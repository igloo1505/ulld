import {
  MdxNoteUncheckedUpdateManyWithoutReadingListInputSchema
} from "./chunk-RMZ5JJ5Z.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-2EVFJXLJ.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-MJK4Q22N.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutReadingListInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema_default = MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema,
  MdxNoteUpdateManyWithWhereWithoutReadingListInputSchema_default
};
//# sourceMappingURL=chunk-U4R3SHTO.js.map