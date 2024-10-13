import {
  ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema
} from "./chunk-VGPSMGO2.js";
import {
  ReadingListScalarWhereInputSchema
} from "./chunk-T3BT4DST.js";
import {
  ReadingListUpdateManyMutationInputSchema
} from "./chunk-4FHEE7JN.js";

// src/database/inputTypeSchemas/ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema.ts
import { z } from "zod";
var ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema = z.object({
  where: z.lazy(() => ReadingListScalarWhereInputSchema),
  data: z.union([z.lazy(() => ReadingListUpdateManyMutationInputSchema), z.lazy(() => ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema)])
}).strict();
var ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema_default = ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema;

export {
  ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema,
  ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema_default
};
//# sourceMappingURL=chunk-U3IZZBQN.js.map