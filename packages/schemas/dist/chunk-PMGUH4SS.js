import {
  TagUncheckedUpdateManyWithoutIpynbNotesInputSchema
} from "./chunk-2SPFTRX6.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3BM6ZQWW.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-JIBZIWVY.js";

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
//# sourceMappingURL=chunk-PMGUH4SS.js.map