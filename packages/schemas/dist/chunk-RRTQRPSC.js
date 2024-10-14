import {
  BibCreateWithoutEntriesInputSchema
} from "./chunk-IFYUEVP7.js";
import {
  BibUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-MNNJTQLC.js";
import {
  BibWhereUniqueInputSchema
} from "./chunk-ZFQO6FHY.js";

// src/database/inputTypeSchemas/BibCreateOrConnectWithoutEntriesInputSchema.ts
import { z } from "zod";
var BibCreateOrConnectWithoutEntriesInputSchema = z.object({
  where: z.lazy(() => BibWhereUniqueInputSchema),
  create: z.union([z.lazy(() => BibCreateWithoutEntriesInputSchema), z.lazy(() => BibUncheckedCreateWithoutEntriesInputSchema)])
}).strict();
var BibCreateOrConnectWithoutEntriesInputSchema_default = BibCreateOrConnectWithoutEntriesInputSchema;

export {
  BibCreateOrConnectWithoutEntriesInputSchema,
  BibCreateOrConnectWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-RRTQRPSC.js.map