import {
  QAPairUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-E47N6PSM.js";
import {
  QAPairScalarWhereInputSchema
} from "./chunk-MDZ4SLMX.js";
import {
  QAPairUpdateManyMutationInputSchema
} from "./chunk-XGJ4L2DJ.js";

// src/database/inputTypeSchemas/QAPairUpdateManyWithWhereWithoutSubjectsInputSchema.ts
import { z } from "zod";
var QAPairUpdateManyWithWhereWithoutSubjectsInputSchema = z.object({
  where: z.lazy(() => QAPairScalarWhereInputSchema),
  data: z.union([z.lazy(() => QAPairUpdateManyMutationInputSchema), z.lazy(() => QAPairUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var QAPairUpdateManyWithWhereWithoutSubjectsInputSchema_default = QAPairUpdateManyWithWhereWithoutSubjectsInputSchema;

export {
  QAPairUpdateManyWithWhereWithoutSubjectsInputSchema,
  QAPairUpdateManyWithWhereWithoutSubjectsInputSchema_default
};
//# sourceMappingURL=chunk-ISFXKUY6.js.map