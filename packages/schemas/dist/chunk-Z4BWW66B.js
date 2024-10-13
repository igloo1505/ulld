import {
  ServingUncheckedUpdateWithoutItemInputSchema
} from "./chunk-JKR4KFHK.js";
import {
  ServingUpdateWithoutItemInputSchema
} from "./chunk-BYSJ263J.js";
import {
  ServingCreateWithoutItemInputSchema
} from "./chunk-WZB7KC4N.js";
import {
  ServingUncheckedCreateWithoutItemInputSchema
} from "./chunk-YJMOPX5U.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-XBJQZROE.js";

// src/database/inputTypeSchemas/ServingUpsertWithWhereUniqueWithoutItemInputSchema.ts
import { z } from "zod";
var ServingUpsertWithWhereUniqueWithoutItemInputSchema = z.object({
  where: z.lazy(() => ServingWhereUniqueInputSchema),
  update: z.union([z.lazy(() => ServingUpdateWithoutItemInputSchema), z.lazy(() => ServingUncheckedUpdateWithoutItemInputSchema)]),
  create: z.union([z.lazy(() => ServingCreateWithoutItemInputSchema), z.lazy(() => ServingUncheckedCreateWithoutItemInputSchema)])
}).strict();
var ServingUpsertWithWhereUniqueWithoutItemInputSchema_default = ServingUpsertWithWhereUniqueWithoutItemInputSchema;

export {
  ServingUpsertWithWhereUniqueWithoutItemInputSchema,
  ServingUpsertWithWhereUniqueWithoutItemInputSchema_default
};
//# sourceMappingURL=chunk-Z4BWW66B.js.map