import {
  QAPairUncheckedUpdateManyWithoutTagsInputSchema
} from "./chunk-A5JC4D2A.js";
import {
  QAPairScalarWhereInputSchema
} from "./chunk-7AUS2GNW.js";
import {
  QAPairUpdateManyMutationInputSchema
} from "./chunk-LK437WDT.js";

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
//# sourceMappingURL=chunk-WJEJFYKD.js.map