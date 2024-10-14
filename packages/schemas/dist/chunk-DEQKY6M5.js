import {
  DietCreateOrConnectWithoutPeriodsFollowedInputSchema
} from "./chunk-CNU4SLXM.js";
import {
  DietCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-HOMBO5R4.js";
import {
  DietUncheckedCreateWithoutPeriodsFollowedInputSchema
} from "./chunk-5XHCT3BN.js";
import {
  DietWhereUniqueInputSchema
} from "./chunk-XSFJADHG.js";

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
//# sourceMappingURL=chunk-DEQKY6M5.js.map