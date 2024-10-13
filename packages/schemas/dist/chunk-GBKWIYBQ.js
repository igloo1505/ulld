import {
  CitationsGroupUpdateManyWithWhereWithoutEntriesInputSchema
} from "./chunk-ENLSSJTT.js";
import {
  CitationsGroupScalarWhereInputSchema
} from "./chunk-2NKVRZKT.js";
import {
  CitationsGroupUpsertWithWhereUniqueWithoutEntriesInputSchema
} from "./chunk-HNWSCF54.js";
import {
  CitationsGroupUpdateWithWhereUniqueWithoutEntriesInputSchema
} from "./chunk-AGU7GRQG.js";
import {
  CitationsGroupCreateOrConnectWithoutEntriesInputSchema
} from "./chunk-52MLDDPB.js";
import {
  CitationsGroupCreateWithoutEntriesInputSchema
} from "./chunk-OJZIAFSR.js";
import {
  CitationsGroupUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-KRVE65LP.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-S2NAK5Q6.js";

// src/database/inputTypeSchemas/CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema.ts
import { z } from "zod";
var CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema = z.object({
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
var CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema_default = CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema;

export {
  CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema,
  CitationsGroupUncheckedUpdateManyWithoutEntriesNestedInputSchema_default
};
//# sourceMappingURL=chunk-GBKWIYBQ.js.map