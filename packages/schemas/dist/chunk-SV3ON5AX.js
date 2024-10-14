import {
  TagUncheckedUpdateManyWithoutMdxNotesInputSchema
} from "./chunk-RKM6K5VW.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3GYZKHEJ.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-NAMMQGQZ.js";

// src/database/inputTypeSchemas/TagUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
import { z } from "zod";
var TagUpdateManyWithWhereWithoutMdxNotesInputSchema = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([z.lazy(() => TagUpdateManyMutationInputSchema), z.lazy(() => TagUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var TagUpdateManyWithWhereWithoutMdxNotesInputSchema_default = TagUpdateManyWithWhereWithoutMdxNotesInputSchema;

export {
  TagUpdateManyWithWhereWithoutMdxNotesInputSchema,
  TagUpdateManyWithWhereWithoutMdxNotesInputSchema_default
};
//# sourceMappingURL=chunk-SV3ON5AX.js.map