import {
  BibEntryUncheckedUpdateWithoutBibInputSchema
} from "./chunk-6N7VBACV.js";
import {
  BibEntryUpdateWithoutBibInputSchema
} from "./chunk-N65E33WI.js";
import {
  BibEntryCreateWithoutBibInputSchema
} from "./chunk-7CS3SJKD.js";
import {
  BibEntryUncheckedCreateWithoutBibInputSchema
} from "./chunk-OOMJHAVF.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4KOM7HXL.js";

// src/database/inputTypeSchemas/BibEntryUpsertWithWhereUniqueWithoutBibInputSchema.ts
import { z } from "zod";
var BibEntryUpsertWithWhereUniqueWithoutBibInputSchema = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  update: z.union([z.lazy(() => BibEntryUpdateWithoutBibInputSchema), z.lazy(() => BibEntryUncheckedUpdateWithoutBibInputSchema)]),
  create: z.union([z.lazy(() => BibEntryCreateWithoutBibInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema)])
}).strict();
var BibEntryUpsertWithWhereUniqueWithoutBibInputSchema_default = BibEntryUpsertWithWhereUniqueWithoutBibInputSchema;

export {
  BibEntryUpsertWithWhereUniqueWithoutBibInputSchema,
  BibEntryUpsertWithWhereUniqueWithoutBibInputSchema_default
};
//# sourceMappingURL=chunk-V3YJVKXJ.js.map