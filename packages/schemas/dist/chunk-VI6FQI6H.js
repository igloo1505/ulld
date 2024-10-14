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
//# sourceMappingURL=chunk-VI6FQI6H.js.map