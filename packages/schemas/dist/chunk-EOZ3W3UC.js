import {
  EquationCreateOrConnectWithoutRelatedValuesInputSchema
} from "./chunk-UA72FNRZ.js";
import {
  EquationCreateWithoutRelatedValuesInputSchema
} from "./chunk-54KKPBLF.js";
import {
  EquationUncheckedCreateWithoutRelatedValuesInputSchema
} from "./chunk-S46JRY2J.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-5LG4UXJA.js";

// src/database/inputTypeSchemas/EquationCreateNestedManyWithoutRelatedValuesInputSchema.ts
import { z } from "zod";
var EquationCreateNestedManyWithoutRelatedValuesInputSchema = z.object({
  create: z.union([z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema), z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema).array(), z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema), z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema), z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EquationWhereUniqueInputSchema), z.lazy(() => EquationWhereUniqueInputSchema).array()]).optional()
}).strict();
var EquationCreateNestedManyWithoutRelatedValuesInputSchema_default = EquationCreateNestedManyWithoutRelatedValuesInputSchema;

export {
  EquationCreateNestedManyWithoutRelatedValuesInputSchema,
  EquationCreateNestedManyWithoutRelatedValuesInputSchema_default
};
//# sourceMappingURL=chunk-EOZ3W3UC.js.map