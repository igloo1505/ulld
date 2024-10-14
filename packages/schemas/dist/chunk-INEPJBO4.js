import {
  KanBanCardCreateWithoutKanBanListInputSchema
} from "./chunk-5Z5OUN6K.js";
import {
  KanBanCardUncheckedCreateWithoutKanBanListInputSchema
} from "./chunk-GGTAOTRC.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-H26KGHY7.js";

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
//# sourceMappingURL=chunk-INEPJBO4.js.map