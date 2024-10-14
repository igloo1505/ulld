import {
  ServingUncheckedUpdateWithoutItemInputSchema
} from "./chunk-QX3GHUID.js";
import {
  ServingUpdateWithoutItemInputSchema
} from "./chunk-VFB5WXXW.js";
import {
  ServingCreateWithoutItemInputSchema
} from "./chunk-O4KQDRJZ.js";
import {
  ServingUncheckedCreateWithoutItemInputSchema
} from "./chunk-IBJBBFSU.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-BRBARM24.js";

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
//# sourceMappingURL=chunk-WZVXK2VQ.js.map