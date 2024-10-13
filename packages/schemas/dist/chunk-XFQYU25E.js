import {
  BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema
} from "./chunk-MGABWCMI.js";
import {
  BibEntryUpdateWithoutCitationGroupsInputSchema
} from "./chunk-L6YBYY4E.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4KOM7HXL.js";

// src/database/inputTypeSchemas/BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema.ts
import { z } from "zod";
var BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema = z.object({
  where: z.lazy(() => BibEntryWhereUniqueInputSchema),
  data: z.union([z.lazy(() => BibEntryUpdateWithoutCitationGroupsInputSchema), z.lazy(() => BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema)])
}).strict();
var BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema_default = BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema;

export {
  BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema,
  BibEntryUpdateWithWhereUniqueWithoutCitationGroupsInputSchema_default
};
//# sourceMappingURL=chunk-XFQYU25E.js.map