import {
  KanBanCardCreateManyKanBanListInputEnvelopeSchema
} from "./chunk-DP3JS6VE.js";
import {
  KanBanCardCreateOrConnectWithoutKanBanListInputSchema
} from "./chunk-DDDDPWON.js";
import {
  KanBanCardCreateWithoutKanBanListInputSchema
} from "./chunk-ROU7NOMX.js";
import {
  KanBanCardUncheckedCreateWithoutKanBanListInputSchema
} from "./chunk-PMHR2V6T.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-XZKFFDAH.js";

// src/database/inputTypeSchemas/KanBanCardCreateNestedManyWithoutKanBanListInputSchema.ts
import { z } from "zod";
var KanBanCardCreateNestedManyWithoutKanBanListInputSchema = z.object({
  create: z.union([z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema), z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema).array(), z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema), z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema).array()]).optional(),
  createMany: z.lazy(() => KanBanCardCreateManyKanBanListInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => KanBanCardWhereUniqueInputSchema), z.lazy(() => KanBanCardWhereUniqueInputSchema).array()]).optional()
}).strict();
var KanBanCardCreateNestedManyWithoutKanBanListInputSchema_default = KanBanCardCreateNestedManyWithoutKanBanListInputSchema;

export {
  KanBanCardCreateNestedManyWithoutKanBanListInputSchema,
  KanBanCardCreateNestedManyWithoutKanBanListInputSchema_default
};
//# sourceMappingURL=chunk-P4FQO4ZD.js.map