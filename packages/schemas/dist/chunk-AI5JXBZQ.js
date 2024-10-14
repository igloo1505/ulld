import {
  BibEntryUncheckedUpdateWithoutBibInputSchema
} from "./chunk-DMTG4KUB.js";
import {
  BibEntryUpdateWithoutBibInputSchema
} from "./chunk-WGRG7LVG.js";
import {
  BibEntryCreateWithoutBibInputSchema
} from "./chunk-USZFHDYB.js";
import {
  BibEntryUncheckedCreateWithoutBibInputSchema
} from "./chunk-R7N5OQON.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4EOX5ZBO.js";

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
//# sourceMappingURL=chunk-AI5JXBZQ.js.map