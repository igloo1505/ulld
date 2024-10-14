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
//# sourceMappingURL=chunk-2OVCX575.js.map