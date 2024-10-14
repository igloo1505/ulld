import {
  BibEntryUncheckedUpdateWithoutCitationGroupsInputSchema
} from "./chunk-ZZIVTAWP.js";
import {
  BibEntryUpdateWithoutCitationGroupsInputSchema
} from "./chunk-I2GPPUXH.js";
import {
  BibEntryWhereUniqueInputSchema
} from "./chunk-4EOX5ZBO.js";

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
//# sourceMappingURL=chunk-SSC67XLF.js.map