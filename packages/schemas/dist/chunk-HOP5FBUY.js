import {
  BibEntryUncheckedUpdateWithoutBibInputSchema
} from "./chunk-DMTG4KUB.js";
import {
  BibEntryUpdateWithoutBibInputSchema
} from "./chunk-WGRG7LVG.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4EOX5ZBO.js";

// src/database/inputTypeSchemas/BibEntryUpdateWithWhereUniqueWithoutBibInputSchema.ts
import { z } from "zod";
var BibEntryUpdateWithWhereUniqueWithoutBibInputSchema = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([z.lazy(() => BibEntryUpdateWithoutBibInputSchema), z.lazy(() => BibEntryUncheckedUpdateWithoutBibInputSchema)])
}).strict();
var BibEntryUpdateWithWhereUniqueWithoutBibInputSchema_default = BibEntryUpdateWithWhereUniqueWithoutBibInputSchema;

export {
  BibEntryUpdateWithWhereUniqueWithoutBibInputSchema,
  BibEntryUpdateWithWhereUniqueWithoutBibInputSchema_default
};
//# sourceMappingURL=chunk-HOP5FBUY.js.map