import {
  ServingUpsertWithWhereUniqueWithoutItemInputSchema
} from "./chunk-WZVXK2VQ.js";
import {
  ServingUpdateWithWhereUniqueWithoutItemInputSchema
} from "./chunk-ADXXXKPT.js";
import {
  ServingUpdateManyWithWhereWithoutItemInputSchema
} from "./chunk-U4ZAQM7N.js";
import {
  ServingScalarWhereInputSchema
} from "./chunk-LDU6EOA5.js";
import {
  ServingCreateManyItemInputEnvelopeSchema
} from "./chunk-Q4TGFXPZ.js";
import {
  ServingCreateOrConnectWithoutItemInputSchema
} from "./chunk-LVZPXU3C.js";
import {
  ServingCreateWithoutItemInputSchema
} from "./chunk-O4KQDRJZ.js";
import {
  ServingUncheckedCreateWithoutItemInputSchema
} from "./chunk-IBJBBFSU.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-BRBARM24.js";

// src/database/inputTypeSchemas/ServingUncheckedUpdateManyWithoutItemNestedInputSchema.ts
import { z } from "zod";
var ServingUncheckedUpdateManyWithoutItemNestedInputSchema = z.object({
  create: z.union([z.lazy(() => ServingCreateWithoutItemInputSchema), z.lazy(() => ServingCreateWithoutItemInputSchema).array(), z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema), z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ServingCreateOrConnectWithoutItemInputSchema), z.lazy(() => ServingCreateOrConnectWithoutItemInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ServingUpsertWithWhereUniqueWithoutItemInputSchema), z.lazy(() => ServingUpsertWithWhereUniqueWithoutItemInputSchema).array()]).optional(),
  createMany: z.lazy(() => ServingCreateManyItemInputEnvelopeSchema).optional(),
  set: z.union([z.lazy(() => ServingWhereUniqueInputSchema), z.lazy(() => ServingWhereUniqueInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ServingWhereUniqueInputSchema), z.lazy(() => ServingWhereUniqueInputSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ServingWhereUniqueInputSchema), z.lazy(() => ServingWhereUniqueInputSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ServingWhereUniqueInputSchema), z.lazy(() => ServingWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => ServingUpdateWithWhereUniqueWithoutItemInputSchema), z.lazy(() => ServingUpdateWithWhereUniqueWithoutItemInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ServingUpdateManyWithWhereWithoutItemInputSchema), z.lazy(() => ServingUpdateManyWithWhereWithoutItemInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ServingScalarWhereInputSchema), z.lazy(() => ServingScalarWhereInputSchema).array()]).optional()
}).strict();
var ServingUncheckedUpdateManyWithoutItemNestedInputSchema_default = ServingUncheckedUpdateManyWithoutItemNestedInputSchema;

export {
  ServingUncheckedUpdateManyWithoutItemNestedInputSchema,
  ServingUncheckedUpdateManyWithoutItemNestedInputSchema_default
};
//# sourceMappingURL=chunk-2NTNEQGL.js.map