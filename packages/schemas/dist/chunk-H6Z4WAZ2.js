import {
  BibEntryCreateWithoutBibInputSchema
} from "./chunk-7CS3SJKD.js";
import {
  BibEntryUncheckedCreateWithoutBibInputSchema
} from "./chunk-OOMJHAVF.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4KOM7HXL.js";

// src/database/inputTypeSchemas/BibEntryCreateOrConnectWithoutBibInputSchema.ts
import { z } from "zod";
var BibEntryCreateOrConnectWithoutBibInputSchema = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  create: z.union([z.lazy(() => BibEntryCreateWithoutBibInputSchema), z.lazy(() => BibEntryUncheckedCreateWithoutBibInputSchema)])
}).strict();
var BibEntryCreateOrConnectWithoutBibInputSchema_default = BibEntryCreateOrConnectWithoutBibInputSchema;

export {
  BibEntryCreateOrConnectWithoutBibInputSchema,
  BibEntryCreateOrConnectWithoutBibInputSchema_default
};
//# sourceMappingURL=chunk-H6Z4WAZ2.js.map