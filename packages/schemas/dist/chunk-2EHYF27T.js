import {
  TagUncheckedUpdateManyWithoutToDoInputSchema
} from "./chunk-WOR7O6YE.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3BM6ZQWW.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-JIBZIWVY.js";

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
//# sourceMappingURL=chunk-2EHYF27T.js.map