import {
  BibEntryListRelationFilterSchema,
  IpynbListRelationFilterSchema,
  MdxNoteListRelationFilterSchema,
  ReadingListWhereInputSchema
} from "./chunk-XHIJ766H.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";

// src/database/inputTypeSchemas/ReadingListWhereUniqueInputSchema.ts
import { z } from "zod";
var ReadingListWhereUniqueInputSchema = z.object({
  name: z.string()
}).and(z.object({
  name: z.string().optional(),
  AND: z.union([z.lazy(() => ReadingListWhereInputSchema), z.lazy(() => ReadingListWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => ReadingListWhereInputSchema).array().optional(),
  NOT: z.union([z.lazy(() => ReadingListWhereInputSchema), z.lazy(() => ReadingListWhereInputSchema).array()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  lastUpdate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  bibEntries: z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbListRelationFilterSchema).optional()
}).strict());
var ReadingListWhereUniqueInputSchema_default = ReadingListWhereUniqueInputSchema;

export {
  ReadingListWhereUniqueInputSchema,
  ReadingListWhereUniqueInputSchema_default
};
//# sourceMappingURL=chunk-M5S5NQW5.js.map