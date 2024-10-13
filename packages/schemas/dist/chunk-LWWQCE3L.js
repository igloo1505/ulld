import {
  ReadingListUncheckedUpdateManyWithoutIpynbNotesInputSchema
} from "./chunk-IJETRPYP.js";
import {
  ReadingListScalarWhereInputSchema
} from "./chunk-T3BT4DST.js";
import {
  ReadingListUpdateManyMutationInputSchema
} from "./chunk-4FHEE7JN.js";

// src/database/inputTypeSchemas/ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema.ts
import { z } from "zod";
var ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema = z.object({
  where: z.lazy(() => ReadingListScalarWhereInputSchema),
  data: z.union([z.lazy(() => ReadingListUpdateManyMutationInputSchema), z.lazy(() => ReadingListUncheckedUpdateManyWithoutIpynbNotesInputSchema)])
}).strict();
var ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema_default = ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema;

export {
  ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema,
  ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema_default
};
//# sourceMappingURL=chunk-LWWQCE3L.js.map