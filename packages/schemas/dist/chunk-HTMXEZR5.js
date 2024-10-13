import {
  DietCreateOrConnectWithoutPeriodsFollowedInputSchema
} from "./chunk-XUZW735L.js";
import {
  DietCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-LA7HVCOU.js";
import {
  DietUncheckedCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-THFBWXB3.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-CDT5ANSD.js";

// src/database/inputTypeSchemas/DietCreateNestedOneWithoutPeriodsFollowedInputSchema.ts
import { z } from "zod";
var DietCreateNestedOneWithoutPeriodsFollowedInputSchema = z.object({
  create: z.union([z.lazy(() => DietCreateWithoutPeriodsFollowedInputSchema), z.lazy(() => DietUncheckedCreateWithoutPeriodsFollowedInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => DietCreateOrConnectWithoutPeriodsFollowedInputSchema).optional(),
  connect: z.lazy(() => DietWhereUniqueInputSchema).optional()
}).strict();
var DietCreateNestedOneWithoutPeriodsFollowedInputSchema_default = DietCreateNestedOneWithoutPeriodsFollowedInputSchema;

export {
  DietCreateNestedOneWithoutPeriodsFollowedInputSchema,
  DietCreateNestedOneWithoutPeriodsFollowedInputSchema_default
};
//# sourceMappingURL=chunk-HTMXEZR5.js.map