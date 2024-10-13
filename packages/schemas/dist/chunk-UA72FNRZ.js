import {
  EquationCreateWithoutRelatedValuesInputSchema
} from "./chunk-54KKPBLF.js";
import {
  EquationUncheckedCreateWithoutRelatedValuesInputSchema
} from "./chunk-S46JRY2J.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-5LG4UXJA.js";

// src/database/inputTypeSchemas/EquationCreateOrConnectWithoutRelatedValuesInputSchema.ts
import { z } from "zod";
var EquationCreateOrConnectWithoutRelatedValuesInputSchema = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  create: z.union([z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema), z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema)])
}).strict();
var EquationCreateOrConnectWithoutRelatedValuesInputSchema_default = EquationCreateOrConnectWithoutRelatedValuesInputSchema;

export {
  EquationCreateOrConnectWithoutRelatedValuesInputSchema,
  EquationCreateOrConnectWithoutRelatedValuesInputSchema_default
};
//# sourceMappingURL=chunk-UA72FNRZ.js.map