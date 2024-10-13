import {
  MdxNoteUncheckedUpdateManyWithoutCitationsInputSchema
} from "./chunk-HSKWIBVH.js";
import {
  MdxNoteScalarWhereInputSchema
} from "./chunk-2EVFJXLJ.js";
import {
  MdxNoteUpdateManyMutationInputSchema
} from "./chunk-MJK4Q22N.js";

// src/database/inputTypeSchemas/MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema.ts
import { z } from "zod";
var MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema = z.object({
  where: z.lazy(() => MdxNoteScalarWhereInputSchema),
  data: z.union([z.lazy(() => MdxNoteUpdateManyMutationInputSchema), z.lazy(() => MdxNoteUncheckedUpdateManyWithoutCitationsInputSchema)])
}).strict();
var MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema_default = MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema;

export {
  MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema,
  MdxNoteUpdateManyWithWhereWithoutCitationsInputSchema_default
};
//# sourceMappingURL=chunk-J3IK64CD.js.map