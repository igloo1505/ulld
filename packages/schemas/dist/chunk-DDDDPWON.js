import {
  KanBanCardCreateWithoutKanBanListInputSchema
} from "./chunk-ROU7NOMX.js";
import {
  KanBanCardUncheckedCreateWithoutKanBanListInputSchema
} from "./chunk-PMHR2V6T.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-XZKFFDAH.js";

// src/database/inputTypeSchemas/KanBanCardCreateOrConnectWithoutKanBanListInputSchema.ts
import { z } from "zod";
var KanBanCardCreateOrConnectWithoutKanBanListInputSchema = z.object({
  where: z.lazy(() => KanBanCardWhereUniqueInputSchema),
  create: z.union([z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema)])
}).strict();
var KanBanCardCreateOrConnectWithoutKanBanListInputSchema_default = KanBanCardCreateOrConnectWithoutKanBanListInputSchema;

export {
  KanBanCardCreateOrConnectWithoutKanBanListInputSchema,
  KanBanCardCreateOrConnectWithoutKanBanListInputSchema_default
};
//# sourceMappingURL=chunk-DDDDPWON.js.map