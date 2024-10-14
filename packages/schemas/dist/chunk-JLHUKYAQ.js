import {
  TagUncheckedUpdateManyWithoutEquationsInputSchema
} from "./chunk-VDSZLHQJ.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3GYZKHEJ.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-NAMMQGQZ.js";

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutEquationsInputSchema.ts
import { z } from "zod";
var TagUpdateManyWithWhereWithoutEquationsInputSchema = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutEquationsInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutEquationsInputSchema_default = TagUpdateManyWithWhereWithoutEquationsInputSchema;

export {
  TagUpdateManyWithWhereWithoutEquationsInputSchema,
  TagUpdateManyWithWhereWithoutEquationsInputSchema_default
};
//# sourceMappingURL=chunk-JLHUKYAQ.js.map