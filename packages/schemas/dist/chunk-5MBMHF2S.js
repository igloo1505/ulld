import {
  ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema
} from "./chunk-NKB27X3E.js";
import {
  ReadingListScalarWhereInputSchema
} from "./chunk-T3BT4DST.js";
import {
  ReadingListUpdateManyMutationInputSchema
} from "./chunk-4FHEE7JN.js";

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
//# sourceMappingURL=chunk-5MBMHF2S.js.map