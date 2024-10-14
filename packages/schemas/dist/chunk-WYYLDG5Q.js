import {
  EquationCreateWithoutRelatedValuesInputSchema
} from "./chunk-74CO3DDW.js";
import {
  EquationUncheckedCreateWithoutRelatedValuesInputSchema
} from "./chunk-7KSYZ7WN.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-ZHPM3YVS.js";

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
//# sourceMappingURL=chunk-WYYLDG5Q.js.map