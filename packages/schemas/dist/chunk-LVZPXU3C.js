import {
  ServingCreateWithoutItemInputSchema
} from "./chunk-O4KQDRJZ.js";
import {
  ServingUncheckedCreateWithoutItemInputSchema
} from "./chunk-IBJBBFSU.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-BRBARM24.js";

// src/database/inputTypeSchemas/ServingCreateOrConnectWithoutItemInputSchema.ts
import { z } from "zod";
var ServingCreateOrConnectWithoutItemInputSchema = z.object({
  where: z.lazy(() => ServingWhereUniqueInputSchema),
  create: z.union([z.lazy(() => ServingCreateWithoutItemInputSchema), z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema)])
}).strict();
var ServingCreateOrConnectWithoutItemInputSchema_default = ServingCreateOrConnectWithoutItemInputSchema;

export {
  ServingCreateOrConnectWithoutItemInputSchema,
  ServingCreateOrConnectWithoutItemInputSchema_default
};
//# sourceMappingURL=chunk-LVZPXU3C.js.map