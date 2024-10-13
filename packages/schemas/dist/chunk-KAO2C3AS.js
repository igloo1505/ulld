import {
  MdxNoteUncheckedUpdateManyWithoutEquationsInputSchema
} from "./chunk-H4CCJYPM.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-2EVFJXLJ.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-MJK4Q22N.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema,
  MdxNoteUpdateManyWithWhereWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-KAO2C3AS.js.map