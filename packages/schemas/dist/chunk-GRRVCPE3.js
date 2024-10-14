import {
  EquationCreateOrConnectWithoutRelatedValuesInputSchema
} from "./chunk-WYYLDG5Q.js";
import {
  EquationCreateWithoutRelatedValuesInputSchema
} from "./chunk-74CO3DDW.js";
import {
  EquationUncheckedCreateWithoutRelatedValuesInputSchema
} from "./chunk-7KSYZ7WN.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-ZHPM3YVS.js";

// src/database/inputTypeSchemas/EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema.ts
import { z } from "zod";
var EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema = z.object({
  create: z.union([z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema), z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema).array(), z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema), z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema), z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EquationWhereUniqueInputSchema), z.lazy(() => EquationWhereUniqueInputSchema).array()]).optional()
}).strict();
var EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema_default = EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema;

export {
  EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema,
  EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema_default
};
//# sourceMappingURL=chunk-GRRVCPE3.js.map