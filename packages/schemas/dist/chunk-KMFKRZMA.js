import {
  CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema
} from "./chunk-E3FV6DLM.js";
import {
  CitationsGroupScalarWhereInputSchema
} from "./chunk-KJWZWDNU.js";
import {
  CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema
} from "./chunk-ZE467GKC.js";
import {
  CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema
} from "./chunk-UYI32W4B.js";
import {
  CitationsGroupCreateOrConnectWithoutEntriesInputSchema
} from "./chunk-4WHN63N2.js";
import {
  CitationsGroupCreateWithoutEntriesInputSchema
} from "./chunk-FP3F2CVP.js";
import {
  CitationsGroupUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-MSTTSJCA.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-GY5DALUC.js";

// src/database/inputTypeSchemas/CitationsGroupUpdateManyWithoutEntriesNestedInputSchema.ts
import { z } from "zod";
var CitationsGroupUpdateManyWithoutEntriesNestedInputSchema = z.object({
  create: z.union([z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema), z.lazy(() => CitationsGroupCreateWithoutEntriesInputSchema).array(), z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUncheckedCreateWithoutEntriesInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema), z.lazy(() => CitationsGroupCreateOrConnectWithoutEntriesInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => CitationsGroupWhereUniqueInputSchema), z.lazy(() => CitationsGroupWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CitationsGroupWhereUniqueInputSchema), z.lazy(() => CitationsGroupWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CitationsGroupWhereUniqueInputSchema), z.lazy(() => CitationsGroupWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CitationsGroupWhereUniqueInputSchema), z.lazy(() => CitationsGroupWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema), z.lazy(() => CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CitationsGroupScalarWhereInputSchema), z.lazy(() => CitationsGroupScalarWhereInputSchema).array()]).optional()
}).strict();
var CitationsGroupUpdateManyWithoutEntriesNestedInputSchema_default = CitationsGroupUpdateManyWithoutEntriesNestedInputSchema;

export {
  CitationsGroupUpdateManyWithoutEntriesNestedInputSchema,
  CitationsGroupUpdateManyWithoutEntriesNestedInputSchema_default
};
//# sourceMappingURL=chunk-KMFKRZMA.js.map