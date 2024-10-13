import {
  QAPairUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-WKBVALKX.js";
import {
  QAPairScalarWhereInputSchema
} from "./chunk-MDZ4SLMX.js";
import {
  QAPairUpdateManyMutationInputSchema
} from "./chunk-XGJ4L2DJ.js";

// src/database/inputTypeSchemas/QAPairUpdateManyWithWhereWithoutTagsInputSchema.ts
import { z } from "zod";
var QAPairUpdateManyWithWhereWithoutTagsInputSchema = z.object({
  where: z.lazy(() => QAPairScalarWhereInputSchema),
  data: z.union([z.lazy(() => QAPairUpdateManyMutationInputSchema), z.lazy(() => QAPairUncheckedUpdateManyWithoutTagsInputSchema)])
}).strict();
var QAPairUpdateManyWithWhereWithoutTagsInputSchema_default = QAPairUpdateManyWithWhereWithoutTagsInputSchema;

export {
  QAPairUpdateManyWithWhereWithoutTagsInputSchema,
  QAPairUpdateManyWithWhereWithoutTagsInputSchema_default
};
//# sourceMappingURL=chunk-TET2BCMU.js.map