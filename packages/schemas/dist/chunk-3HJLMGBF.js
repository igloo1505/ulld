import {
  TagUncheckedUpdateManyInputSchema
} from "./chunk-RI33FQW6.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-JIBZIWVY.js";
import {
  TagWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/TagUpdateManyArgsSchema.ts
import { z } from "zod";
var TagUpdateManyArgsSchema = z.object({
  data: z.union([TagUpdateManyMutationInputSchema, TagUncheckedUpdateManyInputSchema]),
  where: TagWhereInputSchema.optional()
}).strict();
var TagUpdateManyArgsSchema_default = TagUpdateManyArgsSchema;

export {
  TagUpdateManyArgsSchema,
  TagUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-3HJLMGBF.js.map