import {
  EquationUncheckedUpdateWithoutRelatedValuesInputSchema
} from "./chunk-O7XAKYUW.js";
import {
  EquationUpdateWithoutRelatedValuesInputSchema
} from "./chunk-J2QN2SFM.js";
import {
  EquationCreateWithoutRelatedValuesInputSchema
} from "./chunk-54KKPBLF.js";
import {
  EquationUncheckedCreateWithoutRelatedValuesInputSchema
} from "./chunk-S46JRY2J.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-5LG4UXJA.js";

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
//# sourceMappingURL=chunk-WRUQQD6A.js.map