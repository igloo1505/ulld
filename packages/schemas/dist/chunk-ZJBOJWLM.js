import {
  BibEntryCreateWithoutBibInputSchema
} from "./chunk-USZFHDYB.js";
import {
  BibEntryUncheckedCreateWithoutBibInputSchema
} from "./chunk-R7N5OQON.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4EOX5ZBO.js";

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
//# sourceMappingURL=chunk-ZJBOJWLM.js.map