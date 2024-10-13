import {
  BibCreateOrConnectWithoutEntriesInputSchema
} from "./chunk-LLXSHX5V.js";
import {
  BibCreateWithoutEntriesInputSchema
} from "./chunk-G4BDN2HA.js";
import {
  BibUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-WCNBQO4V.js";
import {
  BibWhereUniqueInputSchema
} from "./chunk-GOTDWA2C.js";

// src/database/inputTypeSchemas/BibCreateNestedOneWithoutEntriesInputSchema.ts
import { z } from "zod";
var BibCreateNestedOneWithoutEntriesInputSchema = z.object({
  create: z.union([z.lazy(() => BibCreateWithoutEntriesInputSchema), z.lazy(() => BibUncheckedCreateWithoutEntriesInputSchema)]).optional(),
  connectOrCreate: z.lazy(() => BibCreateOrConnectWithoutEntriesInputSchema).optional(),
  connect: z.lazy(() => BibWhereUniqueInputSchema).optional()
}).strict();
var BibCreateNestedOneWithoutEntriesInputSchema_default = BibCreateNestedOneWithoutEntriesInputSchema;

export {
  BibCreateNestedOneWithoutEntriesInputSchema,
  BibCreateNestedOneWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-YSIKIXHH.js.map