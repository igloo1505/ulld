import {
  BibCreateWithoutEntriesInputSchema
} from "./chunk-G4BDN2HA.js";
import {
  BibUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-WCNBQO4V.js";
import {
  BibWhereUniqueInputSchema
} from "./chunk-GOTDWA2C.js";

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
//# sourceMappingURL=chunk-LLXSHX5V.js.map