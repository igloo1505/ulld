import {
  BibEntryUncheckedUpdateWithoutBibInputSchema
} from "./chunk-6N7VBACV.js";
import {
  BibEntryUpdateWithoutBibInputSchema
} from "./chunk-N65E33WI.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4KOM7HXL.js";

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
//# sourceMappingURL=chunk-NV2URVNK.js.map