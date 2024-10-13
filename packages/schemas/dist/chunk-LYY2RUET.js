import {
  EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema
} from "./chunk-XPYL6IZZ.js";
import {
  EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema
} from "./chunk-EVBT4NKY.js";
import {
  EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema
} from "./chunk-WRUQQD6A.js";
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
  EquationScalarWhereInputSchema
} from "./chunk-KJCPJMDE.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-5LG4UXJA.js";

// src/database/inputTypeSchemas/EquationUncheckedUpdateManyWithoutRelatedValuesNestedInputSchema.ts
import { z } from "zod";
var EquationUncheckedUpdateManyWithoutRelatedValuesNestedInputSchema = z.object({
  create: z.union([z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema), z.lazy(() => EquationCreateWithoutRelatedValuesInputSchema).array(), z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema), z.lazy(() => EquationUncheckedCreateWithoutRelatedValuesInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema), z.lazy(() => EquationCreateOrConnectWithoutRelatedValuesInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema), z.lazy(() => EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => EquationWhereUniqueInputSchema), z.lazy(() => EquationWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EquationWhereUniqueInputSchema), z.lazy(() => EquationWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EquationWhereUniqueInputSchema), z.lazy(() => EquationWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EquationWhereUniqueInputSchema), z.lazy(() => EquationWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema), z.lazy(() => EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema), z.lazy(() => EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EquationScalarWhereInputSchema), z.lazy(() => EquationScalarWhereInputSchema).array()]).optional()
}).strict();
var EquationUncheckedUpdateManyWithoutRelatedValuesNestedInputSchema_default = EquationUncheckedUpdateManyWithoutRelatedValuesNestedInputSchema;

export {
  EquationUncheckedUpdateManyWithoutRelatedValuesNestedInputSchema,
  EquationUncheckedUpdateManyWithoutRelatedValuesNestedInputSchema_default
};
//# sourceMappingURL=chunk-LYY2RUET.js.map