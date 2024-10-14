import {
  ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema
} from "./chunk-GWYTBMTQ.js";
import {
  ReadingListScalarWhereInputSchema
} from "./chunk-V3TMPJ46.js";
import {
  ReadingListUpdateManyMutationInputSchema
} from "./chunk-IO3PULDH.js";

// src/database/inputTypeSchemas/ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema.ts
import { z } from "zod";
var ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema = z.object({
  where: z.lazy(() => ReadingListScalarWhereInputSchema),
  data: z.union([z.lazy(() => ReadingListUpdateManyMutationInputSchema), z.lazy(() => ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema)])
}).strict();
var ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema_default = ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema;

export {
  ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema,
  ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema_default
};
//# sourceMappingURL=chunk-UNLKMMZM.js.map