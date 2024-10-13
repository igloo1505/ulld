import {
  ReadingListUncheckedUpdateManyInputSchema
} from "./chunk-Y5DHDDAY.js";
import {
  ReadingListUpdateManyMutationInputSchema
} from "./chunk-4FHEE7JN.js";
import {
  ReadingListWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/ReadingListUpdateManyArgsSchema.ts
import { z } from "zod";
var ReadingListUpdateManyArgsSchema = z.object({
  data: z.union([ReadingListUpdateManyMutationInputSchema, ReadingListUncheckedUpdateManyInputSchema]),
  where: ReadingListWhereInputSchema.optional()
}).strict();
var ReadingListUpdateManyArgsSchema_default = ReadingListUpdateManyArgsSchema;

export {
  ReadingListUpdateManyArgsSchema,
  ReadingListUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-NOYIKQJT.js.map