import {
  DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema
} from "./chunk-724KZQQD.js";
import {
  DietUpsertWithoutPeriodsFollowedInputSchema
} from "./chunk-LCONTHZE.js";
import {
  DietUncheckedUpdateWithoutPeriodsFollowedInputSchema
} from "./chunk-GTHEIMR4.js";
import {
  DietUpdateWithoutPeriodsFollowedInputSchema
} from "./chunk-LO75OSOS.js";
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
import {
  DietWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/inputTypeSchemas/DietUpdateOneWithoutPeriodsFollowedNestedInputSchema.ts
import { z } from "zod";
var DietUpdateOneWithoutPeriodsFollowedNestedInputSchema = z.object({
  create: z.union([z.lazy(() => DietCreateWithoutPeriodsFollowedInputSchema), z.lazy(() => DietUncheckedCreateWithoutPeriodsFollowedInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => DietCreateOrConnectWithoutPeriodsFollowedInputSchema).optional(),
  upsert: z.lazy(() => DietUpsertWithoutPeriodsFollowedInputSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => DietWhereInputSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => DietWhereInputSchema)]).optional(),
  connect: z.lazy(() => DietWhereUniqueInputSchema).optional(),
  update: z.union([z.lazy(() => DietUpdateToOneWithWhereWithoutPeriodsFollowedInputSchema), z.lazy(() => DietUpdateWithoutPeriodsFollowedInputSchema), z.lazy(() => DietUncheckedUpdateWithoutPeriodsFollowedInputSchema)]).optional()
}).strict();
var DietUpdateOneWithoutPeriodsFollowedNestedInputSchema_default = DietUpdateOneWithoutPeriodsFollowedNestedInputSchema;

export {
  DietUpdateOneWithoutPeriodsFollowedNestedInputSchema,
  DietUpdateOneWithoutPeriodsFollowedNestedInputSchema_default
};
//# sourceMappingURL=chunk-LCCR5JQM.js.map