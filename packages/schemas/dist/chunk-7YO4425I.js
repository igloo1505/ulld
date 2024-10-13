import {
  ServingUpsertWithWhereUniqueWithoutItemInputSchema
} from "./chunk-Z4BWW66B.js";
import {
  ServingUpdateWithWhereUniqueWithoutItemInputSchema
} from "./chunk-RFG6BD4D.js";
import {
  ServingUpdateManyWithWhereWithoutItemInputSchema
} from "./chunk-A5YNG4HA.js";
import {
  ServingScalarWhereInputSchema
} from "./chunk-TAJRBVO7.js";
import {
  ServingCreateManyItemInputEnvelopeSchema
} from "./chunk-AJCHFE7C.js";
import {
  ServingCreateOrConnectWithoutItemInputSchema
} from "./chunk-XYSXWI7I.js";
import {
  ServingCreateWithoutItemInputSchema
} from "./chunk-WZB7KC4N.js";
import {
  ServingUncheckedCreateWithoutItemInputSchema
} from "./chunk-YJMOPX5U.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-XBJQZROE.js";

// src/database/inputTypeSchemas/ServingUpdateManyWithoutItemNestedInputSchema.ts
import { z } from "zod";
var ServingUpdateManyWithoutItemNestedInputSchema = z.object({
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
var ServingUpdateManyWithoutItemNestedInputSchema_default = ServingUpdateManyWithoutItemNestedInputSchema;

export {
  ServingUpdateManyWithoutItemNestedInputSchema,
  ServingUpdateManyWithoutItemNestedInputSchema_default
};
//# sourceMappingURL=chunk-7YO4425I.js.map