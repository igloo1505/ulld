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

// src/database/inputTypeSchemas/ServingCreateNestedManyWithoutItemInputSchema.ts
import { z } from "zod";
var ServingCreateNestedManyWithoutItemInputSchema = z.object({
  create: z.union([z.lazy(() => ServingCreateWithoutItemInputSchema), z.lazy(() => ServingCreateWithoutItemInputSchema).array(), z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema), z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ServingCreateOrConnectWithoutItemInputSchema), z.lazy(() => ServingCreateOrConnectWithoutItemInputSchema).array()]).optional(),
  createMany: z.lazy(() => ServingCreateManyItemInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => ServingWhereUniqueInputSchema), z.lazy(() => ServingWhereUniqueInputSchema).array()]).optional()
}).strict();
var ServingCreateNestedManyWithoutItemInputSchema_default = ServingCreateNestedManyWithoutItemInputSchema;

export {
  ServingCreateNestedManyWithoutItemInputSchema,
  ServingCreateNestedManyWithoutItemInputSchema_default
};
//# sourceMappingURL=chunk-5AIU2MNV.js.map