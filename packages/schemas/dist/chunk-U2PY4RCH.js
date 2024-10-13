import {
  TagUncheckedUpdateManyWithoutEquationsInputSchema
} from "./chunk-7Q2RWR3D.js";
import {
  TagScalarWhereInputSchema
} from "./chunk-3BM6ZQWW.js";
import {
  TagUpdateManyMutationInputSchema
} from "./chunk-JIBZIWVY.js";

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
//# sourceMappingURL=chunk-U2PY4RCH.js.map