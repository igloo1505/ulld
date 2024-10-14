import {
  EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema
} from "./chunk-W57LSVIW.js";
import {
  EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema
} from "./chunk-NKXH7LPT.js";
import {
  EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema
} from "./chunk-KEH7ZZ7O.js";
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
  EquationScalarWhereInputSchema
} from "./chunk-34ND25JL.js";
import {
  EquationWhereUniqueInputSchema
} from "./chunk-ZHPM3YVS.js";

// src/database/inputTypeSchemas/EquationUpdateManyWithoutRelatedValuesNestedInputSchema.ts
import { z } from "zod";
var EquationUpdateManyWithoutRelatedValuesNestedInputSchema = z.object({
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
var EquationUpdateManyWithoutRelatedValuesNestedInputSchema_default = EquationUpdateManyWithoutRelatedValuesNestedInputSchema;

export {
  EquationUpdateManyWithoutRelatedValuesNestedInputSchema,
  EquationUpdateManyWithoutRelatedValuesNestedInputSchema_default
};
//# sourceMappingURL=chunk-DG473AKZ.js.map