import {
  TagUncheckedUpdateManyWithoutToDoInputSchema
} from "./chunk-VRSLSHNL.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3GYZKHEJ.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-NAMMQGQZ.js";

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutToDoInputSchema.ts
import { z } from "zod";
var TagUpdateManyWithWhereWithoutToDoInputSchema = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutToDoInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutToDoInputSchema_default = TagUpdateManyWithWhereWithoutToDoInputSchema;

export {
  TagUpdateManyWithWhereWithoutToDoInputSchema,
  TagUpdateManyWithWhereWithoutToDoInputSchema_default
};
//# sourceMappingURL=chunk-R3WKP2JE.js.map