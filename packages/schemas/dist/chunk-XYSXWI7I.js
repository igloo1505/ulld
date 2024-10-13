import {
  ServingCreateWithoutItemInputSchema
} from "./chunk-WZB7KC4N.js";
import {
  ServingUncheckedCreateWithoutItemInputSchema
} from "./chunk-YJMOPX5U.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-XBJQZROE.js";

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
//# sourceMappingURL=chunk-XYSXWI7I.js.map