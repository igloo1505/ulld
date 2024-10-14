import {
  QAPairUncheckedUpdateManyWithoutSubjectsInputSchema
} from "./chunk-73OKD5QL.js";
import {
  QAPairScalarWhereInputSchema
} from "./chunk-7AUS2GNW.js";
import {
  QAPairUpdateManyMutationInputSchema
} from "./chunk-LK437WDT.js";

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
//# sourceMappingURL=chunk-O2KHL5I3.js.map