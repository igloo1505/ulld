import {
  TagUncheckedUpdateManyInputSchema
} from "./chunk-ER7D6OTA.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-NAMMQGQZ.js";
import {
  TagWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-YX3AEYNA.js.map