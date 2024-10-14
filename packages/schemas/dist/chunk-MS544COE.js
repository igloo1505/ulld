import {
  KanBanCardCreateManyKanBanListInputEnvelopeSchema
} from "./chunk-H4MTV5UF.js";
import {
  KanBanCardCreateOrConnectWithoutKanBanListInputSchema
} from "./chunk-INEPJBO4.js";
import {
  KanBanCardCreateWithoutKanBanListInputSchema
} from "./chunk-5Z5OUN6K.js";
import {
  KanBanCardUncheckedCreateWithoutKanBanListInputSchema
} from "./chunk-GGTAOTRC.js";
import {
  KanBanCardWhereUniqueInputSchema
} from "./chunk-H26KGHY7.js";

// src/database/inputTypeSchemas/KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema.ts
import { z } from "zod";
var KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema = z.object({
  create: z.union([z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema), z.lazy(() => KanBanCardCreateWithoutKanBanListInputSchema).array(), z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema), z.lazy(() => KanBanCardUncheckedCreateWithoutKanBanListInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema), z.lazy(() => KanBanCardCreateOrConnectWithoutKanBanListInputSchema).array()]).optional(),
  createMany: z.lazy(() => KanBanCardCreateManyKanBanListInputEnvelopeSchema).optional(),
  connect: z.union([z.lazy(() => KanBanCardWhereUniqueInputSchema), z.lazy(() => KanBanCardWhereUniqueInputSchema).array()]).optional()
}).strict();
var KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema_default = KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema;

export {
  KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema,
  KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema_default
};
//# sourceMappingURL=chunk-MS544COE.js.map