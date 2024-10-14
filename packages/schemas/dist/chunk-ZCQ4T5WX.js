import {
  TagUncheckedUpdateManyWithoutIpynbNotesInputSchema
} from "./chunk-UBPJYH2E.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3GYZKHEJ.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-NAMMQGQZ.js";

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
import { z } from "zod";
var TagUpdateManyWithWhereWithoutIpynbNotesInputSchema = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = TagUpdateManyWithWhereWithoutIpynbNotesInputSchema;

export {
  TagUpdateManyWithWhereWithoutIpynbNotesInputSchema,
  TagUpdateManyWithWhereWithoutIpynbNotesInputSchema_default
};
//# sourceMappingURL=chunk-ZCQ4T5WX.js.map