import {
  BibEntryUncheckedUpdateManyWithoutBibInputSchema
} from "./chunk-B3YSKPWU.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-5VVW6VYN.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-ZZJQ2CJ5.js";

// src/database/inputTypeSchemas/BibEntryUpdateManyWithWhereWithoutBibInputSchema.ts
import { z } from "zod";
var BibEntryUpdateManyWithWhereWithoutBibInputSchema = z.object({
  where: z.lazy(() => BibEntryScalarWhereInputSchema),
  data: z.union([z.lazy(() => BibEntryUpdateManyMutationInputSchema), z.lazy(() => BibEntryUncheckedUpdateManyWithoutBibInputSchema)])
}).strict();
var BibEntryUpdateManyWithWhereWithoutBibInputSchema_default = BibEntryUpdateManyWithWhereWithoutBibInputSchema;

export {
  BibEntryUpdateManyWithWhereWithoutBibInputSchema,
  BibEntryUpdateManyWithWhereWithoutBibInputSchema_default
};
//# sourceMappingURL=chunk-RF2AXYCW.js.map