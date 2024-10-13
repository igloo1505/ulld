import {
  TagUncheckedUpdateManyWithoutMdxNotesInputSchema
} from "./chunk-5NT5LYIN.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3BM6ZQWW.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-JIBZIWVY.js";

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
//# sourceMappingURL=chunk-QMU3OAQS.js.map