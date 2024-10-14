import {
  BibCreateOrConnectWithoutEntriesInputSchema
} from "./chunk-RRTQRPSC.js";
import {
  BibCreateWithoutEntriesInputSchema
} from "./chunk-IFYUEVP7.js";
import {
  BibUncheckedCreateWithoutEntriesInputSchema
} from "./chunk-MNNJTQLC.js";
import {
  BibWhereUniqueInputSchema
} from "./chunk-ZFQO6FHY.js";

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
//# sourceMappingURL=chunk-65W5HNYA.js.map