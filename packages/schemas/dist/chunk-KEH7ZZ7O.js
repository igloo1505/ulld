import {
  EquationUncheckedUpdateWithoutRelatedValuesInputSchema
} from "./chunk-DTAVN2HK.js";
import {
  EquationUpdateWithoutRelatedValuesInputSchema
} from "./chunk-RGMWAPTR.js";
import {
  EquationCreateWithoutRelatedValuesInputSchema
} from "./chunk-74CO3DDW.js";
import {
  EquationUncheckedCreateWithoutRelatedValuesInputSchema
} from "./chunk-7KSYZ7WN.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-ZHPM3YVS.js";

// src/database/inputTypeSchemas/EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema.ts
import { z } from "zod";
var EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema = z.object({
  where: z.lazy(() => EquationWhereUniqueInputSchema),
  update: z.union([z.lazy(() => EquationUpdateWithoutRelatedValuesInputSchema), z.lazy(() => EquationUncheckedUpdateWithoutRelatedValuesInputSchema)]),
  create: z.union([z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema), z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema)])
}).strict();
var EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema_default = EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema;

export {
  EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema,
  EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema_default
};
//# sourceMappingURL=chunk-KEH7ZZ7O.js.map