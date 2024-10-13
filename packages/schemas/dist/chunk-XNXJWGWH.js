import {
  BibEntryUncheckedUpdateManyWithoutBibInputSchema
} from "./chunk-IPKSV6I6.js";
import {
  BibEntryScalarWhereInputSchema
} from "./chunk-O3SGS2YY.js";
import {
  BibEntryUpdateManyMutationInputSchema
} from "./chunk-GVOXETSB.js";

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
//# sourceMappingURL=chunk-XNXJWGWH.js.map