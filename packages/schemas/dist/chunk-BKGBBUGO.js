import {
  TagUncheckedUpdateManyWithoutQAPairInputSchema
} from "./chunk-H7526PL3.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3GYZKHEJ.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-NAMMQGQZ.js";

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutQAPairInputSchema.ts
import { z } from "zod";
var TagUpdateManyWithWhereWithoutQAPairInputSchema = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutQAPairInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutQAPairInputSchema_default = TagUpdateManyWithWhereWithoutQAPairInputSchema;

export {
  TagUpdateManyWithWhereWithoutQAPairInputSchema,
  TagUpdateManyWithWhereWithoutQAPairInputSchema_default
};
//# sourceMappingURL=chunk-BKGBBUGO.js.map