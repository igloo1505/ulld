import {
  TagUncheckedUpdateManyWithoutQAPairInputSchema
} from "./chunk-D3KNDS7F.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3BM6ZQWW.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-JIBZIWVY.js";

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
//# sourceMappingURL=chunk-EAUMTYVX.js.map